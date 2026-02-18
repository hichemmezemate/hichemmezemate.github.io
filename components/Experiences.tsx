'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useLanguage } from './LanguageContext';
import { getExperiences, translations } from '../data/config';

export default function Experience() {
  const { language } = useLanguage();
  const experiences = getExperiences(language);
  const t = translations[language];

  return (
    <Box id="experience" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
           <Box component="span" sx={{ color: 'primary.main' }}>{t.sections.experience}</Box>
        </Typography>

        <Stack spacing={4} sx={{ maxWidth: 900, mx: 'auto' }}>
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              variant="outlined"
              sx={{ 
                borderLeft: 6, 
                borderColor: 'primary.main',
                bgcolor: 'background.paper',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateX(10px)' }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="flex-start" spacing={2} mb={2}>
                  <Box>
                    <Typography variant="h5" component="h3" fontWeight="bold">
                      {exp.role}
                    </Typography>
                    <Typography variant="h6" color="primary.main" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <BusinessCenterIcon fontSize="small" /> {exp.company}
                    </Typography>
                  </Box>
                  <Chip label={exp.period} color="default" variant="outlined" sx={{ fontWeight: 'bold' }} />
                </Stack>
                
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ bgcolor: 'action.hover' }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}