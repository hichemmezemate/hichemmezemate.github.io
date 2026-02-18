'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar'; // Import pour le logo rond
import Link from 'next/link';
import { navLinks } from '../data/config'; 

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from './ThemeContextProvider';

function Navbar() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };
  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* LOGO DESKTOP - Rendu Rond via Avatar */}
          <Avatar
            src="/pixelArt.png"
            alt="Hichem Mezemate"
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              mr: 2, 
              width: 45, 
              height: 45,
              border: '2px solid #fff'
            }}
          />

          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hichem Mezemate
          </Typography>

          {/* MENU MOBILE (Hamburger) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navLinks.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu} component={Link} href={page.href}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* LOGO MOBILE - Rendu Rond via Avatar */}
          <Avatar
            src="/pixelArt.png"
            alt="Hichem Mezemate"
            sx={{ 
              display: { xs: 'flex', md: 'none' }, 
              mr: 1, 
              width: 35, 
              height: 35,
              border: '1px solid #fff'
            }}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hichem
          </Typography>

          {/* LIENS DE NAVIGATION (Desktop) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {navLinks.map((page) => (
              <Button
                key={page.label}
                component={Link}
                href={page.href}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', mx: 2 }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* ACTIONS (Langue + Thème) */}
          <Box sx={{ flexGrow: 0, display: 'flex', gap: 1, alignItems: 'center' }}>
            
            <IconButton onClick={handleOpenLangMenu} color="inherit">
                <TranslateIcon />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElLang}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
            >
                <MenuItem onClick={handleCloseLangMenu}>English</MenuItem>
                <MenuItem onClick={handleCloseLangMenu}>Français</MenuItem>
            </Menu>

            <IconButton onClick={toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;