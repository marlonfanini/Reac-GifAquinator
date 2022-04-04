import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './Gifgriditem';

export const GifGrid = ({category}) => {


    const {loading, data:images} = useFetchGifs(category);

    
    

    // useEffect(() => {
    //     getGifs(category)
    //     .then (setImages)
    // }, [category])

    


  return (
    <>
     <h3>{category}</h3>
    <br></br>
    {loading && <p>loading...</p> }
     
     <div className="card-grid">
     
        
            {
                images.map( img => (
                <GifGridItem  key={img.id} {...img}/>
                ))
            }    
        
            
    </div> 
    </>

  )
}
