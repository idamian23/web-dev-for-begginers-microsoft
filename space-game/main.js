import "./style.scss";
import * as $ from "jquery";

//SWIPER
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
//ANIMATION
import { gsap } from "gsap";

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    autoplay: {
        delay: 5000,
    },
    effect: "flip",
    flipEffect: {
        slideShadows: false,
    },
    slidesPerView: 1,
});

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.Event;

    if (e.keyCode == "38") console.log("up");
    if (e.keyCode == "40") console.log("down");
    if (e.keyCode == "37") console.log("left");
    if (e.keyCode == "39") console.log("right");
}

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 200, 200);
