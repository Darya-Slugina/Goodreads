import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from "react";


export default function DropdownButton() {

    const [ buttonValue, setButtonValue ] = useState("Want to Read");

    const changeButton = (eventKey) => {
        console.log(eventKey);
        setButtonValue(eventKey);
    };

    return (
        <Dropdown onSelect={changeButton} eventKey={buttonValue} >
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                {buttonValue}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="Currently Reading"> Currently Reading </Dropdown.Item>
                <Dropdown.Item eventKey="Read">Read</Dropdown.Item>
                <Dropdown.Item eventKey="Want to Read">Want to Read</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}