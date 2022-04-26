import React from "react";
import "./styles.scss";
import {ElementsContext} from "../AppContext";

function FormFields(){

    const {addElement} = React.useContext(ElementsContext);
    const onSubmit=(event)=>{
        event.preventDefault();
        let name = document.getElementById("name").value;
        let typeSelect = document.getElementById("type");
        let type = typeSelect.options[typeSelect.selectedIndex].value;
        let newElement = {name,type};
        addElement(newElement);
    }
    return(
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <label>Field's name:</label>
                <input id="name"/>
                <label>Field's type:</label>
                <select id="type">
                    <option value="text">Text</option>
                    <option value="select">Select</option>
                    <option value="raddio">Raddio</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </React.Fragment>
    )
}

export {FormFields}