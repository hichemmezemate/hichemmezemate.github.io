import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeContextProvider from '../components/ThemeContextProvider'; 
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: "Hichem Mezemate | Développeur Full Stack & Architect des Systèmes d'Information",
  description: "Développeur Full Stack spécialisé en React, Vue.js, Node.js et Python. Découvrez mes projets et mon parcours aux Ministères Sociaux.",
  keywords: ["Hichem Mezemate", "Développeur Full Stack", "Portfolio", "React", "Next.js", "Docker", "Paris", "Node.js", "Vue.js"],
  icons: {
    icon: '/pixelArt.ico', 
    apple: '/pixelArt.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeContextProvider>
            <Navbar />
            <Box component="main">
                {children}
            </Box>
          </ThemeContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}