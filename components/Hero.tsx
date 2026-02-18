'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        background: theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #050505 0%, #1a1a1a 100%)'
            : 'linear-gradient(180deg, #f6f7eb 0%, #ffffff 100%)',
        pt: { xs: 15, md: 25 },
        pb: { xs: 10, md: 15 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              color: 'text.primary',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            }}
          >
            Développeur <br />
            <Box component="span" sx={{ color: 'primary.main' }}>
              Full Stack
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 5,
              color: 'text.secondary',
              lineHeight: 1.6,
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Architecte des Systèmes d'Information et développeur passionné par la conception d'applications robustes. 
            Expertise en VueJS, React, Node.js et Python au service de projets à fort impact.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="mailto:ton-email@example.com"
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              Me contacter
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="#projects"
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              Voir mes projets
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}