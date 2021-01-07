document.getElementById("container")
document.querySelector('#container')
let classselect = document.querySelectorAll('.second')
let thridOfOl = document.querySelector('ol').querySelector('.third')

//this is the code that adds the hello text to the class container
// document.querySelector('#container').innerHTML = '<h1>Hello!</h1>'

document.querySelector('.footer').classList.add("main")
document.querySelector('.footer').classList.remove("main")

let li = document.createElement("LI")
let text = document.createTextNode("four")
li.appendChild(text)

let ul = document.getElementsByTagName('ul')[0]
ul.appendChild(li)

document.getElementById('container').appendChild(ul)

let ol = document.querySelector('ol')
let olLi = ol.getElementsByTagName('li')

for (let li of olLi) {
    li.style.backgroundColor = "green";
}

document.getElementsByClassName("footer")[0].remove();