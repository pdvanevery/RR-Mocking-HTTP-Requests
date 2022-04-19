import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
const [gitHubName, setGitHubName] = useState('') 
const [gitHubUrl, setGitHubUrl] = useState('')                    


useEffect(() => {
    fetch('https://api.github.com/users/learningToCode1234')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.name)
        setGitHubUrl(data.url)
    })
}, [])

return (
    <div className="App">
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
        <a href={gitHubUrl}></a>
    </div>
);
}

export default App
    
