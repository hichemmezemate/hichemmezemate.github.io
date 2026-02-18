import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeContextProvider from '../components/ThemeContextProvider'; 
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import './globals.css';
import { LanguageProvider } from '../components/LanguageContext';

export const metadata: Metadata = {
  title: "Hichem Mezemate | Portfolio",
  description: "Développeur Full Stack",
  icons: {
    icon: '/pixelArt.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <AppRouterCacheProvider>
          <LanguageProvider>
            <ThemeContextProvider>
              <Navbar />
              <Box component="main">
                {children}
              </Box>
            </ThemeContextProvider>
          </LanguageProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}