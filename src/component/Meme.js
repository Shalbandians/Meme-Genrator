import React from "react"
export default function Meme() {
    
  const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])
      
    React.useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(data => setAllMemeImages(data.data.memes))
  }, [])
  console.log(allMemeImages)

    function getMemeImage() {
          const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
     setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }) )
    }
    function handleChange(event){
      const{name, value}= event.target
      setMeme(prevMeme=>({
        ...prevMeme,
        [name]:value
      }))
    } 

   
        return (
            <main>
                <div className="me">
                
      <input 
       className='t' 
      type='text' 
      placeholder='Top Text'
      name="topText"
      value={meme.topText}
      onChange={handleChange}
      />
      <input
       className='t' 
       type='text' 
      placeholder='Bottom Text'
      name="bottomText"
      value={meme.bottomText}
      onChange={handleChange}

      />
      <button className="g"
      onClick={getMemeImage}
      >
        Get the new Image
      </button>
     
 </div>
 <div className="meme">  
         <img src={meme.randomImage} alt='' className="meme--image"/>
           <h2 className="meme--text top">{meme.topText} </h2>
           <h2 className="meme--text bottom">{meme.bottomText} </h2>
           </div>
           

            </main>
            
        );
    }

 
