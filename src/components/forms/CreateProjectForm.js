import React, { useEffect } from 'react'

import {
    Button,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    FormGroup,
    TextField,
  } from "@mui/material";


function CreateProjectForm() {
    const [categories, setCategories] = React.useState([]);
    const [category, setCategory] = React.useState('');

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
        setCategory(event.target.value);
    };


    return (
        <form>
            <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: '#00B0FF'}}>
                <TextField sx={{paddingBottom: 2}} name="name" variant="outlined" label="Nome do Projeto" />
                <TextField sx={{paddingBottom: 2}} name="orc" variant="outlined" label="Orçamento" />
                <FormControl sx={{paddingBottom: 2}} fullWidth>
                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Categoria"
                        onChange={handleChange}
                        >
                        {categories.map((option)=>(
                            <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>
                        ))}
                        
                    </Select>
                </FormControl> 
                <Button sx={{backgroundColor:'#00B0FF'}} type="submit" variant="container" fullWidth>Criar Projeto</Button>
            </FormGroup>
        </form>
    )
}

export default CreateProjectForm