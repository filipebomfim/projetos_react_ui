import { Button, FormGroup, TextField } from '@mui/material';
import React, { useState } from 'react'

function ServiceForm({handleSubmit, btnText, projectData}) {
    const [service,setService] = useState({})

    const handleChange = (event) => {
        setService({...service, [event.target.name]:event.target.value})
    };

    const submit = (event) => {
        event.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    return (
        <form onSubmit={submit}>
            <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: '#00B0FF'}}>
                <TextField onChange={handleChange} sx={{paddingBottom: 2}} name="name" variant="outlined" label="Nome do Serviço" />
                <TextField onChange={handleChange} sx={{paddingBottom: 2}} name="cost" variant="outlined" label="Custo do Serviço" />
                <TextField onChange={handleChange} sx={{paddingBottom: 2}} name="description" variant="outlined" label="Descrição do Serviço" />
                <Button sx={{backgroundColor:'#00B0FF'}} type="submit" variant="container" fullWidth>{btnText}</Button>
            </FormGroup>
        </form>
    )
}

export default ServiceForm