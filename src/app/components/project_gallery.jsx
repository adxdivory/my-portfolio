import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useSettings } from "../context/SettingsContext";

const sampleProjects = [
  {
    id: 1,
    title: 'Mid-Marketing Prototype',
    company: 'Intuit, Inc.',
    image: '/images/mid-marketing.png',
    tags: ['UI/UX', 'User Testing', 'Market Research', 'React', 'Motion'],
    date: '2023-07-10',
  },
  {
    id: 2,
    title: 'StudyStream',
    company: 'UX/UI Design',
    image: '/images/studystream.png',
    tags: ['UX Design', 'Web Design'],
    date: '2023-06-01',
  },
  {
    id: 3,
    title: 'Skanect App Redesign',
    company: 'Sarah Lauchli, UX Designer',
    image: '/images/skanect.png',
    tags: ['3D', 'iOS', 'Figma', 'Illustrator', 'Photoshop'],
    date: '2023-05-14',
  },
];

export default function ProjectGallery() {
  const [projects, setProjects] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();

  useEffect(() => {
    setProjects(sampleProjects.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  const allTags = [...new Set(sampleProjects.flatMap(p => p.tags))];

  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const filteredProjects = projects.filter(project => {
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTags && matchesSearch;
  });

  return (
    <div className="w-full px-6 md:px-12 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Projects</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="font-medium">Filters:</span>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border border-transparent transition
              ${selectedTags.includes(tag)
                ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow-sm'
                : darkMode
                  ? 'bg-containerDark text-gray-300 border-gray-600 hover:bg-gray-800'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            onClick={() => toggleTag(tag)}
          >
            <span className="text-xs">
              {{
                'React': '⚛️',
                'UX Design': '🎨',
                'UI/UX': '🖌️',
                'User Testing': '🧪',
                'TypeScript': '🔠',
                'Figma': '📐',
                'Web Design': '🖥️',
                '3D': '🌀',
                'AI': '🤖',
                'Motion': '🎞️',
                'Market Research': '📊',
                'iOS': '📱',
                'Illustrator': '🖍️',
                'Photoshop': '📸'
              }[tag] || '🏷️'}
            </span>
            {tag}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search projects..."
        className={`w-full md:w-1/3 mb-6 px-4 py-2 rounded-md shadow-sm border 
          ${darkMode 
            ? 'bg-containerDark border-gray-600 text-gray-100 placeholder-gray-400' 
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            className={`rounded-xl overflow-hidden transition-transform duration-300
  ${darkMode 
    ? 'bg-containerDark text-gray-300 shadow-none hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
    : 'bg-white text-gray-700 shadow-sm hover:shadow-xl'} 
  hover:scale-[1.015]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-1">{project.title}</h2>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.company}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className={`text-xs px-2 py-1 rounded-full font-medium shadow-sm
    ${darkMode 
      ? 'bg-gradient-to-r from-purple-800 to-pink-800 text-pink-100' 
      : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
