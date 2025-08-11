import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';

import { useSettings } from "../context/SettingsContext";

export default function ProjectGallery() {
  const [projects, setProjects] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [isMdUp, setIsMdUp] = useState(false);
  const [increment, setIncrement] = useState(3); // 3 for mobile, 6 for md+
  const [visibleCount, setVisibleCount] = useState(3);

  const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();

  useEffect(() => {
    setProjects(projectsData.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)'); // Tailwind md breakpoint
    const apply = (matches) => {
      setIsMdUp(matches);
      const nextIncrement = matches ? 6 : 3;
      setIncrement(nextIncrement);
      setVisibleCount(nextIncrement);
    };
    // initial
    apply(mq.matches);
    // listener (with fallback for older browsers)
    const handler = (e) => apply(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handler);
      } else if (mq.removeListener) {
        mq.removeListener(handler);
      }
    };
  }, []);

  useEffect(() => {
    setVisibleCount(increment);
  }, [increment, selectedTags, searchTerm]);

  const allTags = [...new Set(projectsData.flatMap(p => p.tags))]
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => {
      const aSelected = selectedTags.includes(a);
      const bSelected = selectedTags.includes(b);
      if (aSelected && !bSelected) return -1;
      if (!aSelected && bSelected) return 1;
      return 0;
    });

  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const filteredProjects = projects.filter(project => {
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTags && matchesSearch;
  });

  const projectsToRender = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="w-full px-6 md:px-12 py-10">
      <div className={`mb-6 p-4 rounded-lg text-center text-sm font-medium shadow-md ${darkMode ? 'bg-red-900 text-red-100' : 'bg-red-100 text-red-900'}`}>
        🚧 This section of my website is still under construction. You can view the full list of upcoming projects below (none are clickable yet), or visit my temporary portfolio here: 
        <a href="https://www.tinyurl.com/ivoryswork" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-500 ml-1">
          www.tinyurl.com/ivoryswork
        </a>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Projects<span className={darkMode ? ' text-lightVerde' : ' text-verde'}>.</span></h1>

      <div className="flex gap-2 mb-4 overflow-x-auto whitespace-nowrap -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:whitespace-normal">
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
                'User Research': '🧪',
                'TypeScript': '🔠',
                'Figma': '📐',
                'Web App': '🖥️',
                'Plugin': '🛠️',
                '3D': '🌀',
                'AI': '🤖',
                'Motion': '🎞️',
                'iOS': '',
                'Responsive': '📱'
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
        {projectsToRender.map(project => (
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
      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setVisibleCount(prev => Math.min(prev + increment, filteredProjects.length))}
            className={`px-4 py-2 rounded-md font-medium shadow-sm transition
              ${darkMode ? 'bg-purple-900 text-purple-100 hover:bg-purple-800' : 'bg-purple-100 text-purple-900 hover:bg-purple-200'}`}
          >
            Show {Math.min(increment, filteredProjects.length - visibleCount)} more
          </button>
        </div>
      )}
    </div>
  );
}