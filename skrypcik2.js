window.alert("kolorki: red, green, blue, yellow, purple, nic-bialeS")
const kolor = window.prompt("kolorek")


const zmiana = document.querySelector("#jeden")

switch (kolor) {
    case 'red':
        zmiana.style.backgroundColor = "red"
        break
    case 'green':
        zmiana.style.backgroundColor = "green"
        break
    case 'blue':
        zmiana.style.backgroundColor = "blue"
        break
    case 'yellow':
        zmiana.style.backgroundColor = "yellow"
        break
    case 'purple':
        zmiana.style.backgroundColor = "purple"
        break
    default:
        zmiana.style.backgroundColor = "white"
        break
}