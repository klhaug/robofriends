import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const cardComponent = robots.map(e => <Card id= {e.id} name={e.name} email = {e.email} />
    )
    
    return (
        <>
            {cardComponent}
        </>
    );
}

export default CardList;


const newArray = [
    {
        navn: "Kristian",
        alder: 28,
        jobb: "Kul"
    },
    {
        navn: "Anniken",
        alder: 30,
        jobb: "Også kul"
    }
]

