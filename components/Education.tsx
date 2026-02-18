'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useLanguage } from './LanguageContext';
import { getFormations, getCertifications, translations } from '../data/config';

export default function Education() {
  const { language } = useLanguage();
  const formations = getFormations(language);
  const certifications = getCertifications(language);

  return (
    <Box id="education" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
          {language === 'fr' ? 'Formations' : 'Education'} & <Box component="span" sx={{ color: 'primary.main' }}>Certifications</Box>
        </Typography>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 4, fontWeight: 'bold' }}>
              <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} /> 
              {language === 'fr' ? 'Parcours Académique' : 'Academic Background'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {formations.map((formation, index) => (
                <Card key={index} variant="outlined" sx={{ borderLeft: 4, borderColor: 'primary.main' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" fontWeight="bold">
                      {formation.school}
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ mt: 0.5 }}>
                      {formation.diploma}
                    </Typography>
                    {formation.level && (
                      <Typography variant="body2" color="text.secondary">
                        {formation.level}
                      </Typography>
                    )}
                    <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
                      {formation.location} {formation.period && `• ${formation.period}`}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 4, fontWeight: 'bold' }}>
              <WorkspacePremiumIcon sx={{ mr: 1, color: 'primary.main' }} /> Certifications
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {certifications.map((cert, index) => (
                <Card key={index} variant="outlined" sx={{ borderLeft: 4, borderColor: 'primary.main' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" fontWeight="bold">
                      {cert.issuer}
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ mt: 0.5 }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary', fontWeight: 'bold' }}>
                      {language === 'fr' ? 'Obtenu en ' : 'Obtained in '} {cert.date}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}