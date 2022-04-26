import './styles.scss';
import React from 'react';
import {Header} from '../Header';
import {InfoList} from '../InfoList';
import {Form} from '../Form';
import {ElementsContext} from "../AppContext";
function AppUI() {
  return (
    <div className="container">
      <Header/>
      <ElementsContext.Consumer>
        {({deleteElement})=>{
          <main>
            <section className="form-info-list">
                <InfoList/>
            </section>
            <section className="form-section">
              <Form/>
            </section>
          </main>
        }}
      </ElementsContext.Consumer>
      </div>
  );
}

export {AppUI};