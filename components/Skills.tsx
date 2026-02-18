'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { skillsData } from '../data/config';

import { FaJava, FaHandshake, FaBrain, FaClock, FaTasks, FaComments, FaUsers, FaMicrosoft } from 'react-icons/fa';

import { 
  SiRuby, SiPython, SiPhp, SiTypescript, SiJavascript, SiHtml5, SiCss3, 
  SiPostgresql, SiMysql, 
  SiRubyonrails, SiReact, SiVuedotjs, SiAngular, SiNodedotjs, SiDjango, SiSpringboot, SiSymfony, SiNestjs, 
  SiGithubactions, SiGitlab, 
  SiDocker, SiPostman, SiJira, SiTrello, SiFigma, SiMongodb
} from 'react-icons/si';

import { IconType } from 'react-icons';

const iconMapping: Record<string, IconType> = {
  "Ruby": SiRuby,
  "Python": SiPython,
  "PHP": SiPhp,
  "Java": FaJava,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,

  "Ruby on Rails": SiRubyonrails,
  "ReactJS": SiReact,
  "VueJS": SiVuedotjs,
  "Angular": SiAngular,
  "NodeJS": SiNodedotjs,
  "Django": SiDjango,
  "Spring Boot": SiSpringboot,
  "Symfony": SiSymfony,
  "NestJS": SiNestjs,

  "GitHub Actions": SiGithubactions,
  "GitLab CI/CD": SiGitlab,

  "Docker": SiDocker,
  "Postman": SiPostman,
  "Jira": SiJira,
  "Trello": SiTrello,
  "Figma": SiFigma,
  "Office 365": FaMicrosoft,

  "Autonomie": FaBrain,
  "Autodidaxie": FaBrain,
  "Ponctualité": FaClock,
  "Organisation": FaTasks,
  "Communication": FaComments,
  "Travail en équipe": FaUsers,
};

const getIcon = (skillName: string) => {
  const Icon = iconMapping[skillName];
  return Icon ? <Icon /> : undefined;
};

export default function Skills() {
  const theme = useTheme();

  return (
    <Box id="skills" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
          Mes <Box component="span" sx={{ color: 'primary.main' }}>Compétences</Box>
        </Typography>

        <Grid container spacing={4}>
          {skillsData.map((category, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderTop: 4, 
                  borderColor: 'primary.main',
                  boxShadow: 3,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                    {category.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        icon={getIcon(skill)}
                        label={skill}
                        variant={theme.palette.mode === 'dark' ? 'outlined' : 'filled'}
                        sx={{ 
                          fontSize: '0.9rem',
                          py: 2.5,
                          px: 1,
                          '& .MuiChip-icon': { fontSize: '1.2rem' }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}