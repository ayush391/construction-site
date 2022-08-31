import { Container } from "@mui/system";
import Grid from '@mui/material/Grid'; // Grid version 1

import React from "react";
import ItemCard from "../Components/ItemCard";
import PersonCard from "../Components/PersonCard";


const Freelance = () => {
    return (
        <div className='main-body'>
            <Container  >
                <Grid container display="flex" justifyContent="center"  rowSpacing={6} columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
                    <Grid item  lg={4}>
                        <PersonCard title="Samantha Miles" rating={4.2} price={500} img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    
                    <Grid item  lg={4}>
                        <PersonCard title="Jake Schaffer" rating={4.2} price={200} img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Chang Yun" rating={4.2} price={600} img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Samantha Miles" rating={4.2} price={500} img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    
                    <Grid item  lg={4}>
                        <PersonCard title="Jake Schaffer" rating={4.2} price={200} img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Chang Yun" rating={4.2} price={600} img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Samantha Miles" rating={4.2} price={500} img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    
                    <Grid item  lg={4}>
                        <PersonCard title="Jake Schaffer" rating={4.2} price={200} img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Chang Yun" rating={4.2} price={600} img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Samantha Miles" rating={4.2} price={500} img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    
                    <Grid item  lg={4}>
                        <PersonCard title="Jake Schaffer" rating={4.2} price={200} img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Chang Yun" rating={4.2} price={600} img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Samantha Miles" rating={4.2} price={500} img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    
                    <Grid item  lg={4}>
                        <PersonCard title="Jake Schaffer" rating={4.2} price={200} img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Chang Yun" rating={4.2} price={600} img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Samantha Miles" rating={4.2} price={500} img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    
                    <Grid item  lg={4}>
                        <PersonCard title="Jake Schaffer" rating={4.2} price={200} img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Chang Yun" rating={4.2} price={600} img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Samantha Miles" rating={4.2} price={500} img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    
                    <Grid item  lg={4}>
                        <PersonCard title="Jake Schaffer" rating={4.2} price={200} img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    <Grid item  lg={4}>
                        <PersonCard title="Chang Yun" rating={4.2} price={600} img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" description="this is a very long description of this item"></PersonCard>
                    </Grid>
                    
                    
                </Grid>
            </Container >
        </div>
    )
}
export default Freelance;