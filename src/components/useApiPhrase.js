async function getApiPhrase() {    
            
    const url = "https://api.adviceslip.com/advice"
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        document.querySelector(".phrase").textContent = `Phrase: ${data.slip.advice}`
    } catch(err) {
        const phrases = [
            "Quality beats quantity", 
            "If you don't ask, you don't get.",
            "Drink a glass of water before meals."
            ]
        const random = Math.floor(Math.random() * 3)
        const phraseArray = phrases[random]
        document.querySelector(".phrase").textContent = `Phrase: ${phraseArray}`
    }
}

export default getApiPhrase