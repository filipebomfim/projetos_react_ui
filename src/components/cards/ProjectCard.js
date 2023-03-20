import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';
import { Box, Button, Chip, Container, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';

function ProjectCard({project, handleRemove}) {
    const [category, setCategory] = useState('')
    const remove = (e) => {
        e.preventDefault();
        handleRemove(project.id)
    }

    useEffect(()=> {
        fetch('http://localhost:5000/categories/'+project.category.id,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            console.log(data)
            setCategory(data.name)
        })
        .catch((error) => console.log(error))
    },[])


  return (
    <Card sx={{ms:'3',me:'3'}}>
        <CardHeader
            title={project.name}
            titleTypographyProps={{ align: 'center', fontSize:'1em' }}
            sx={{
                color: '#00B0FF',
                backgroundColor: '#222',
            }}
        />
        <CardContent sx={{margin:0}}>
            <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                <Typography variant="body1">Orçamento</Typography>
                <Typography variant="body1">R$ {project.budget}</Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                <Typography variant="body1">Categoria</Typography>
                <Typography variant="body1">{category}</Typography>
            </Box>
        </CardContent>
        <CardActions>
        <Button fullWidth variant='outlined'>
            Editar
        </Button>
        <Button fullWidth variant='outlined' onClick={remove}>
            Excluir
        </Button>
        </CardActions>
    </Card>
  )
}

export default ProjectCard