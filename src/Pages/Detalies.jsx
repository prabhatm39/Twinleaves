import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';

export const Detalies = () => {
    const {id}=useParams();
    const [data, setData] = useState([]);
    const getData = async() => {
        const res = await axios.get('https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products')
        //console.log(res.oneDAta.oneDAta.products);
        setData(res.data.data.products)
     }
     useEffect(() => {
        getData()
     },[])
     let oneDAta=data.filter((e)=>e.id==id)[0]
     console.log("data",oneDAta);

  return (
    <div>
      
        <Box>
        <img src={oneDAta.gs1_images.top_left} alt='img' height="500px" width="500px"/>
        </Box>
        <Box>
            <h1>
            Brand:  {oneDAta.brand}
            </h1>
          
        </Box>
        <Box>
          Name : {oneDAta.name}
        </Box>
        <Box>
            Price: {oneDAta.mrp.currency} - {oneDAta.mrp.mrp}
        </Box>
     
       
    </div>
  )
}
