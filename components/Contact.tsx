'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from './LanguageContext';
import { getSiteConfig } from '../data/config';

export default function Contact() {
  const { language } = useLanguage();
  const config = getSiteConfig(language);

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.default', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
          {language === 'fr' ? 'Contactez-' : 'Contact '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            {language === 'fr' ? 'Moi' : 'Me'}
          </Box>
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
          {language === 'fr' 
            ? "Actuellement à l'écoute de nouvelles opportunités en tant que Développeur Full Stack / DevOps. N'hésitez pas à me contacter pour échanger sur vos projets."
            : "Currently open to new opportunities as a Full Stack / DevOps Developer. Feel free to reach out to discuss your projects."}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<EmailIcon />}
            href={`mailto:${config.email}`}
            sx={{ px: 4, py: 1.5 }}
          >
            {language === 'fr' ? "M'envoyer un mail" : "Send me an email"}
          </Button>
          
          <Button 
            variant="outlined" 
            size="large" 
            startIcon={<LinkedInIcon />}
            href={config.socials.linkedin}
            target="_blank"
            sx={{ px: 4, py: 1.5 }}
          >
            LinkedIn
          </Button>

          <Button 
            variant="outlined" 
            size="large" 
            startIcon={<GitHubIcon />}
            href={config.socials.github}
            target="_blank"
            sx={{ px: 4, py: 1.5, borderColor: 'text.primary', color: 'text.primary' }}
          >
            GitHub
          </Button>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 10 }}>
          © {new Date().getFullYear()} {config.title}. {language === 'fr' ? "Tous droits réservés." : "All rights reserved."}
        </Typography>
      </Container>
    </Box>
  );
}