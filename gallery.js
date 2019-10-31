// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


//////////////////////////////////////////////
//get img list (class name of container in which you want child images clickable)
var imgList = document.getElementsByClassName("column");

window.onload = function () {
    updateImgList();
}

 function updateImgList () {
    for (i=0; i < imgList.length; i++){
        listHolder = imgList[i];
        console.log(i);
        for(j=0; j < listHolder.children.length; j++){
            childHolder = listHolder.children[j];
            let imgSrc = childHolder.src;
            childHolder.onclick = function () {
                openModal(imgSrc);
            }
            console.log(j + "sub");
        }
    }
}  

/* var i = 0;
function updateImgList () {
    for (;imgList[i];){
        listHolder = imgList[i];
        listHolder.style.opacity='0.8';
        console.log(i);
        i++;
        for(j=0; j < listHolder.children.length; j++){
            childHolder = listHolder.children[j];
            childHolder.style.opacity='0.1';
            console.log(j + "sub");
        }
    }
} */


/* event listener for main section, if element clicked is an image, open modal with img src = to that of clicked img */
/* document.getElementById("photos").onclick = function () {
    var imgSrc;
    openModal(imgSrc);
} */

// When the user clicks the button, open the modal 
function openModal(imgSrc){
  modal.style.display = "block";
  document.getElementById("modalImg").src=imgSrc;
}

/////////////////////////////////////////////

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