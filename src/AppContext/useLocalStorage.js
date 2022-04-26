import React from 'react';

function useLocalStorage(itemName,initialValue){
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if(!localStorageItem){
        localStorage.setItem(itemName,initialValue);

        parsedItem = initialValue;
    }else{
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item,setItem] = React.useState(parsedItem);

    function saveItem(item){
        const stringifiedItem = JSON.stringify(item);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(item);
    }

    return [
        item,
        saveItem
    ];
}

export {useLocalStorage};