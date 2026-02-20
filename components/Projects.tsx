'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import { useLanguage } from './LanguageContext';
import { getProjects, translations } from '../data/config';

export default function Projects() {
  const { language } = useLanguage();
  const projects = getProjects(language);
  const t = translations[language];

  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
          {language === 'fr' ? 'Mes ' : 'My '} 
          <Box component="span" sx={{ color: 'primary.main' }}>
            {language === 'fr' ? 'Projets' : 'Projects'}
          </Box>
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ mb: 8, textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
          {language === 'fr' 
            ? "Une sélection de mes travaux personnels et professionnels."
            : "A selection of my personal and professional work."}
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: '0.3s',
                  border: 1,
                  borderColor: 'divider',
                  '&:hover': { 
                    borderColor: 'primary.main',
                    transform: 'translateY(-5px)',
                    boxShadow: (theme) => theme.palette.mode === 'dark' 
                      ? '0 4px 20px rgba(233, 79, 55, 0.2)' 
                      : '0 4px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CodeIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
                    <Typography variant="h5" component="h3" fontWeight="bold">
                      {project.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ 
                      minHeight: 60 
                  }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {project.tech.map((tech) => (
                      <Chip 
                        key={tech} 
                        label={tech} 
                        size="small" 
                        variant="outlined" 
                        sx={{ 
                          borderColor: 'divider',
                          color: 'text.primary',
                          fontWeight: 500
                        }} 
                      />
                    ))}
                  </Box>
                </CardContent>
                
                <CardActions sx={{ p: 2, pt: 0 }}>
                  {project.githubLinks && project.githubLinks.map((link) => (
                    <Button 
                      key={link.label}
                      size="small" 
                      startIcon={<GitHubIcon />}
                      href={link.url}
                      target="_blank"
                      sx={{ 
                        color: 'primary.main',
                        '&:hover': { bgcolor: 'primary.main', color: 'white' }
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                  {(!project.githubLinks || project.githubLinks.length === 0) && (
                     <Button size="small" disabled>
                        {language === 'fr' ? "Code privé" : "Private Code"}
                     </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}