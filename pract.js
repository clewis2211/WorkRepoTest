// const div = document.createElement('div');
// const paraGraph = document.createElement('p');
// paraGraph.textContent = 'Hello World'
// div.appendChild(paraGraph)
// document.appendChild(div)


let div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.borderStyle = 'solid'
div.style.borderColor = 'red'


let p = document.createElement('p')
p.textContent = 'Hello World';
div.appendChild(p)
document.body.appendChild(div)

let h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3";
h3.style.color = 'blue';
div.appendChild(h3);

let h1 = document.createElement('h1')
h1.textContent = "I'm inside a div"
div.appendChild(h1)

let p2 = document.createElement('p')
p2.textContent = 'ME TOO'
div.appendChild(p2);



