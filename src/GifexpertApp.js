import React from "react";
import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const  GifApp = () => {
    
    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch'])



    // const handleAdd = () => {
    //     setCategories(['HunterXHunter', ...categories])
    // }
    
    return (
    <div>
      <AddCategory setCategories={setCategories}/>
       <ol>
           {
                   categories.map( category => (
                    <GifGrid 
                    key = {category}
                    category={category}
                    />
                   ))
            }
          
       </ol>
    
    </div>

    );
  }