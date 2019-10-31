function menu(){
    var x = document.getElementById('nav-links');
    var y = document.getElementById('navBurger');
    var z = document.getElementById('title');
    var b = document.getElementsByTagName('body');
    if (x.className === "nav-links") {
            x.className += " responsive";
            y.style.color="white";
//            z.style.color="white";
           // window.addEventListener('scroll', noScroll);
           b[0].style.overflow='hidden';
           b[0].style.height='100%';
    }
    else {
            x.className = "nav-links";
            y.style.color="black";
//            z.style.color="black";
           // window.removeEventListener('scroll', noScroll);
           b[0].style.overflow='auto';
           b[0].style.height='auto';
    }
}

function noScroll(){
    window.scrollTo(0,0);
}
