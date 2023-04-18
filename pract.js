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
// CLICK
// let forthBtn = document.getElementById('button')
// forthBtn.addEventListener('click', runEvent)
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
// }
// 
// 
// DOUBLE CLICK
// let fthBtn = document.getElementById('button')
// fthBtn.addEventListener('dblclick', runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
// }
// 
// 
// MOUSEDOWN
// let sixthBtn = document.getElementById('button')
// sixthBtn.addEventListener('mousedown', runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
// }
// 
// 
//MOUSE UP
//  let sixthBtn = document.getElementById('button')
// sixthBtn.addEventListener('mouseup', runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
// }
// 
// 
// MOUSE ENTER
// let box = document.getElementById('box')
// box.addEventListener('mouseenter', runEvent);
// function runEvent(e){
//         console.log('EVENT TYPE: '+e.type)
//     }
// 
// 
// MOUSE LEAVE - for the element it self
// let box = document.getElementById('box')
// box.addEventListener('mouseleave', runEvent);
// function runEvent(e){
//         console.log('EVENT TYPE: '+e.type)
//     }
// 
// 
// MOUSE OVER - for any inner elements inside a div or element
// let box = document.getElementById('box')
// box.addEventListener('mouseover', runEvent);
// function runEvent(e){
//         console.log('EVENT TYPE: '+e.type)
//     }
// 
// 
// MOUSE OUT
// let box = document.getElementById('box')
// box.addEventListener('mouseout', runEvent);
// function runEvent(e){
//         console.log('EVENT TYPE: '+e.type)
//     }
    //
// 
// MOUSE MOVE
// let box = document.getElementById('box')
// box.addEventListener('mousemove', runEvent);
// function runEvent(e){
//         console.log('EVENT TYPE: '+e.type)
//         let output = document.getElementById('output')
//         //FINDING THE LOCATION OF THE MOUSE INSIDE THE ELEMENT
//         // output.innerHTML = '<h3>MouseX' +e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>'
//         //CHANGE THE COLOR OF THE ELEMENT BY FINDING THE LOCATION OF THE MOUSE USING OFFSET
//         // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)"
//         // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)"

// }
// 
// 






// KEY EVENTS
// 
// KEYDOWN
// let itemInput = document.querySelector('input[type="text"')
// let form = document.querySelector('form')
// itemInput.addEventListener('keydown', runEvent)
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//     console.log(e.target.value)

//     // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//     let outPut = document.getElementById('output');
//     outPut.textContent = e.target.value
// }
// 
// 
// KEY UP
// let itemInput = document.querySelector('input[type="text"')
// let form = document.querySelector('form')
// itemInput.addEventListener('keyup', runEvent)
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//     console.log(e.target.value)

//     // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//     let outPut = document.getElementById('output');
//     outPut.textContent = e.target.value
// }
// 
// 
// 
// KEY PRESS
// let itemInput = document.querySelector('input[type="text"')
// let form = document.querySelector('form')
// itemInput.addEventListener('keypress', runEvent)
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//     console.log(e.target.value)

//     // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//     let outPut = document.getElementById('output');
//     outPut.textContent = e.target.value
// }





// FOCUS AND BLUR EVENTS
// FOCUS
// let itemInput = document.querySelector('input[type="text"')
// let form = document.querySelector('form')
// itemInput.addEventListener('focus', runEvent)
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//     console.log(e.target.value)

//     // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//     let outPut = document.getElementById('output');
//     outPut.textContent = e.target.value
// }
// 
// BLUR
// let itemInput = document.querySelector('input[type="text"')
// let form = document.querySelector('form')
// itemInput.addEventListener('blur', runEvent)
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//     console.log(e.target.value)

//     // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//     let outPut = document.getElementById('output');
//     outPut.textContent = e.target.value
// }



// CUT AND PASTE
// CUT
// let itemInput = document.querySelector('input[type="text"')
// let form = document.querySelector('form')
// itemInput.addEventListener('cut', runEvent)
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//     console.log(e.target.value)

//     // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//     let outPut = document.getElementById('output');
//     outPut.textContent = e.target.value
// }
// 
// PASTE
// let itemInput = document.querySelector('input[type="text"')
// let form = document.querySelector('form')
// itemInput.addEventListener('paste', runEvent)
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//     console.log(e.target.value)

//     // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//     let outPut = document.getElementById('output');
//     outPut.textContent = e.target.value
// }



// CHANGE EVENT and INPUT
// let select = document.querySelector('select')
// select.addEventListener('change',runEvent)
// select.addEventListener('input',runEvent) //INPUT THE VALUE OF THE SELECT INTO THE DIV
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
//     //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//     console.log(e.target.value)

//     // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//     let outPut = document.getElementById('output');
//     outPut.textContent = e.target.value
// }



// SUBMIT BUTTON
// let form = document.querySelector('form')
// form.addEventListener('submit', runEvent)

//  function runEvent(e){
//         e.preventDefault()//STOPS THE EVENT FROM SUBMITTING TO THE WRONG THING
//         console.log('EVENT TYPE: '+e.type)
//         //GRAB THE VALUE OF THE KEY STROKE IN THE INPUT AND LOG IT INTO THE CONSOLE
//         console.log(e.target.value)
    
//         // GRABING THE VALUE IN THE INPUT BOX IN PUTTING IT INTO A DIV IN THE DOCUMENT
//         let outPut = document.getElementById('output');
//         outPut.textContent = e.target.value
//     }
    


//FORM EVENTS
// 
// FORM SUBMIT EVENT - ADD ITEMS
// let form = document.getElementById('addForm')
// let itemList = document.getElementById('items')
// form.addEventListener('submit', addItem)
// function addItem(e){
//     e.preventDefault();
//     console.log(1)
    
//     //GET INPUT VALUE
//     let newItem = document.getElementById('item').value
//     //CREATE NEW LI ELEMENT
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     console.log(li)
//     //ADD TEXT FROM THE INPUT VALUE TO THE ITEM LIST
//    li.appendChild(document.createTextNode(newItem))
//    //CREATE A DELETE BUTTON ELEMTN FOR THE NEW LIST ITEM
//    //ADD THE SAME CLASS AS ALL OTHER DELETE BTNS ON THE DOCUMENT
//    let deletBtn = document.createElement('button')
//    deletBtn.className = 'btn btn-danger btn-sm float-right delete'
//    //APPEND TEXT NODE
//    deletBtn.appendChild(document.createTextNode(' X'))
//    //APPEND BTN TO LI
//    li.appendChild(deletBtn)
//    itemList.appendChild(li)
// }

// //DELETE ITEMS
// itemList.addEventListener('click', removeItem)
// function removeItem(e){
//     //CHECK TO SEE WHAT YOU ARE CLICKING HAD THE CLASS "DELETE"
//     //  if(e.target.classList.contains('delete')){
//     //     console.log(1)
//     //     //CONFIRMATION BOX
//     //     if(confirm('Are you sure?')){
//     //         let li = e.target.parentElement;
//     //         itemList.removeChild(li)
//     //     }
//     //  }


//     //DELETE WITHOUT CONFIRMATION BOX OPTION
//      if(e.target.classList.contains('delete')){
//         let li = e.target.parentElement;
//         itemList.removeChild(li)
//     }
// }


// //FILTER ITEMS
// let filter = document.getElementById('filter')
// filter.addEventListener('keyup', filterItems)
// function filterItems(e){
//     //CONVERT TEXT TO LOWERCASE FROM SEARCH BOX
//     let text = e.target.value.toLowerCase(); //CHANGE THE VALUE IN THE INPUT BOX TO LOWERCASE IN THE LIST
//     console.log(text)
//     //GRAB ALL LI'S IN ITEM LIST
//     let items = itemList.getElementsByTagName('li'); 
//     //CONVERT LI'S TO AN ARRAY
//     Array.from(items).forEach(function(item){
//         let itemName = item.firstChild.textContent; //GETTING THE ITEM NAME
//         console.log(itemName)
//         //COMPARE THE ITEM NAME TO THE SEARCH BOX TEXT TO FILTER ITEMS 
//         //IF IT IS NOT A MATCH THEN IT WILL EQUAL -1. If it is not equal to -1 then it is a match
//         //!= (NOT EQUAL TO)
//         if(itemName.toLowerCase().indexOf(text) != -1){
//             item.style.display = 'block' //want to show the item
//         } else{
//             item.style.display = 'none';//do not show anything if it does not match
//         }
//     })
// }





    
    

    




