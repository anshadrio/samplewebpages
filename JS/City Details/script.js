const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'resulting'
document.getElementById("wrapper").appendChild(resultdiv)
button.addEventListener("click", torun);

function torun(){
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value


    let population= 0
    let literacy= 0
    let language= 0

switch(city){
    case 'benguluru':
        population = 8443675
        literacy = 88.71
        language = 'Kannada'
        break

    case 'chennai':
        population= 4646732
        literacy = 90.20
        language = 'Tamil'
        break
        
    case 'delhi':
        population= 16787941
        literacy= 86.20
        language= 'Hindi'
        break
    case 'mumbai':
        population= 12442373
        literacy= 89.73
        language= 'Marathi' 
        break   
} 


const text = `The Indian City of ${city} has a population of ${population}. Languages spoken is ${language} and the literacy rate is ${literacy}`

console.log(text)

document.getElementById('resulting').innerHTML = text
    
}



