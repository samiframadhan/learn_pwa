import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';

function Projects(props) {
  return (
    <Container maxWidth="lg">
        <Typography m={2} variant='h4' align='center'>Projects</Typography>
        <Grid container spacing={3}>
            {props.projectData.map((data) => (
              <Grid item key={data.nomor} xs={12} sm={6} md={4}>
                <Card key={data.nomor} >
                  <CardHeader title={data.nama}/>
                  <CardContent>
                    <Typography variant='body1' align='center'>{data.deskripsi}</Typography>
                    <Typography variant='caption' align='left'>{data.rentang}</Typography>
                    <Typography variant='caption' align='left'>{data.valuasi}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default Projects