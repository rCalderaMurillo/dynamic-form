import {ElemetsProvider} from "../AppContext";
import {AppUI} from "./AppUI";

function App(){
    return(
        <ElemetsProvider>
            <AppUI/>
        </ElemetsProvider>
    )
}

export {App}