
// slide show 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//products

fetch('data.json')
.then(function (response) {
	return response.json();
})
.then(function (data) {
	appendData(data);
})
.catch(function (err) {
	console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("myData");
for (var i = 0; i < data.length; i++) {

	 var div = document.createElement("div");
	 div.innerHTML = '<img class="imageProd" src="'+data[i].image+'">' 
	 +'<p class="Prodname">Name: <b>' + data[i].name + '</b>'
	 +'<br>Price: <b>P' + data[i].price + '</b></p>'
	 +'<a href="#'+ data[i].id +'" class="button-right">Place Order </a>';
	mainContainer.appendChild(div);
}
}
// 
// function showTable(){
// 	fetch("data.json")
// 	  .then(response => response.json())
// 	  .then(data => createTable(data));
//   }
	  
//   function createTable(data) {
//   var table = "<table border=1>";
//   // add a row for name and marks
//   table += `<tr>
// 			  <th>Name</th>
// 			  <th colspan="4">Marks</th>
// 			</tr>`;
//   // now add another row to show subject
//   table += `<tr>
// 			  <th></th>
// 			  <th>Math</th>
// 			  <th>English</th>
// 			  <th>Chemistry</th>
// 			  <th>Physics</th>
// 			</tr>`;
//   // now loop through students
//   // show their name and marks
//   var tr = "";
//   for(let i = 0; i < data.product.length; i++) {
// 	tr += "<tr>";
// 	tr += `<td>${data.product[i].name}</td>`;
// 	for (var key in data.product[i].id) {
// 	  tr += `<td>${data.product[i].id[key]}</td>`;
// 	}
// 	tr += "</tr>"
//   }
//   table += tr + "</table>";
  
// 	// append table to body
// 	document.body.innerHTML += table;
//   }

//auto slideshow
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

