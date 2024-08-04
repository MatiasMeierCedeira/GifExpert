import React, { useState } from 'react'

export const AddCategory = ({onNewCategorie}) => {

  const [inputValue, setInputValue] = useState('One Punch')
    
    const onSubmit = (event)=>
      {
        event.preventDefault();
        if(inputValue.trim().length <=1 )return;
        // setCategories(categories => [inputValue,...categories])
        onNewCategorie(inputValue.trim());
        //luego de ingresar el valor el input se limpia despues del enter
        setInputValue('');
      };
      
      const onImputChange = ({target})=>
      {
        return setInputValue(target.value);
      }
      
      return (
        <>
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder='Buscar gifts'
        value={inputValue}
        onChange={onImputChange}/>
    </form>
        </>
  );
};