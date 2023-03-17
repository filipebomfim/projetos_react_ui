import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Title from '../../components/texts/Title';
import GreatWord from '../../components/texts/GreatWord';
import Subtitle from '../../components/texts/Subtitle';
import { Alert, Divider } from '@mui/material';
import AlertMessage from '../../components/alert/AlertMessage';
import LinkButton from '../../components/buttons/LinkButton';
import { width } from '@mui/system';
import ProjectCard from '../../components/cards/ProjectCard';

function Projects() {
    const location = useLocation();
    let message = ''
    if(location.state){
        message = location.state.message
    }

    const [projects, setProjects] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProjects(data)
        })
        .catch((error) => console.log(error))
    },[])

    

    const tiers = [
        {
          title: 'Free',
          price: '0',
          description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
          ],
          buttonText: 'Sign up for free',
          buttonVariant: 'outlined',
        },
        {
          title: 'Pro',
          subheader: 'Most popular',
          price: '15',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
          ],
          buttonText: 'Get started',
          buttonVariant: 'contained',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        },
      ];

      




  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
        >
            <Title>
                <GreatWord word='Projetos'/>
            </Title>
            <Subtitle text="Todos os Projetos cadastrados até o momento"/>
            <LinkButton to="/newProject" text="Novo Projeto"/>
        </Box>        
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
        {projects.length > 0 &&
            projects.map((project)=>(
                <Grid
                    item
                    key={project.id}
                    xs={12}
                    sm={12}
                    md={4}
                >
                    <ProjectCard project={project}/>
                </Grid>
        ))}
        </Grid>
      </Container>
    </React.Fragment>
    
  )
}

export default Projects