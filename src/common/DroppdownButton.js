import Dropdown from 'react-bootstrap/Dropdown'
import { useState, useMemo } from "react";


export default function DropdownButton({onClick, bookState }) {

 

    const [ buttonValue, setButtonValue ] = useState(bookState);

    const changeButton = (eventKey) => {
        setButtonValue(eventKey);
        onClick(eventKey);
    };

    return (
        <Dropdown onSelect={changeButton} eventKey={bookState} >
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                {buttonValue}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="CurrentlyReading">Currently Reading</Dropdown.Item>
                <Dropdown.Item eventKey="Read">Read</Dropdown.Item>
                <Dropdown.Item eventKey="WantToRead">Want to Read</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}