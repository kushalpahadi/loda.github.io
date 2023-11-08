"use strict";

//***************loading screen */
gsap.fromTo(
  ".loading--screen",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    display: "none",
    duration: 0.5,
    delay: 2,
  }
);

//
gsap.from(".navbar", {
  opacity: 0,
  duration: 1,
  y: -10,
});

gsap.from(".header--title", {
  opacity: 0,
  y: -15,
  duration: 0.7,
  stagger: 0.33,
  ease: "power2",
});

//**cursor */
const cursor = document.querySelector(".cursor");
const cursorblur = document.querySelector(".cursorblur");

document.addEventListener("pointermove", function (e) {
  gsap.to(cursor, {
    x: e.x + 10,
    y: e.y + 10,
    delay: 0.1,
  });
  gsap.to(cursorblur, {
    x: e.x - cursorblur.getBoundingClientRect().height / 2,
    y: e.y - cursorblur.getBoundingClientRect().height / 2,
  });
});

//open and close toggle function

const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");

const menu = document.querySelector(".menu");

const opentl = gsap.timeline();

btnOpen.addEventListener("click", function () {
  gsap.to(menu, {
    height: "100vh",
    duration: 1.5,
    background:
      "linear-gradient(180deg, rgba(12,14,45,1) 5%, rgba(23,28,150,1) 61%)",
    ease: "power4",
  });

  gsap.fromTo(
    ".menu__links",
    {
      opacity: 0,
      y: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
    }
  );

  gsap.from(".menu__logo", {
    delay: 0.6,
    opacity: 0,
    duration: 0.2,
  });

  gsap.to(cursor, {
    zIndex: "500",
    scale: 0.7,
    mixBlendMode: "difference",
  });
});

const closetl = gsap.timeline();

btnClose.addEventListener("click", function () {
  closetl.to(menu, {
    height: "0%",
    duration: 1,
    background: "black",
    ease: "power4",
    delay: 0.2,
  });
  gsap.to(".menu__links", {
    opacity: 0,
    y: 0,
    duration: 0.3,
    stagger: 0.1,
  });

  gsap.to(cursor, {
    zIndex: "100",
    scale: 1,
    mixBlendMode: "normal",
  });

  gsap.to(".dropdown__contents", {
    height: "0px",
    opacity: 0,
    duration: 1,
  });
});

// dropdown hover

const dropper = document.querySelector(".dropper");
const hidders = document.querySelectorAll(".hidder");

dropper.addEventListener("pointerenter", function () {
  gsap.to(".dropdown__contents", {
    height: "40vh",
    opacity: 1,
    duration: 1,
  });
});

hidders.forEach(function (hidder) {
  hidder.addEventListener("pointerenter", function () {
    gsap.to(".dropdown__contents", {
      height: "0px",
      opacity: 0,
      duration: 1,
    });
  });
});
