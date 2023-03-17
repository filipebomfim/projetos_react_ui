import * as React from 'react';
import Subtitle from '../../components/texts/Subtitle';
import styles from './NewProject.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CreateProjectForm from '../../components/forms/CreateProjectForm';
import NoteAdd from '@mui/icons-material/NoteAdd';

function NewProject(){
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
      setCategory(event.target.value);
    };

    function submissao(){
        console.log('Submit');
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
                    <CreateProjectForm/>
                </CardContent>
              </Card>
        </Box>             
    )
}

export default NewProject