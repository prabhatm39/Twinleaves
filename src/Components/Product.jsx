import { Box, Grid } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Products.module.css'

export const Product = ({data}) => {
    //console.log(data);
  return (
    <div className={styles.box}>
        <Box className={styles.prooff}>
            GET 32% OFF
        </Box>
        <Box>
        <img src={data.gs1_images.top_left} alt='img' height="100px" width="100px"/>
        </Box>
        <Box>
            {data.brand}
        </Box>
        <Box>
            {data.name}
        </Box>
        <Box>
            Price: {data.mrp.currency} - {data.mrp.mrp}
        </Box>
        <Box>
            <Link to={`/${data.id}`}>More Details</Link>
        </Box>
   </div>
  )
}
 