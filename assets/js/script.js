
//  封装事件监听
const addEventOnElements = function (element, eventType, callback) {
  for (let i = 0, len = element.length; i < len; i++) {
    element[i].addEventListener(eventType, callback)
  }
}

const navbar = document.querySelector('[data-navbar]')
const navToggler = document.querySelector('[data-nav-toggler]')
const navLinks = document.querySelectorAll('[data-nav-link]')

const toggleNav = function(){
  // 给navbar添加active
  navbar.classList.toggle('active')
  // 给自己添加active  菜单按钮
  this.classList.toggle('active')
}

//点击菜单按钮弹出列表
navToggler.addEventListener("click",toggleNav)

const navClose=function(){
  navbar.classList.remove('active')
  navToggler.classList.remove('active')
}
// 点击navbar关闭弹窗
addEventOnElements(navLinks,"click",navClose)


// HEader 和返回顶部
const header = document.querySelector('[data-header]')
const backtopbtn = document.querySelector('[data-back-top-btn]')
const activeEl = function(){

  if(window.scrollY >100){
    header.classList.add('active')
    backtopbtn.classList.add('active')
  }else{
    header.classList.remove('active')
    backtopbtn.classList.remove('active')
  }
}

window.addEventListener("scroll",activeEl)


// BUTTON
const buttons = document.querySelectorAll('[data-btn]')

const buttonHoverRipple = function(e){
  console.log(e);
  this.style.setProperty("--top",`${e.offsetY}px`)
  this.style.setProperty("--left",`${e.offsetX}px`)
}

addEventOnElements(buttons,"mousemove",buttonHoverRipple)

// 滚动加载的效果


const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

// 让鼠标滑动的时候有光圈包围

/**
 * Custom cursor
 */

 const cursor = document.querySelector("[data-cursor]");
 const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];
 
 const cursorMove = function (event) {
   cursor.style.top = `${event.clientY}px`;
   cursor.style.left = `${event.clientX}px`;
 }
 
 window.addEventListener("mousemove", cursorMove);
 
 addEventOnElements(hoverElements, "mouseover", function () {
   cursor.classList.add("hovered");
 });
 
 addEventOnElements(hoverElements, "mouseout", function () {
   cursor.classList.remove("hovered");
 });