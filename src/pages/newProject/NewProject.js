import * as React from 'react';
import Subtitle from '../../components/texts/Subtitle';
import {useHistory} from 'react-router-dom'
import styles from './NewProject.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import ProjectForm from '../../components/forms/ProjectForm';
import NoteAdd from '@mui/icons-material/NoteAdd';

function NewProject(){
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

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            marginTop="3em"
            textAlign="center"
        >
            <Card>
                <CardHeader
                    title='Novo Projeto'
                    titleTypographyProps={{ align: 'center' }}
                    action={<NoteAdd/>}
                    subheaderTypographyProps={{
                    align: 'center',
                    }}
                    sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                    }}
                />
                <CardContent>
                    <Subtitle text="Crie seu projeto para depois adicionar os seus serviços"/>  
                    <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
                </CardContent>
              </Card>
        </Box>             
    )
}

export default NewProject