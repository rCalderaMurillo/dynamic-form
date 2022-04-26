import React from "react";
import "./styles.scss";

function FormFields(){
    return(
        <React.Fragment>
            <form>
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