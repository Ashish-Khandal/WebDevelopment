//?   1.Variable
// console.log("Hello world");
// var firstName = "Ashish";
// var message = "Good morning";
// var seocndName = "Surya";
// var temp = `${message} ${firstName} and this is a nice name or ${seocndName} is also good name.`;
// console.log(temp);

//?   2.Simple Funcation
// function sum(a, b, c = 5) {
//   let x = a + b + c;
//   return x;
// }
// let returnSum = sum(2, 3, 5);
// let returnSum2 = sum(2, 1);
// console.log(returnSum);
// console.log(returnSum2);

//?   3.Alert
// alert("Please click this prompt.")

//?   4.Prompt
// prompt("Type your name.", "Surya");
//  let name1 = prompt("Type your name.", "Surya");
// console.log(name1)

//?   5.Prompt
// let deletePost = confirm("Warning!\nDo you want to delete this post.");
// console.log(deletePost);
// if (deletePost) {
//   console.log("Succesfully.");
// } else {
//   console.log("Not Delete your post.");
// }

//?   6.ForEach loop
// let Names = ["Ashish", "Surya", "Sudarshan", "Pandit", "Khandal"];
// Names.forEach(function fn(elements) {
//   console.log(elements);
// });

//?   7.ForOf loop
// let Names2 = ["Abc", "Xyz", "123", "999", "Khandal"];
// for (elements of Names2) {
//   console.log(elements);
// }

//?   8.For loop
// let Names3 = {
//   name: "Ashish",
//   salary: 10000,
//   course: "Mca",
// };
// for (key in Names3) {
//   console.log(`My ${key} is ${Names3[key]}`);
// }

//?   9.OnClick
function toggleHide() {
  let btn = document.getElementById("btn");
  let para = document.getElementById("para");
  if (para.style.display != "none") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
}
/* let para = document.getElementById("para");
para.addEventListener("mouseover", function run() {
  console.log("Inside");
});*/

/* para.addEventListener("mouseout", function run() {
  console.log("Outside");
}); */

//?   10.Time(setInterval)
/* function timeDisplay() {
  time = new Date();
  console.log(time);
  document.getElementById("time").innerHTML = time;
}
 setInterval(timeDisplay, 1000); */
//  or
/* setInterval(timeDisplay, 1000);
function timeDisplay() {
  time.innerHTML = new Date();
} */

//?   11.Date and time
/*  let dt = new Date();
 console.log(dt);
 let newDate = new Date(2023, 10, 19, 3, 12, 30);
 console.log(newDate);
 let year = newDate.getFullYear();
 console.log(year);
 let month = newDate.getMonth();
 console.log(month);
 let day = newDate.getDate();
 console.log(day);
 let hour = newDate.getHours();
 console.log(hour);

 newDate.setDate(20);
 newDate.setFullYear(2024);
 newDate.setMonth(11);
 console.log(newDate); */
