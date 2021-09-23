import {useState, useEffect, useRef} from "react"
import getApiPhrase from "./useApiPhrase"

function useWordsGame(startTime = 10) {
    const [text, setText] = useState()
    const [words, setWords] = useState(0)    
    const [timeRemaining, setTimeRemaining] = useState(startTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const textBoxRef = useRef(null)
    
     function handleChange(e) { 
        //let text = e.target.value
        //setText(text) also
        const {value} = e.target
        setText(value)
    }
    
    function calculateLetters(text) {
        text.replace(/(\r\n|\n|\r)/g," ").trim()
        let spaces = text.split(/\s+/g).length - 1
        let words = text.length - spaces
        return words
    }   
    
     function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(startTime)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
        getApiPhrase()
    }         
     
    useEffect(() => {
        function CheckTime(){ 
            if(isTimeRunning && timeRemaining > 0 && getApiPhrase) {
                setTimeout(() => {
                    setTimeRemaining(time => time - 1)
                }, 1000)
                
            } else if(timeRemaining === 0) {
                setIsTimeRunning(false)
                setWords(calculateLetters(text))
                document.querySelector(".phrase").textContent = `You typed ${words} letters/characters`
            }
        }
        CheckTime()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTimeRunning, timeRemaining])    
        
    return {
        textBoxRef, 
        handleChange, 
        text,
        timeRemaining,
        startGame, 
        isTimeRunning,
        words
    }
}

export default useWordsGame