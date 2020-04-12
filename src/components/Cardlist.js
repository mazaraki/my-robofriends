import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
    const cardArray = robots.map((robot, i) => {
        return (
            <Card 
                key={ robots[i].id } 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
             />
        );
    });
    return (
        <div>
          {cardArray}
        </div>
    );
};

export default Cardlist;