import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addCat } from "../../redux/features/slice";
import { useDispatch,useSelector } from "react-redux";


const Right_panel = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState({
        catName:"",
        catImage:"",
        catClick:""
    })


    const handleClick =()=>{    
        dispatch(addCat(value));
        // alert("Your form has been submited")
    }

  return <Container >
        <Button variant='primary'>Open New Form</Button>
        <Form className="my-3" >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cat Name</Form.Label>
        <Form.Control type="text" placeholder="Timmy" name="catName"   value={value.catName} onChange={(e)=> setValue({...value, catName:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cat Image</Form.Label>
        <Form.Control type="text" placeholder="Image Url" name=" catImage"  value={value.catImage}  onChange={(e)=> setValue({...value, catImage:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cat Click</Form.Label>
        <Form.Control type="number" placeholder="No. of Click" name="catClick" value={value.catClick}  onChange={(e)=> setValue({...value, catClick:e.target.value})} />
        </Form.Group>
        <Button onClick={handleClick}>Save</Button>
        <Button variant='danger'>Undo</Button>
        </Form>
  </Container>;
};

export default Right_panel;
