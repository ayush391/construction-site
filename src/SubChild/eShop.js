import { Container } from "@mui/system";
import Grid from '@mui/material/Grid'; // Grid version 1

import React, { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";

import app from "../firebase";
import { getDatabase, ref, onValue } from 'firebase/database'





const E_shop = () => {


    const [todos, setTodos] = useState([])
    const db = getDatabase(app)
    const reference = ref(db, "Products/")
    const temp = []
    useEffect(() => {
        onValue(reference, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                temp.push([childSnapshot.key, childSnapshot.val().Price, childSnapshot.val().description, childSnapshot.val().imageLink])
            })
            console.log(temp)
            setTodos(temp)
        })
    })
    return (
        <div className='main-body'>

            <Container>
                <Grid container display="flex" justifyContent="center" rowSpacing={6} columnSpacing={{ xs: 1, sm: 3, md: 5 }}>

                    {todos.map((todo) => (
                        <Grid item lg={4}>
                            <ItemCard title={todo[0]} price={todo[1]} description={todo[2]} img={todo[3]} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </div>
    )
}
export default E_shop;