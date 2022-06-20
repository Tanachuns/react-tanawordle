import React from "react";
import memedata from "./memedata";


export default function Meme(){
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        img:"http://i.imgflip.com/1bij.jpg"
    })
    
    
    
    function handleClick(){
        const meme = memedata.data.memes
        const num = Math.floor(Math.random() * meme.length)
        const url = meme[num].url
        setMeme(prevMeme=>({
            ...prevMeme,
            img:url
        }))
    }
    const page = (
        <div className="contrainer">
        <div className="from">
            <input type="text" className="textbox" placeholder="Top Text"/>
            <input type="text" className="textbox" placeholder="Bottom Text"/>
            <br />
            <input type="button" className="btn" value="Get New Meme" onClick={handleClick} />        
        </div>
        <div className="meme">
            <img src={meme.img}alt="" />
        </div>
            
        </div>
    )
    return page
}