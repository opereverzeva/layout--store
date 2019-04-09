$(function () {

    //открытие списка 
    $(".parametr__button").click(function (event) {
        // event.preventDefault();
        // event.stopPropagation();
        console.log($(event.target).parent())
        $(this).addClass('parametr__button_open')
        $('.other-parametrs__view').addClass('other-parametrs__view_active')
        console.log($(this).hasClass('parametr__button_open'))

    });

    //закрытие списка 
    $(".parametr__button").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).removeClass('parametr__button_open')
        $('.other-parametrs__view').removeClass('other-parametrs__view_active')
    })


})