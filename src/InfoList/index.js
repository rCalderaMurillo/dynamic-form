import "./styles.scss";
function InfoList(){
    return(
        <div className="list-info-container">
            <div className="list-info-header">
                <h2>Information form</h2>
            </div>
            <p>These are the elements that can you add to the form</p>
            <ul>
                <li>Input text</li>
                <li>Select</li>
                <li>Raddio button</li>
            </ul>
        </div>
    )
}

export { InfoList}