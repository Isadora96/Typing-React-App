import React from "react"
import useWordsGame from "./components/useWordsGame"

function App(props) {
    
    const {
        textBoxRef, 
        handleChange, 
        text,
        timeRemaining,
        startGame, 
        isTimeRunning,
        
    } = useWordsGame(10)      
    
    const styleColor = timeRemaining <= 5 ? "red" : "mediumspringgreen" 
    return (
        <div>
            <div className="typing">
                <h1>
                    {!isTimeRunning ? "How fast you can type?" :
                        <span style={{color: styleColor}}>        
                            You have {timeRemaining}s left
                        </span>
                    }
                </h1>
            </div>
            <textarea
                type="text"
                value={text}
                onChange={handleChange}
                disabled={!isTimeRunning}
                ref={textBoxRef}
            />
            <p className="phrase">Want a challenge? Type the phrase that will be provided.</p>
            <button disabled={isTimeRunning} onClick={startGame} >Start/Restart</button>  
        </div>
        )
}
export default App
