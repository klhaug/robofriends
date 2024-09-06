import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const cardComponent = robots.map(e => <Card key={e.id} id= {e.id} name={e.name} email = {e.email}/>
    )
    
    return (
        <>
            {cardComponent}
        </>
    );
}

export default CardList;

