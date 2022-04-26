import "./styles.scss";
import {FormFields} from "../FormFields";
function  Form(){
    return(
        <div className="form-container">
            <div className="form-fields">
                <FormFields/>
            </div>
            <div className="form-fields-added">

            </div>
        </div>
    )
}

export {Form}