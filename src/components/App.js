// create your App component here
// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [dogImage, setDogImage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setDogImage(data.message)
            setIsLoading(false)
        })
        .catch((error) => {
            //log any errors that occur during the fetch operation
            console.error("Error fetching dog image:", error)
            setIsLoading(false)
        });
    }, []);
  return (
    <div>
        
        {isLoading ?(
            <p>Loading...</p>
        ) : (
            <img src={dogImage} alt='A Random Dog' style={{maxWidth: "100%"}} />
        )}
    </div>
  )
}

export default App