const h1 = document.querySelector('#has1')
const h2 = document.querySelector('#has2')
const span = document.querySelector('ul')

function jaja() {
    const c = h1.value === h2.value
    if (c) {
        span.innerHTML = "zgadza sie"
        span.style.color = "green"
    }
    else {
        span.innerHTML = "hasla roznia sie"
        span.style.color = "red"
    }
}

h2.addEventListener('input', jaja)