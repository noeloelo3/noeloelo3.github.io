```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page</title>
    <link rel="stylesheet" href="gowno.css">
</head>
<body>
    <header>
       <h1>pejdz</h1> 
    </header>
<main>
    <div id="lewo">
        <article>
            <div id="licznik">
                <h2>licznik</h2>
                <p id="liczby"><b>0</b></p>
                <button id="plus">plus</button>
                <button id="minus">minus</button>
                <button id="reset">reset</button>
            </div>
            <blockquote id="jeden">
                alejaja
            </blockquote>
            <h2>haslo</h2>
            <form>
                <input id="has1" type="password">
                <input id="has2" type="password">
            </form>
            <ul></ul>

        </article>
        <footer>
            futer
        </footer>
        
    </div>
    <div id="prawo">
        <nav>
            <a  id="tenjeden" target="_blank" href="http://youtube.com">jutub</a>
            <a class="tedwa" target="_blank" href="http://github.com/teb-dk">kostrzewapan</a>
            <a class="tedwa" target="_blank" href="http://github.com/teb-jz">ziolkowskipan</a>
        </nav>
        <aside>
            <div id="klocki">
                 <div id="grupa1">
                    <div class="jeden">1</div>
                    <div class="dwa">2</div>
                </div>    
                <div id="grupa2">
                    <div class="jeden">1</div>
                    <div class="dwa">2</div>
            </div>
            </div>
        </aside>
    </div>
</main>

<script>
    const pier = document.querySelector('#jeden')
    const nap = window.prompt("napisz cos ok")
    pier.innerHTML = `<span>${nap}</span>`
</script>
<script>
    window.alert("kolorki: red, green, blue, yellow, purple, nic-biale")
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
</script>
<script>
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
</script>
<script>
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
</script>

</body>
</html>
```
