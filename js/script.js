'use strict'

// const getLink = document.querySelectorAll('a');
// console.log(getLink);
// getLink.forEach(function (item) {
//     item.addEventListener('click', function (event) {
//         event.preventDefault();
//     });
// });

const elementToggleFunc = (element) => {
    element.classList.toggle("_active")
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener('click', () => { elementToggleFunc(sidebar) });

