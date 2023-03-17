import * as React from 'react';
import styles from './Home.module.css'
import Box from '@mui/material/Box';
import HomeImage from '../../img/home-image.svg';
import { styled } from '@mui/material/styles';
import Title from '../../components/texts/Title';
import GreatWord from '../../components/texts/GreatWord';
import Subtitle from '../../components/texts/Subtitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountTree from '@mui/icons-material/AccountTree';
import Stack from '@mui/material/Stack';
import CreateProjectForm from '../../components/forms/CreateProjectForm';


function Home(){  
    const [open, setOpen] = React.useState(false);

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

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <CreateProjectForm/>
                </DialogContent>
            </Dialog>        
        </section>
    )
}

export default Home
