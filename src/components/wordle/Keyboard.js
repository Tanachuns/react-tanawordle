import React from "react";

export default function Keyboard(props){
    return (
        <div className="k-contrainer">
            <form action="" method="post">
                <div className="k-row">
                    <input className="key" type="button" value="Q" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="W" onClick={props.keyPressed} />
                    <input className="key" type="button" value="E" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="R" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="T" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="Y" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="I" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="O" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="P" onClick={props.keyPressed}/>
                </div>
                <div className="k-row">
                    <input className="key" type="button" value="A" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="S" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="D" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="F" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="G" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="H" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="J" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="K" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="L" onClick={props.keyPressed}/>
                </div>
                <div className="k-row">
                    <input className="key-enter" type="button" value="ENTER" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="Z" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="X" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="C" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="V" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="B" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="N" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="M" onClick={props.keyPressed}/>
                    <input className="key" type="button" value="<" onClick={props.keyPressed}/>
                </div>
                
            </form>
        </div>
    )
}