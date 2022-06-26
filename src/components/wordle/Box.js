import React from "react";

export default function Box(props){
    var style = {backgroundColor:props.background,color:props.background?"white":"black"}
    return (
        <div className="box" style={style}>
            {props.alphabet?props.alphabet:" "}
        </div>
        )
}