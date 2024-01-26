//! 1. many way to print in javaScript
// console.log("Hello world");
// alert("Hey this is a alert");
// document.write("This is a writing help of js.");

//! 2. JavaScript console API
// console.warn("This is warning.");
// console.error("This is an error.");

//!  3.  function in javaScript
//? DRY-> Do not repeat yourself.
// function avg(a,b){
//     return (a+b)/2;
// }
// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1,c2);

//!  4. forEach loop
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach(function (element) {
//   console.log(element);
// });

//!  5. Document object menipulation(DOM)

//  let elem = document.getElementById("submit").click();
// console.log(elem);

// const elemid = (document.getElementById("button").style.border =
//   "2px solid red");
// console.log(elemid);

//  let elemclass = document.getElementsByClassName("para");
// console.log(elemclass);
// elemclass[1].style.background = "gray";
// elemclass[0].classList.add("addClass");
// elemclass[0].classList.add("autoCreateClass");
// elemclass[0].classList.remove("autoCreateClass");
// console.log(elemclass[1].innerHTML);
// console.log(elemclass[0].innerText);

// let tagName = document.getElementsByTagName('div');
// console.log(tagName);
// ce = document.createElement('p');
// ce.innerText = 'This is a create para';
// tagName[0].appendChild(ce);
// ce2 = document.createElement('p');
// ce2.innerText = 'This is a replace para for para one.';
// tagName[0].replaceChild(ce2,ce);

// sel = document.querySelectorAll('.para');
// console.log(sel);
// sel = document.querySelector('.para');
// console.log(sel);

//! 6. JavaScript events.
// function clicked(){
//     console.log("The button was clicked...");
// }

// window.onload = function(){
//     console.log("The document was loaded..");
// }

// container.addEventListener('click', function(){
//     console.log("Clicked...");
// })

// container.addEventListener('mouseover', function(){
//     console.log("Mouse on container...");
// })
// container.addEventListener('mouseout', function(){
//     console.log("Mouse out of container...");
// })

// container.addEventListener('mouseup', function(){
//     console.log("Mouse up of container...");
// })

// container.addEventListener('mousedown', function(){
//     console.log("Mouse down of container...");
// })

// let preHtml = document.querySelectorAll(".container").innerHTML;
// container.addEventListener("mouseup", function () {
//   document.querySelectorAll(".container").innerHTML = preHtml;
//   console.log("Mouse up of container...");
// });
// container.addEventListener("mousedown", function () {
//   document.querySelectorAll(".container").innerHTML = "<b> We have clicked..</b> ";
//   console.log("Mouse down of container...");
// });

//!  SetTimeout setinterval. 
// func = ()=>{
//   console.log("Some time after I am call...");
//     document.querySelectorAll(".container2")[0].innerHTML = "<b> We have clicked..</b> ";
// }
// setTimeout(func,1000);
// clr = setInterval(func,4000);
// clearInterval(clr); // clearTimeout(clr);

//!  JavaScript local Storage.
// localStorage.setItem('name1','Surya');
// localStorage.setItem('name2','Ashish');
// item2 = localStorage.getItem('name1');
// item = localStorage;
// console.log(item);
// console.log(item2);
// localStorage.removeItem("name1");
// console.log(item);
// localStorage.clear();
// item = localStorage;
// console.log(item);

//! JSON
// obj = {name:"Surya",length:1,first:{firstName:"Ashish"},Last:{LastName:"Sharma"}};
// jn = JSON.stringify(obj);
// console.log(typeof obj);
// console.log(typeof jn);
// console.log(obj);
// console.log(jn);
// jnPar = JSON.parse(`{"name":"Surya","length":1,"first":{"firstName":"Ashish"},"Last":{"LastName":"Sharma"}}`)
// console.log(jnPar);
// console.log(typeof jnPar);
