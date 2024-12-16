
// start hoverd board 
let board = document.querySelector(".board")

for(let i =  0 ; i <= 314 ; i++){
    let squer = document.createElement("div")
    squer.className = "squer"

    board.appendChild(squer)
}

let squers = document.querySelectorAll(".squer")
let squerColor = ['#e74c3c' , '#8e44ad', '#3498db' , '#e67e22' , '#2ecc71']


squers.forEach((sq , idx) =>{
    sq.addEventListener("mouseover" , (e) =>{
        
        let randomRgb1 = Math.floor(Math.random() * squerColor.length)

        sq.style.background = `${squerColor[randomRgb1]}`
        sq.style.boxShadow = `0 0 2px ${squerColor[randomRgb1]}, 0 0 10px ${squerColor[randomRgb1]}`
        
    })
})
squers.forEach((sq , idx) =>{
    sq.addEventListener("mouseleave" , (e) =>{
        sq.style.background = `#1b1b1b`
        sq.style.boxShadow = `rgb(0, 0, 0) 0px 0px 2px`
        
    })
})
