$(".navbar__burger").click(() => {
    $('.navbar__box_burger').addClass('navbar__box_hidden');
    $('.navbar__open-menu').addClass('navbar__open-menu_active')
})

// закрытие бургер меню
function closeBurgerMenu() {
    $('.navbar__box_burger.navbar__box_hidden').removeClass('navbar__box_hidden');
    $('.navbar__open-menu.navbar__open-menu_active').removeClass('navbar__open-menu_active')
}

$('.burger-menu__close').click((event) => {
    event.stopPropagation() //запрет всплытия событий
    closeBurgerMenu()
})


$(".burger-menu__list").on('click', (event) => {
    // event.preventDefault()
    event.stopPropagation()
    closeBurgerMenu()
})