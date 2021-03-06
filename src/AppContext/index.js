import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ElementsContext = React.createContext();

function ElemetsProvider(props) {
  const {
    item: elements,
    saveItem: saveElement,
  } = useLocalStorage('FORM_ELEMENTS', []);


  const deleteElement = (name) => {
    const elementIndex = elements.findIndex(element => element.name === name);
    const newElements = [...elements];
    newElements.splice(elementIndex, 1);
    saveElement(newElements);
  };

  const addElement = (element) =>{
    const newElements = [...elements];
    newElements.push(element);
    saveElement(newElements);
  }
  
  return (
    <ElementsContext.Provider value={{
      deleteElement,
      elements,
      addElement
    }}>
      {props.children}
    </ElementsContext.Provider>
  );
}

export { ElementsContext, ElemetsProvider };
