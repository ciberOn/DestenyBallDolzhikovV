const arrVariants = [
    "Yes",
    "No",
    "Maybe",
    "Give me 5 kb",
    "Gm chocolate",
    "if youtry hard",
    "i can not say directly",
    "Ask another one",
    "I am not ready",
    "I think another time",
    "Its's will be easy",
]

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const randInt = Math.floor(Math.random()*arrVariants.length)
    alert(arrVariants[randInt])
})