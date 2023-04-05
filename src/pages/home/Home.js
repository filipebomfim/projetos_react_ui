import * as React from 'react';
import {useHistory} from 'react-router-dom'
import Box from '@mui/material/Box';
import HomeImage from '../../img/home-image.svg';
import { styled } from '@mui/material/styles';
import Title from '../../components/texts/Title';
import GreatWord from '../../components/texts/GreatWord';
import Subtitle from '../../components/texts/Subtitle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AccountTree from '@mui/icons-material/AccountTree';
import Stack from '@mui/material/Stack';
import ProjectForm from '../../components/forms/ProjectForm';


function Home(){  
    const [open, setOpen] = React.useState(false);

    const history = useHistory()

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            console.log(data)
            history.push('/projects',{message: 'Projeto criado com sucesso'})
        })
        .catch((error) => console.log(error))
        
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };  

    const HomeButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#222',
        color: '#00B0FF',
        margin: '1em',
        '&:hover': {
            backgroundColor: '#00B0FF',
            color: '#222',
        },
    }));

    return (
        <section>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                minHeight="100vh"
            >
                <Title text="Gerenciamento de ">
                    <GreatWord word='Projetos'/>
                </Title>
                <Subtitle text="Comece a gerenciar os seus projetos agora mesmo"/>
                
                <Stack direction="row" spacing={2}>
                    <HomeButton variant="outlined" endIcon={<AccountTree />} onClick={handleClickOpen}>
                        Novo Projeto
                    </HomeButton>
                </Stack>
                <img width='512' height='512' src={HomeImage} alt="HomeLogo"/> 
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth='md'>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <ProjectForm btnText="Criar Projeto" handleSubmit={createPost}/>
                </DialogContent>
            </Dialog>        
        </section>
    )
}

export default Home
