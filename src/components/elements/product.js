$(function () {

    //открытие списка 
    $(".product__like").click(function (event) {
        // event.preventDefault();
        // event.stopPropagation();
        $(this).toggleClass('product__like_active')

    });

})