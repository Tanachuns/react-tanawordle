import React from "react";
import Box from "./Box";
import Keyboard from "./Keyboard";
import Result from "./Result";

export default function Wordle(){
    const myName = ["T","A","N","A","R","A","K"]
    var color = []
    var [result,setResult] = React.useState()
    var [background,setBackground] = React.useState([[],[],[],[],[],[]])
    var [pointer,setPointer] = React.useState(0)
    var [alphabets,setAlphabets] = React.useState([[],[],[],[],[],[]])
    var [row,setRow] = React.useState(0)
    function handleKey(event){
        const keyValue = event.target.value
        if(keyValue==="<"){
            setAlphabets(prevArray=>{
                prevArray[row].pop()
                return prevArray
            })
            setPointer(prevPointer=>prevPointer-1)
        }
        else if (keyValue==="ENTER"){
            
                if(alphabets[row].length===7){
                    for(let i=0;i<alphabets[row].length;i++){
                        if(alphabets[row][i]===myName[i]){
                            color.push("#0e8a22")
                        }
                        else if (myName.includes(alphabets[row][i])){
                            color.push("#f5c242")
                        }
                        else{
                            color.push("#a30808")

                        }
                    }
                    
                    setBackground(prevBackground=>{
                        prevBackground[row]=color
                        return prevBackground
                    })
                    if(color.every( val => val === "#0e8a22" ) ){
                       setResult("Correct")
                    }

                    else{
                        setRow(prevRow=>prevRow+1)
                        if(row===5){
                            setResult("Wrong")
                        }
                    }
                }
                else{
                    setResult("letter")
                }
                
            }
        else{
            if(alphabets[row].length<7){
                setAlphabets(prevArray=>{
                    prevArray[row].push(keyValue)
                    return prevArray
                })
                setPointer(prevPointer=>prevPointer+1)
            }
        }
    }

    function handleClick(){
        setResult()
    }

    
    return (
        <div className="w-contrainer">
            <h1>Guess My Name.</h1>
            <div className="w-row">
                <Box alphabet={alphabets[0][0]} background={background[0][0]}/>
                <Box alphabet={alphabets[0][1]} background={background[0][1]}/>
                <Box alphabet={alphabets[0][2]} background={background[0][2]}/>
                <Box alphabet={alphabets[0][3]} background={background[0][3]}/>
                <Box alphabet={alphabets[0][4]} background={background[0][4]}/>
                <Box alphabet={alphabets[0][5]} background={background[0][5]}/>
                <Box alphabet={alphabets[0][6]} background={background[0][6]}/>
            </div>
            <div className="w-row">
                <Box alphabet={alphabets[1][0]} background={background[1][0]}/>
                <Box alphabet={alphabets[1][1]} background={background[1][1]}/>
                <Box alphabet={alphabets[1][2]} background={background[1][2]}/>
                <Box alphabet={alphabets[1][3]} background={background[1][3]}/>
                <Box alphabet={alphabets[1][4]} background={background[1][4]}/>
                <Box alphabet={alphabets[1][5]} background={background[1][5]}/>
                <Box alphabet={alphabets[1][6]} background={background[1][6]}/>
            </div>
            <div className="w-row">
                <Box alphabet={alphabets[2][0]} background={background[2][0]}/>
                <Box alphabet={alphabets[2][1]} background={background[2][1]}/>
                <Box alphabet={alphabets[2][2]} background={background[2][2]}/>
                <Box alphabet={alphabets[2][3]} background={background[2][3]}/>
                <Box alphabet={alphabets[2][4]} background={background[2][4]}/>
                <Box alphabet={alphabets[2][5]} background={background[2][5]}/>
                <Box alphabet={alphabets[2][6]} background={background[2][6]}/>
            </div>
            <div className="w-row">
                <Box alphabet={alphabets[3][0]} background={background[3][0]}/>
                <Box alphabet={alphabets[3][1]} background={background[3][1]}/>
                <Box alphabet={alphabets[3][2]} background={background[3][2]}/>
                <Box alphabet={alphabets[3][3]} background={background[3][3]}/>
                <Box alphabet={alphabets[3][4]} background={background[3][4]}/>
                <Box alphabet={alphabets[3][5]} background={background[3][5]}/>
                <Box alphabet={alphabets[3][6]} background={background[3][6]}/>
            </div>
            <div className="w-row">
                <Box alphabet={alphabets[4][0]} background={background[4][0]}/>
                <Box alphabet={alphabets[4][1]} background={background[4][1]}/>
                <Box alphabet={alphabets[4][2]} background={background[4][2]}/>
                <Box alphabet={alphabets[4][3]} background={background[4][3]}/>
                <Box alphabet={alphabets[4][4]} background={background[4][4]}/>
                <Box alphabet={alphabets[4][5]} background={background[4][5]}/>
                <Box alphabet={alphabets[4][6]} background={background[4][6]}/>
            </div>
            <div className="w-row">
                <Box alphabet={alphabets[5][0]} background={background[5][0]}/>
                <Box alphabet={alphabets[5][1]} background={background[5][1]}/>
                <Box alphabet={alphabets[5][2]} background={background[5][2]}/>
                <Box alphabet={alphabets[5][3]} background={background[5][3]}/>
                <Box alphabet={alphabets[5][4]} background={background[5][4]}/>
                <Box alphabet={alphabets[5][5]} background={background[5][5]}/>
                <Box alphabet={alphabets[5][6]} background={background[5][6]}/>
            </div>
            <Keyboard keyPressed={handleKey}/>
            {result&&<Result result={result} handleClick={handleClick}/>}
        </div>
        )
}