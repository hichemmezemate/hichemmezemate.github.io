import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeContextProvider from '../components/ThemeContextProvider'; 
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio",
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