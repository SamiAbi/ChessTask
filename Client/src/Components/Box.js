
import React from "react";

const Box = props => {

    return (
        <div className={!!props.selectedColor ? 'bg-success' : props.color == 'B' ? 'bg-dark' : 'bg-white'} style={{ width: 100, height: 100 }}>
        </div>
    );

}

export default Box;