import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';
import { Box, Button, Chip, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';

function ProjectCard({project, handleRemove}) {
    const [category, setCategory] = useState('')

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

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        textAlign:'center',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
          marginTop: '1em',
        },
      }));

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
        <CardContent>
            <Root style={{marginBottom: '1em'}}>
                    <Divider >
                        <Chip label="Orçamento" />
                    </Divider>
                    <Typography variant="h6" color="text.primary">
                        R$ {project.budget} 
                    </Typography>                                       
            </Root>
            <Root>
                    <Divider >
                        <Chip label="Categoria" />
                    </Divider>
                    <Typography variant="h6" color="text.primary">
                        {category} 
                    </Typography>                                       
            </Root>
        </CardContent>
        <CardActions>
        <Button fullWidth variant='outlined'>
            Editar
        </Button>
        <Button fullWidth variant='outlined'>
            Excluir
        </Button>
        </CardActions>
    </Card>
  )
}

export default ProjectCard