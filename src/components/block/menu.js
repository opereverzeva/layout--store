$(() => {
    $(".menu__item").click(() => {
        // event.stopPropagation()
        console.log('click')
        $(this).toggleClass('menu__item_active');
        $(this).next(".menu__open-section").toggleClass("menu__open-section_active")


        // return false
    })


})