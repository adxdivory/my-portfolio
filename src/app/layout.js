"use client";
import "./globals.css";
import { SettingsProvider } from './context/SettingsContext.js';



// export const metadata = {
//   title: "Ivory Brown's Portfolio",
//   description: "A personal portfolio website",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
