// const div = document.createElement('div');
// const paraGraph = document.createElement('p');
// paraGraph.textContent = 'Hello World'
// div.appendChild(paraGraph)
// document.appendChild(div)


// let div = document.createElement('div');
// div.style.backgroundColor = 'pink';
// div.style.borderStyle = 'solid'
// div.style.borderColor = 'red'


// let p = document.createElement('p')
// p.textContent = 'Hello World';
// div.appendChild(p)
// document.body.appendChild(div)

// let h3 = document.createElement('h3');
// h3.textContent = "I'm a blue h3";
// h3.style.color = 'blue';
// div.appendChild(h3);

// let h1 = document.createElement('h1')
// h1.textContent = "I'm inside a div"
// div.appendChild(h1)

// let p2 = document.createElement('p')
// p2.textContent = 'ME TOO'
// div.appendChild(p2);


//Get Element By ID//
// console.log(document.getElementById('header-title'))
// let headerTitle = document.getElementById('header-title')
// let mainHeader = document.getElementById('main-header')
// console.log(headerTitle)
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.style.borderBottom = 'solid 3px white'
// mainHeader.style.borderBottom = 'solid 3px black'


// GET ELEMENTS BY CLASS NAME//
// let items = document.getElementsByClassName('list-group-item')
// console.log(items[1])
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'
// for(let i = 0; i<items.length; i++){
//     get current itteration and then loop through
//     items[i].style.backgroundColor = 'gray'
// }



//GET ELEMENTS BY TAG NAME
// let li = document.getElementsByTagName('li')
// console.log(li)
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'
// for(let i = 0; i<li.length; i++){
//     // get current itteration and then loop through
//     li[i].style.backgroundColor = 'gray'
// }


// QUERY SELECTOR
// let header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 5px #ccc'
// let input = document.querySelector('input')
// input.value = 'Text Here'
// let submit = document.querySelector('input[type="submit"]')
// submit.value='SEND'
// let item = document.querySelector('.list-group-item')
// item.style.color = 'red'
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'yellow'




//QUERY SELECTOR ALL
// let titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent = 'Hello World'
// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)')
// for(let i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
// }
// for(let i = 0; i < even.length; i++){
//     even[i].style.backgroundColor = "red"
// }



//TRAVERSING THE DOM ---
// let itemList = document.querySelector('#items')
//parentNode Method
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

//parentElement Method
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'

//childNode Method
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'yellow'

//firstChild Method
// console.log(itemList.firstChild)

//firstElemntChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello World'

//lastChild Method
// console.log(itemList.lastChild);
// itemList.lastChild.textContent = 'Goodbye World'

//lastElementChild Method
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Goodbye World'

//nextSibling
// console.log(itemList.nextSibling)
// itemList.nextSibling.textContent = 'Hello World'

//nextElementSibling
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)
// itemList.previousSibling.textContent = 'This should be red'

//previousElementSibling
//_---------------------------------------------------------------------




//Create a div
// let newDiv = document.createElement('div');
// newDiv.className = 'newDiv'
// newDiv.id = 'newDiv-ID'
// //ADD ATTRIBUTE
// newDiv.setAttribute('title', 'Hello Div')
// console.log(newDiv)
// //CREATE TEXT NODE IN DIV
// let newDivText = document.createTextNode('Hello My Dear')
// //ADD TEXT TO newDiv
// newDiv.appendChild(newDivText)
// console.log(newDiv)



//CLICK EVENT
// let button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123)
// });

// let newBtn = document.getElementById('button')
// newBtn.addEventListener('click',buttonClick)
// function buttonClick(){
//     console.log(1234)
// }

// let secondButton = document.getElementById('button').addEventListener('click', newBtnClick)
// function newBtnClick(){
//     //DIFFERENT WAYS TO DO THE SAME THING - ANY DOM SELECTOR CAN BE ATTATCHED TO AN EVENT
//     // document.getElementById('header-title').textContent = 'Changed';
//     // let changeHeader = document.getElementById('header-title')
//     // changeHeader.textContent = 'This text is changed'
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
// }

// let thrdBtn = document.getElementById('button')
// thrdBtn.addEventListener('click', logThis)
// // FUNCTION WITH PARAMATERS
// function logThis(e){
//     // console.log(e)
//     // console.log(e.target) // GIVES THE ACTUAL ELEMENT THAT WAS CLICKED
//     // console.log(e.target.id)//GET THE ID OF THE ELEMENT THAT WAS CLICKED
//     // console.log(e.target.className)//GET ALL THE CLASSES ON THE ELEMENT
//     // console.log(e.target.classList)//GET AN ARRAY OF THE CLASS LIST
//     // //OUTPUTING THE ELEMENT CONTENTS
//     // // let output = document.getElementById('output').innerHTML = '<h3>' +e.target.id+ '</h3>'
//     // // let output = document.getElementById('output').innerHTML = '<h3>' +e.target.className+ '</h3>'
//     // let output = document.getElementById('output').innerHTML = '<h3>' +e.target.classList+ '</h3>'

//     //TYPE OF EVENT 
//     // console.log(e.type)

//     // POSITION OF MOUSE X & Y AXIS
//     // console.log(e.clientX)
//     // console.log(e.clientY)

//     //CHECK TO SEE WHAT KEY IS PRESSED ON THE KEYBOARD WHEN CLICKEING
//     console.log(e.altKey)
//     console.log(e.ctrlKey)
//     console.log(e.shiftKey)
// }




//MOUSE EVENTS
let forthBtn = document.getElementById('button')
forthBtn.addEventListener('click', runEvent)
function runEvent(e){
    console.log('EVENT TYPE: '+e.type)
}



