// console.log(window);
// console.log(document);

// const heading = document.querySelector('h3');
// const heading = document.querySelector('.title');
// const heading = document.getElementById('title');
// const heading = document.getElementsByClassName('title');
// console.log(heading);

//  Note: Style from JS 
// const heading = document.getElementById('title');
// heading.style.color = "red"
// heading.style.background = "yellow"
// heading.style.padding = "10px"
// heading.style.margin = "5px"
// heading.style.textAlign = "center"
// heading.textContent = 'Hi Rumana!'
// heading.innerHTML = '<spand style=" color: green"> Welcome </spand>'
// // Style adding or remove from CSS 
// heading.classList.add('heading');
// heading.classList.remove('heading');

// Note: (In this case the color will be change only for first chil of li)
// document.querySelector('li').style.color = 'blue';
// document.querySelector('ul li').style.color = 'blue';


// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'green';

// Multiple Elements
// const names = document.getElementsByClassName('name-list');
// const names2 = document.querySelectorAll('.name-list');
// // console.log(names)
// console.log(names2)
// const names3 = document.querySelectorAll('.list-item');
// console.log(names3)

// Note: Travsering
// const names = document.querySelector('.name-list');
// console.log(names)
// const names2 = document.querySelector('ul.name-list');
// console.log(names2.children);
// console.log(names2.children[0]);
// console.log(names2.children[1]);
// names2.children[0].textContent = 'Developer'

// Event listenners & the event obj 
// let val;
// document.querySelector('.btn').addEventListener('click', function(e){
//     // val = e.target;
//     // val = e.target.id; [it will not working bcz I used class.]
//     // val = e.target.className;
//     val = e.target.type;
//     console.log(val);
// })


// Mouse Event 
// let val2;
// const btn2 = document.querySelector('.btn');
// // btn2.addEventListener('click', test);
// // btn2.addEventListener('dblclick', test);
// // btn2.addEventListener('mousedown', test);
// btn2.addEventListener('mouseup', test);

// // function test(e){
// //     // console.log('Hello');
// //     console.log(`Event type: ${e.type}`);
// // }

// function test(e){
//     // console.log('Hello');
//     console.log(`Event type: ${e.type}`);
// }


// // Keyboard Event 
// const heading = document.getElementById('title');
// const foRm = document.querySelector('form');
// const listInput = document.querySelector('#list-input');
// foRm.addEventListener('submit', f_test);
// // listInput.value = "";

// // listInput.addEventListener('keydown', f_test);
// listInput.addEventListener('keyup', f_test);

// function f_test(e){
//     e.preventDefault();
//     // console.log(listInput.value);
//     // console.log(`Even Type: ${e.type}`)
//     heading.innerText = e.target.value; //(It's working for this line "listInput.addEventListener('keyup', f_test);")

// }

const userList = document.querySelector('.name-list');
const listInput = document.querySelector('#list-input');
const addBttn = document.querySelector('.btn');

addBttn.addEventListener('click', function(){
const Li = document.createElement('li');
// console.log(Li);
const texT = document.createTextNode(listInput.value);
// console.log(texT);
Li.appendChild(texT);
userList.appendChild(Li);

});