import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import {useSelector} from "react-redux"

const Left_Nav = () => {

    const cats = useSelector(state => state.cat.cats)
    // const catData = getData()

    
  return (
    <Container >
    {
        cats.map((item)=>{
        return (
           <ListGroup as="ul" key={item.id} >
           <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
           {item.catName}
             <Badge bg="danger" pill>
                {item.catClick}
              </Badge>
           </ListGroup.Item>
         </ListGroup>
        )
        })
    }
    </Container>
  );
};

export default Left_Nav;
