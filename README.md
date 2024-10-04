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
            <h2>artikil</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eaque, reprehenderit aut amet a dolores nemo incidunt tenetur voluptas cupiditate laudantium nisi eum asperiores explicabo aliquid minima laborum distinctio, esse odit, eos repellat iure ipsam possimus quasi! Eum cumque nisi vero, recusandae voluptas ullam? Consequatur, consectetur ipsam tenetur eius saepe cupiditate voluptatum nesciunt, voluptate beatae porro autem molestiae voluptatibus nulla.</p>
            <blockquote>
                alejaja
            </blockquote>
            <h2>articil</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque et necessitatibus, voluptatem porro veniam eaque voluptatibus nihil exercitationem? Tempora blanditiis odio eum pariatur. Nihil assumenda ipsa porro placeat iusto, asperiores, quod qui, sequi dignissimos adipisci aliquid sint obcaecati sapiente!
            </p>

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

</body>
</html>
```

```css
body{
    color: #FDFDFF;
    border: 1px solid #444F5A;
    display: flex;
    flex-direction:column;
    min-height: 100vh;
    margin: 0;
    box-sizing: border-box;
}

header,footer{
    background-color: #604D53;
    border: 1px solid black;
    font-style: italic;
    box-sizing: border-box;
}

nav,blockquote{
    background-color: #DB7F8E;
    border: 1px solid black;
    box-sizing: border-box;
}

aside{
    background-color: #FFDBDA;
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    
}

article{
    background-color: #D5C5C8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
}

p{
    color: black;
    text-align:justify;
    padding: 10px;
}

 h2{
    text-align: left;
    margin: 0;
    padding-left: 2vh;  
    padding-top: 1vh;
    color: black;
 }

#lewo{
   width: 100%;
   display: flex;
   flex-direction: column;
 
}

#prawo{
    width: 40%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

}

main{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    

}

.jeden{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 300%;
    border: 2px solid #DB7F8E ;
    color: black;
    text-align: center;
    border-radius:15px;
    box-sizing: border-box;
}

.dwa{
    border: 2px solid #DB7F8E;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 300%;
    color: black;
    text-align: center;
    border-radius:15px;
    box-sizing: border-box;
}


aside{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 0;
    
}

#klocki{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

#grupa1{
    display: flex;
    justify-content: center;
    align-items: center;
}

#grupa2{
    display: flex;
    justify-content: center;
    align-items: center;
}

.jeden{
    margin: 10px;
    width: 100px;
    height: 300px;
}

.dwa{
   margin: 10px;
   width: 100px;
   height: 150px;
}

#grupa1{
    display: flex;
    flex-direction: column;
}

#grupa2{
    display: flex;
    flex-direction: column-reverse;

}

blockquote{
    margin: 0;
    height: 10vh;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tedwa{
    border-left: 1px solid white;  
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 150px;
}

a{
    text-align: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: white;
}

#tenjeden{
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center; 
}

a:hover{
    color: black;
    background-color: #D5C5C8;
    font-size: 25px;
    transition: 0.3s;
}

header{
    text-align: right;
    padding-right: 50px;
    height: 100px;
}


footer{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

}

blockquote::after{ 
    content: '"';
}

blockquote::before{
    content: '„';
}


.jeden:hover,.dwa:hover{
    background-color: #DB7F8E;
    color: white;
    transition: 0.3s;
    
}
```
