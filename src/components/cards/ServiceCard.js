import styled from '@emotion/styled';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import React from 'react'

function ServiceCard({service, handleRemove}) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(service.id, service.cost)
    }

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        textAlign:'center',
        marginBottom:'1em',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
          marginTop: theme.spacing(2),
        },
      }));


    return (
        <Card >
            <CardHeader
                title={service.name}
                titleTypographyProps={{ align: 'center', fontSize:'1em' }}
                sx={{
                    color: '#00B0FF',
                    backgroundColor: '#222',
                }}
            />
            <CardContent sx={{minHeight:'250px'}}>
                <Root>                                
                    <Divider>Custo</Divider>
                    <Typography variant="body1">R$ {service.cost}</Typography>
                </Root>
                <Root>                                
                    <Divider>Descrição</Divider>
                    <Typography variant="body1">{service.description}</Typography>
                </Root>
            </CardContent>
            <CardActions sx={{ display:'flex', justifyContent: "space-around", alignItems:'end' }}>
                <Button>                
                    Editar                
                </Button>     
                <Button onClick={remove}>
                    Excluir
                </Button>
            </CardActions>
        </Card>
      )
}

export default ServiceCard