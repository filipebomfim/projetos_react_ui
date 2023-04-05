import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';
import { Box, Button, ButtonGroup, Chip, Container, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function ProjectCard({project, handleRemove}) {
    const [category, setCategory] = useState('')
    const remove = (e) => {
        e.preventDefault();
        handleRemove(project.id)
    }

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
                <Typography variant="body1">{project.category.name}</Typography>
            </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
            <Button href={`/project/${project.id}`}>                
                Editar                
            </Button>     
            <Button onClick={remove}>
                Excluir
            </Button>
        </CardActions>
    </Card>
  )
}

export default ProjectCard