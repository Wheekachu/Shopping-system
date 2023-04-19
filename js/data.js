
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
  addToCart(data);
})
.catch(function (err) {
	console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("myData");
for (var i = 0; i < data.length; i++) {

	 var div = document.createElement("div");
	 div.innerHTML = '<img class="imageProd" value="'+data[i].image+'" src="'+data[i].image+'">' 
	 +'<p class="Prodname" id="Prodname" value="'+data[i].name+'">Name: <b>' + data[i].name + '</b>'
	 +'<br>Price: <b>P' + data[i].price + '</b></p>'
   +'<a href="#'+ data[i].id +'" onclick="addToCart('+data[i].id+')" class="btn button-right">Place Order </a>'
	mainContainer.appendChild(div);
}
}

function addToCart(prod) {
  fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    getData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function getData(data) {
  var container = document.getElementById("modal-body");
  for(let i = 0; i<data.length; i++){
        if (data[i].id === prod){
          var table = document.createElement("table");
          table.innerHTML = '<tr><td><img style="width: 300px; height: 200px; border-radius: 2%;'
          +'box-shadow: 0 5px 10px #9c9999;" value="'+data[i].image+'" src="'+data[i].image+'"></td>' 
          +'<td><p value="'+data[i].name+'">Name: <b>' + data[i].name + '</b>'
          +'<br>Price: <b>P' + data[i].price + '</b></p></td></tr>'
         container.appendChild(table);
          console.log(data[i].name);
        }
    }
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

