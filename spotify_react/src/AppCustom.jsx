import React, { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { Stack } from '@mui/system';
import { Button, FormControl, Grid, TextField } from '@mui/material';
import Item from './components/Item';
import { v4 as uuidv4 } from 'uuid'


const arr = [
    {
        id: 1,
        title: "React js", 
        dsc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        url: "https://ru.reactjs.org/" 
    },
    {
        id: 2,
        title: "Vue js", 
        dsc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        img: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        url: "https://vuejs.org/" 
    },
    {
        id: 3,
        title: "Angular js", 
        dsc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        url: "https://angularjs.org/" 
    },
    {
        id: 4,
        title: "Vue js", 
        dsc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        img: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        url: "https://vuejs.org/" 
    },
    {
        id: 5,
        title: "Angular js", 
        dsc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        url: "https://angularjs.org/" 
    },
]

const AppCustom = () => {
    const [data, setData] = useState(arr)
    // add

    const addTask = (e) => {
        e.preventDefault()

        let task = {
            id: uuidv4()
        }

        let fm = new FormData(e.target)

        fm.forEach((value, key) => {
            task[key] = value
        })


        setData([...data, task])
    }

    const deleteTask = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    return (
        <section className="App" >
            <center>
                <form onSubmit={addTask} >
                    <Stack width="200px" gap={2} >
                        <TextField name="title" id="outlined-basic" label="Add Task" variant="outlined" />
                        <Button type="submit" variant="contained" >add task</Button>
                    </Stack>
                </form>
            </center>
            <Grid container spacing={3} gap={4} width="90%" margin="50px auto" >
                {
                    data.map(item => (
                        <Grid key={item.id} >
                            <Item {...item} deleteTask={deleteTask} />
                        </Grid>
                    ))
                }
            </Grid>

        </section>
    );
};

export default AppCustom;