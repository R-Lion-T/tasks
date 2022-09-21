import React from "react";
import { Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function ListItem(props){
    const task = props.task;
    const isFinished = props.isFinished;

    const [isChecked, toggleChecked] = React.useState(isFinished);

    function handlerChecked(){
        toggleChecked(!isChecked);
    }

    return(
        <ListGroup.Item onClick={handlerChecked}>
            <Form.Check type="checkbox" checked={isChecked} label={task}/>
        </ListGroup.Item>
    )
}

export default ListItem;