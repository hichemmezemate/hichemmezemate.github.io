'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { siteConfig } from '../data/config';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.default', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
          Contactez-<Box component="span" sx={{ color: 'primary.main' }}>Moi</Box>
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
          Actuellement à l'écoute de nouvelles opportunités en tant que Développeur Full Stack / DevOps.
          N'hésitez pas à me contacter pour échanger sur vos projets.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<EmailIcon />}
            href={`mailto:${siteConfig.email}`}
            sx={{ px: 4, py: 1.5 }}
          >
            M'envoyer un mail
          </Button>
          
          <Button 
            variant="outlined" 
            size="large" 
            startIcon={<LinkedInIcon />}
            href={siteConfig.socials.linkedin}
            target="_blank"
            sx={{ px: 4, py: 1.5 }}
          >
            LinkedIn
          </Button>

          <Button 
            variant="outlined" 
            size="large" 
            startIcon={<GitHubIcon />}
            href={siteConfig.socials.github}
            target="_blank"
            sx={{ px: 4, py: 1.5, borderColor: 'text.primary', color: 'text.primary' }}
          >
            GitHub
          </Button>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 10 }}>
          © {new Date().getFullYear()} {siteConfig.title}. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
}