import styled from '@emotion/styled'
import { parse, v4 as uuidv4 } from 'uuid'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Button, Card, CardContent, CardHeader, Container, Dialog, DialogContent, DialogTitle, Divider, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AlertMessage from '../../components/alert/AlertMessage'
import ProjectCard from '../../components/cards/ProjectCard'
import ProjectForm from '../../components/forms/ProjectForm'
import Loading from '../../components/loading/Loading'
import GreatWord from '../../components/texts/GreatWord'
import Subtitle from '../../components/texts/Subtitle'
import Title from '../../components/texts/Title'
import ServiceForm from '../../components/forms/ServiceForm';

function Project() {
    const { id } = useParams()
    const [project,setProject] = useState('')
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openService, setOpenService] = React.useState(false);
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(()=> {
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then((resp)=> resp.json())
            .then((data)=>{
                setProject(data)
            })
            .catch((error) => console.log(error))
            },1500)
    },[])

    const handleDialogProjectOpen = () => {
        setOpenEdit(true);
      };
    
      const handleDialogProjectClose = () => {
        setOpenEdit(false);
      };  

      const handleDialogServiceOpen = () => {
        setOpenService(true);
      };
    
      const handleDialogServiceClose = () => {
        setOpenService(false);
      };

      const HomeButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#222',
        color: '#00B0FF',
        '&:hover': {
            backgroundColor: '#00B0FF',
            color: '#222',
        },
    }));

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        textAlign:'center',
        marginBottom:'1em',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
          marginTop: theme.spacing(2),
        },
      }));

      function editProject(project){
        setMessage('')
        if(project.budget < project.cost){
            setMessage(' O orçamento não pode ser menor que o custo do projeto')
            setType('error')
            handleDialogProjectClose()
            return false
        }

        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then(resp=>resp.json())
        .then((data)=> {
            setProject(data)
            setMessage('Projeto Atualizado com sucesso')
            setType('success')
            handleDialogProjectClose()
        }).catch(error => console.log(error))
      }

      function addService(project){
        setMessage('')
        const lastService = project.services[project.services.length - 1]
        lastService.id  = uuidv4()

        const lastServiceCost = lastService.cost
        
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
        if(newCost > parseFloat(project.budget)){            
            setMessage('Você não tem orçamento para adicionar esse serviço')
            setType('error')
            project.services.pop()
            handleDialogServiceClose()
            return false
        }
        project.cost = newCost
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then(resp=>resp.json())
        .then((data)=> {
            setProject(data)
            setMessage('Serviço adicionado com sucesso')
            setType('success')
            handleDialogServiceClose()
        }).catch(error => console.log(error))
      }

    return (
        <React.Fragment>
            {message && <AlertMessage type={type} msg={message} /> }
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'90vh'}}>
                {!project.name 
                ?   (<Loading/>) 
                :   (<Container maxWidth="sm" component="main">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            minHeight="100vh"
                        >
                            <Title text="">
                                <GreatWord word={project.name}/>
                            </Title>
                            <Root>                                
                                <Divider>Informações</Divider>
                            </Root>
                            <Container>
                                <Box
                                display="flex"
                                justifyContent="space-between"
                                >
                                    <Typography variant="h6">Orçamento</Typography>
                                    <Typography variant="h6">R$ {project.budget}</Typography>
                                </Box>
                                <Box
                                display="flex"
                                justifyContent="space-between"
                                >
                                    <Typography variant="h6">Categoria</Typography>
                                    <Typography variant="h6">{project.category.name}</Typography>
                                </Box>
                                <Box
                                display="flex"
                                justifyContent="space-between"
                                >
                                    <Typography variant="h6">Saldo Utilizado</Typography>
                                    <Typography variant="h6">R$ {project.cost}</Typography>
                                </Box>
                            </Container>
                            <Root>                                
                                <Divider>Serviços</Divider>
                            </Root>           
                            <Stack direction="row" spacing={2}>
                                <HomeButton variant="outlined" endIcon={<ModeEditIcon />} onClick={handleDialogProjectOpen}>
                                    Editar Projeto
                                </HomeButton>
                                <HomeButton variant="outlined" endIcon={<MiscellaneousServicesIcon />} onClick={handleDialogServiceOpen}>
                                    Adicionar Serviço
                                </HomeButton>
                            </Stack>                 
                        </Box>                        
                    </Container>)
                }
            </Box>

            <Dialog open={openEdit} onClose={handleDialogProjectClose} fullWidth='md'>
                <DialogTitle>Edição de Projeto</DialogTitle>
                <DialogContent>
                    <ProjectForm btnText="Salvar Edições" handleSubmit={editProject} projectData={project}/>
                </DialogContent>
            </Dialog> 

            <Dialog open={openService} onClose={handleDialogServiceClose} fullWidth='md'>
                <DialogTitle>Adicionar Serviço</DialogTitle>
                <DialogContent>
                    <ServiceForm btnText="Adicionar Serviço" handleSubmit={addService} projectData={project}/>
                </DialogContent>
            </Dialog> 
        </React.Fragment>
    )
}

export default Project