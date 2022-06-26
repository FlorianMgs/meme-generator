import React from 'react'
import get from 'axios'
import { TextField, Button } from '@mui/material'
import MemeData from '../resources/meme-data'


const MemeForm: React.FC = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState<any[]>([])
    
    React.useEffect(() => {
        get("https://api.imgflip.com/get_memes")
            .then(res => {
                setAllMemes(res.data.data.memes)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setMeme({
            ...meme,
            [name]: value
        })
    }

    function changeImg() {
        const random_index = Math.floor(Math.random() * allMemes.length)
        const random_meme = allMemes[random_index]
        setMeme(prevMemeState => {
            return {
                ...prevMemeState,
                randomImage: random_meme.url
            }
        })
    }

    return (
        <div className="meme-section">
            <form className='form'>
                <div className='form--inputs'>
                    <TextField
                        className='form-input'
                        id="input_top"
                        label="Top text"
                        variant="outlined"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <TextField
                        className='form-input'
                        id="input_bottom"
                        label="Bottom text"
                        variant="outlined"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <Button
                    className='button'
                    id="button_submit"
                    variant="contained"
                    onClick={changeImg}
                >
                    Get a new meme image 🖼
                </Button>
            </form>
            <div className='meme'>
                <img src={meme.randomImage} alt="meme" id='meme-image' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default MemeForm