import React from "react";

export default function Result(props){
    console.log(props.result)
    var resultText
    if(props.result==="Correct"){
        resultText = (
            <div>
                <h1>{props.result}</h1>
                
                <h2>My name is Tanarak Nice to meet you :D</h2>
                <button className="btn" onClick={props.handleFinishedClick}>OK</button>
                <br/><br/>
                <a href="https://twitter.com/intent/tweet?text=Nice%20to%20meet%20you%20too%20@tanachuns.%0A(From%20https://tanarak.netlify.app/)" class="tweet" data-show-count="false">Tweet</a>
            </div>
        )
    }

    else if (props.result==="Wrong"){
        resultText = (
            <div>
                <h1>{props.result}</h1>
                <h3>But</h3>
                <h2>My name is Tanarak Nice to meet you :D</h2>
                <button className="btn" onClick={props.handleFinishedClick}>OK</button>
                <br/><br/>
                <a href="https://twitter.com/intent/tweet?text=Nice%20to%20meet%20you%20too%20@tanachuns.%0A(From%20https://tanarak.netlify.app/)" class="tweet" data-show-count="false">Tweet</a>
                
            </div>
        )
    }
    else if (props.result==="letter"){
        resultText = (
            <div>
                <h1>Not Enough Letters</h1>
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