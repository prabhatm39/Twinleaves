import { Button, Grid, Input } from '@mui/material';
import { Box,Item } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Product } from './Product';
import styles from './Products.module.css';

export const Products = () => {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
  



    const getData = async(page) => {
       const res = await axios.get(`https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products?page=${page}`)
       //console.log(res.data.data.products);
       setData(res.data.data.products)
    }

    //console.log(data);


    //------------------Search function------------------------------------------
    const searchfunction =(e) => {
        let updatedData = data.filter(
            (el) => el.name.toLowerCase().includes(e.toLowerCase())
          );
          setData(updatedData);
    }
   
    //---------------------------------------------------

  
    const prevfunction = () => {
        setPage((prev) => prev-1)
    }
    const nextfunction = () => {
        setPage((prev) => prev+1)
    }
//-------------------------------------------------------------
    //----------------sortfunction-----------------------
    const sortfunction =(e)=>{
        if(e=="ASC"){
            let sort = data.sort((a, b) => a.mrp.mrp - b.mrp.mrp);
            setData([...sort])
        }
        else if(e=="DESC"){
            let sort = data.sort((a, b) => b.mrp.mrp - a.mrp.mrp);
            setData([...sort])
        }
    }

//-----------------------------------------------------------------
//---------------------------brandfilter------------------------------
const brandFilter = (e) => {
let brand = data.filter((el) => el.brand == e);
setData(brand)
}
//------------------------------------


useEffect(() => {
    getData(page)
},[page])


  return (
    <div>
        <Box>
            <Input placeholder='Search Product' onChange={(e) => searchfunction(e.target.value)} type="text"/>
        </Box>
        <Box>
            <label>Sort the Product by it's price</label>
           <select    onChange={(e) => sortfunction(e.target.value)}>
           <option value="DEFAULT" disabled>
          None
        </option>
            <option value="ASC">Acending</option>
            <option value="DESC">Decending</option>
           </select>
        </Box>
        <Box>
            <select onChange={(e) => brandFilter(e.target.value)}>
                <option value="HUGGIES">HUGGIES</option>
                <option value="AVIAS">AVIAS</option>
                <option value="ELEGANT">ELEGANT</option>
                <option value="HDC">HDC</option>
            </select>
        </Box>

       {
        data.length==0 ? "Loading" : 
       <div className={styles.pro}>
        {data.
        map((el) => {
            return(
                <Product data={el}/>
            )
        })}
       </div>
        
        
       }
       <br/>
       <hr/>
       
       <button disabled={page==1} onClick={prevfunction}>prev</button>
       {page}
       <button onClick={nextfunction} disabled={page==9}>next</button>
      
    </div>
  )
}
