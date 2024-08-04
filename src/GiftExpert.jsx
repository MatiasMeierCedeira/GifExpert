import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategorie) => {

        if (categories.includes(newCategorie)) {
            prompt('Ya existe esa categoria');
            return;
        }

        setCategories([...categories, newCategorie]);
    };

    return (
        <>
            {/* Título */}
            <h1>GiftExpertApp</h1>
            
            <AddCategory onNewCategorie={onAddCategory}/>

            <button onClick={onAddCategory}> Agregar </button>

            {categories.map(category => (<GifGrid key={category} category={category} />))}

        </>
    );
}
