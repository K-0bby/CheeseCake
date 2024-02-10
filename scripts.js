const menuBtn = document.querySelector('#menu-icon')
const dropDownmenu = document.querySelector('.dropdown_menu')

menuBtn.onclick = function () {
    dropDownmenu.classList.toggle('open')
}