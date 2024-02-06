"use strict";
window.onscroll = function () { scrollFunction(); };
const navbarContainer = document.getElementById("navbar-container");
const smallnavOpenButton = document.getElementById("navsmall-button");
const smallnavContainer = document.getElementById("navsmall-bar");
const smallnavCloseButton = document.getElementById("navsmall-close");
const smallnavLinks = document.getElementsByClassName("navsmall-link");
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbarContainer.style.top = "0";
    }
    else {
        navbarContainer.style.top = "-100px";
    }
}
smallnavOpenButton.onclick = function () { openSmallNav(); };
function openSmallNav() {
    smallnavContainer.style.right = "0px";
}
smallnavCloseButton.onclick = function () { closeSmallNav(); };
function closeSmallNav() {
    smallnavContainer.style.right = "-350px";
}
for (let i = 0; i < smallnavLinks.length; i++) {
    let link = smallnavLinks[i];
    link.onclick = function () { closeSmallNav(); };
}
