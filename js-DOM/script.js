
//Creating an element
let element = document.createElement('p');
let text = document.createTextNode("Hi i am the content of the text node...");
element.appendChild(text);
document.body.appendChild(element);

// //Creating another element
let element2 = document.createElement('h1');
let content = document.createTextNode('This is a h1 tag')
element2.appendChild(content)
document.body.appendChild(element2)

// //creating parent element
let parent = document.getElementsByTagName('body')[0]
parent.insertBefore(element2,element)

// //creating button element
let button = document.createElement('button');
let buttonContent = document.createTextNode("Add item");
button.appendChild(buttonContent)
button.setAttribute('id','add-item-button');
document.body.appendChild(button)
parent.insertBefore(button,element)

//removing an element
let removedObject = document.getElementById('add-item-button')
parent.removeChild(removedObject)

//Events
//Button -  event
button.onclick = function(){
   alert('Button is clicked !!!! I am an event...');
}

//Adding list items on clicking a button

const ulist = document.getElementById('ul-list')
const button = document.getElementById('button')
let count = 0
button.onclick = function(){
    count++;
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${count} is added`
  //  listItem.innerHTML = 'Item is added to the cart';
    ulist.appendChild(listItem)
}
//alert(`${count} items are added to the cart`)

//Sending info from forms
let input = document.getElementById('name')
console.log(input.value)

let sendButton = document.getElementById('submit')
sendButton.onclick = function()
{
    let input = document.getElementsByTagName('input')[0]
    console.log(input.value)
}








