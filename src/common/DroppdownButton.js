// import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


export default function DropdownButton() {
    const changeButton = (e) => {
        console.log(e);
    }
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Want to Read
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onSelect={changeButton}> Currently Reading </Dropdown.Item>
                <Dropdown.Item onSelect={changeButton}>Read</Dropdown.Item>
                <Dropdown.Item onSelect={changeButton}>Want to Read</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}