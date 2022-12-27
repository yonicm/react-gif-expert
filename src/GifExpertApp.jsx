import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {

        // si la categoria ya existe retornar
        if(categories.includes(newCategory)) return;

        // formas de agregar un item al arreglo (evite usar categories.push)
        //setCategories([...categories, 'Valorant']);
        // primero metemos la ultima categoria y de ultimo la desestructuracion del categories 
        // setCategories(['Valorant', ...categories]);
        setCategories([newCategory, ...categories]);
        // otra forma
        //setCategories(cat => [...cat, 'Valorant']);
    }
  return (
    <>
        { /* titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
            // setCategories={setCategories} 
            onNewCategory={value => onAddCategory(value)}
        />

        {/* Listado de Gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
            {categories.map((category) => 
                // return <li key={category}>{category}</li>
                (
                    <GifGrid key={category} category={category} />
                )
            )
            }
            {/* Gif Item */}
    </>
  )
}
