import React from "react";

export default function Result(props){
    console.log(props.result)
    var resultText
    if(props.result==="Correct"){
        resultText = (
            <div>
                <h1>{props.result}</h1>
                
                <h2>My name is Tanarak Nice to meet you :D</h2>
                <button className="btn">About Me</button>
            </div>
        )
    }

    else if (props.result==="Wrong"){
        resultText = (
            <div>
                <h1>{props.result}</h1>
                <h3>But</h3>
                <h2>My name is Tanarak Nice to meet you :D</h2>
                <button className="btn">About Me</button>
            </div>
        )
    }
    else if (props.result==="letter"){
        resultText = (
            <div>
                <h1>Not Enought Letters</h1>
                <button className="btn" onClick={props.handleClick}>OK</button>
            </div>
        )
    }
    


    return (
        <div className="r">
             <div className="r-contrainer">
                {resultText}
               </div>
        </div>
           
        )
}