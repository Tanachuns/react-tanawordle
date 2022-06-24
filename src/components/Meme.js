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

    function handleChange(event){
        console.log(meme)
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    const page = (
        <div className="contrainer">
            <div className="from">
                <input type="text" 
                    className="textbox" 
                    placeholder="Top Text"
                    name = "topText"
                    onChange={handleChange}
                    value = {meme.topText}
                />
                <input type="text" 
                    className="textbox" 
                    placeholder="Bottom Text"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange={handleChange}
                    />
                <br />
                <input type="button" className="btn" value="Get New Meme" onClick={handleClick} />        
            </div>
            <div className="meme">
                <img alt="" src={meme.img} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
    return page
}