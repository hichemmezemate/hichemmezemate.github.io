'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { useLanguage } from './LanguageContext';
import { getSiteConfig, translations } from '../data/config';

export default function Hero() {
  const theme = useTheme();
  const { language } = useLanguage();
  
  const config = getSiteConfig(language);
  const t = translations[language];

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
            {language === 'fr' ? 'Développeur' : 'Full Stack'} <br />
            <Box component="span" sx={{ color: 'primary.main' }}>
              {language === 'fr' ? 'Full Stack' : 'Developer'}
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
            {config.description}
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
              href={`mailto:${config.email}`}
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              {t.sections.contact}
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="#projects"
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              {t.sections.projects}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}