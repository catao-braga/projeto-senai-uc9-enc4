/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const carouselFrame = document.querySelector(\".carousel-frame\");\r\nconst carouselSlide = document.querySelector(\".carousel-slide\");\r\nconst carouselImages = getImagesPlusClones();\r\nconst prevBtn = document.querySelector(\".carousel-prev\");\r\nconst nextBtn = document.querySelector(\".carousel-next\");\r\nconst navDots = Array.from(document.querySelectorAll(\".carousel-dots li\"));\r\n\r\nlet imageCounter = 1;\r\n\r\nfunction getImagesPlusClones() {\r\n    let images = document.querySelectorAll(\".carousel-slide img\");\r\n\r\n    const firstClone = images[0].cloneNode();\r\n    const lastClone = images[images.length - 1].cloneNode();\r\n\r\n    firstClone.className = \"first-clone\";\r\n    lastClone.className = \"last-clone\";\r\n\r\n    // we need clones to make an infinite loop effect\r\n    carouselSlide.append(firstClone);\r\n    carouselSlide.prepend(lastClone);\r\n\r\n    // must reassign images to include the newly cloned images\r\n    images = document.querySelectorAll(\".carousel-slide img\");\r\n\r\n    return images;\r\n}\r\n\r\nfunction initializeNavDots() {\r\n    if (navDots.length) navDots[0].classList.add(\"active-dot\");\r\n}\r\n\r\nfunction initializeCarousel() {\r\n    carouselSlide.style.transform = \"translateX(-100%)\";\r\n}\r\n\r\nfunction slideForward() {\r\n    // first limit counter to prevent fast-change bugs\r\n    if (imageCounter >= carouselImages.length - 1) return;\r\n    carouselSlide.style.transition = \"transform 400ms\";\r\n    imageCounter++;\r\n    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;\r\n}\r\n\r\nfunction slideBack() {\r\n    // first limit counter to prevent fast-change bugs\r\n    if (imageCounter <= 0) return;\r\n    carouselSlide.style.transition = \"transform 400ms\";\r\n    imageCounter--;\r\n    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;\r\n}\r\n\r\nfunction makeLoop() {\r\n    // instantly move from clones to originals to produce 'infinite-loop' effect\r\n    if (carouselImages[imageCounter].classList.contains(\"last-clone\")) {\r\n        carouselSlide.style.transition = \"none\";\r\n        imageCounter = carouselImages.length - 2;\r\n        carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;\r\n    }\r\n\r\n    if (carouselImages[imageCounter].classList.contains(\"first-clone\")) {\r\n        carouselSlide.style.transition = \"none\";\r\n        imageCounter = carouselImages.length - imageCounter;\r\n        carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;\r\n    }\r\n}\r\n\r\nfunction goToImage(e) {\r\n    carouselSlide.style.transition = \"transform 400ms\";\r\n    imageCounter = 1 + navDots.indexOf(e.target);\r\n    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;\r\n}\r\n\r\nfunction highlightCurrentDot() {\r\n    navDots.forEach((dot) => {\r\n        if (navDots.indexOf(dot) === imageCounter - 1) {\r\n            dot.classList.add(\"active-dot\");\r\n        } else {\r\n            dot.classList.remove(\"active-dot\");\r\n        }\r\n    });\r\n}\r\n\r\nfunction addBtnListeners() {\r\n    nextBtn.addEventListener(\"click\", slideForward);\r\n    prevBtn.addEventListener(\"click\", slideBack);\r\n}\r\n\r\nfunction addNavDotListeners() {\r\n    navDots.forEach((dot) => {\r\n        dot.addEventListener(\"click\", goToImage);\r\n    });\r\n}\r\n\r\nfunction addTransitionListener() {\r\n    carouselSlide.addEventListener(\"transitionend\", () => {\r\n        makeLoop();\r\n        highlightCurrentDot();\r\n    });\r\n}\r\n\r\nfunction autoAdvance() {\r\n    let play = setInterval(slideForward, 5000);\r\n\r\n    carouselFrame.addEventListener(\"mouseover\", () => {\r\n        clearInterval(play); // pause when mouse enters carousel\r\n    });\r\n\r\n    carouselFrame.addEventListener(\"mouseout\", () => {\r\n        play = setInterval(slideForward, 5000); // resume when mouse leaves carousel\r\n    });\r\n\r\n    document.addEventListener(\"visibilitychange\", () => {\r\n        if (document.hidden) {\r\n            clearInterval(play); // pause when user leaves page\r\n        } else {\r\n            play = setInterval(slideForward, 5000); // resume when user returns to page\r\n        }\r\n    });\r\n}\r\n\r\nfunction buildCarousel() {\r\n    initializeCarousel();\r\n    initializeNavDots();\r\n    addNavDotListeners();\r\n    addBtnListeners();\r\n    addTransitionListener();\r\n    autoAdvance();\r\n}\r\n\r\nbuildCarousel();\r\n\n\n//# sourceURL=webpack://projeto-senai-uc9-enc4/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;