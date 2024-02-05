window.onscroll = function() {scrollFunction()};

const navbarContainer: HTMLElement = document.getElementById("navbar-container")!;

const smallnavOpenButton: HTMLElement = document.getElementById("navsmall-button")!;

const smallnavContainer: HTMLElement = document.getElementById("navsmall-bar")!;

const smallnavCloseButton: HTMLElement = document.getElementById("navsmall-close")!;

const smallnavLinks: HTMLCollectionOf<Element> = document.getElementsByClassName("navsmall-link");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbarContainer.style.top = "0";
  } else {
    navbarContainer.style.top = "-100px";
  }
}

smallnavOpenButton.onclick = function() {openSmallNav();}

function openSmallNav(){
    smallnavContainer.style.right = "0px";
}

smallnavCloseButton.onclick = function () {closeSmallNav();}

function closeSmallNav(){
    smallnavContainer.style.right = "-350px";
}

for(let i = 0; i < smallnavLinks.length; i++){
    let link:HTMLElement = <HTMLElement>smallnavLinks[i];
    link.onclick = function() {closeSmallNav()}
}




