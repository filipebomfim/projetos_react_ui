import React, { useEffect, useState } from 'react'


import {
    Button,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    FormGroup,
    TextField,
  } from "@mui/material";


function ProjectForm({ handleSubmit, btnText, projectData}) {
    const [project, setProject] = useState(projectData || {})
    const [categories, setCategories] = React.useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch((error) => console.log(error))
    },[])

    const handleChange = (event) => {
        setProject({...project, [event.target.name]:event.target.value})
    };

    const handleCategory = (event) => { 
        setProject({...project, category: {
            id: event.target.value,
        },
        })
    }

    const submit = (event) => {
        event.preventDefault()
        handleSubmit(project)
    }

    return (
        <form onSubmit={submit}>
            <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: '#00B0FF'}}>
                <TextField value={project.name ? project.name : ''} onChange={handleChange} sx={{paddingBottom: 2}} name="name" variant="outlined" label="Nome do Projeto" />
                <TextField value={project.budget ? project.budget : ''} onChange={handleChange} sx={{paddingBottom: 2}} name="budget" variant="outlined" label="Orçamento" />
                <FormControl sx={{paddingBottom: 2}} fullWidth>
                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={project.category ? project.category.id : ''}
                        label="Categoria"
                        name="category"
                        onChange={handleCategory}
                        >
                        {categories.map((option)=>(
                            <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl> 
                <Button sx={{backgroundColor:'#00B0FF'}} type="submit" variant="container" fullWidth>{btnText}</Button>
            </FormGroup>
        </form>
    )
}

export default ProjectForm