let liczba = 0
const pls = document.querySelector('#plus')
const mns = document.querySelector('#minus')
const lcz = document.querySelector('#liczby')
const rst = document.querySelector('#reset')


function plus() {
    lcz.innerHTML = `${++liczba}`
    if (liczba > 0)
        lcz.style.color = "green"
    else if (liczba == 0)
        lcz.style.color = "black"

}
pls.addEventListener('click', plus)

function minus() {

    lcz.innerHTML = `${--liczba}`
    if (liczba < 0)
        lcz.style.color = "red"
    else if (liczba == 0)
        lcz.style.color = "black"

}
mns.addEventListener('click', minus)

function reset() {
    liczba = 0
    lcz.innerHTML = 0
    lcz.style.color = 'black'

}
rst.addEventListener('click', reset)