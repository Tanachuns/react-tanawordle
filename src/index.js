import React from 'react'
import ReactDOM from 'react-dom'
import Wordle from "./components/wordle/Wordle";

function Index(){
    
    const index = (
        <div className="index">
            <Wordle />
        </div>
    )
    return index
}
ReactDOM.render(<Index />,document.getElementById('root'));

