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

//CANVAS
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1024, 768);

const MONSTER_TOTAL = 5;
const MONSTER_WIDTH = MONSTER_TOTAL * 98;
const START_X = (canvas.width - MONSTER_WIDTH) / 2;
const STOP_X = START_X + MONSTER_WIDTH;

function loadAsset(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            // image loaded and ready to be used
            resolve(img);
        };
    });
}

async function run() {
    const heroImg = await loadAsset("./assets/img/player.png");
    const monsterImg = await loadAsset("./assets/img/enemyShip.png");

    ctx.drawImage(heroImg, canvas.width / 2 - 45, canvas.height - canvas.height / 4);

    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
            ctx.drawImage(monsterImg, x, y);
        }
    }
}

run();
