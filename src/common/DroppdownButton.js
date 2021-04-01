import Dropdown from 'react-bootstrap/Dropdown'


export default function DropdownButton({ onClick, bookState, setBookState }) {


    const changeButton = (eventKey) => {
        setBookState(eventKey);
        onClick(eventKey);
    };

    return (
        <Dropdown onSelect={changeButton} eventKey={bookState} >
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                {bookState}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="CurrentlyReading">Currently Reading</Dropdown.Item>
                <Dropdown.Item eventKey="Read">Read</Dropdown.Item>
                <Dropdown.Item eventKey="WantToRead">Want to Read</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}