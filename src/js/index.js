import createTicker from './Ticker'
import owlCarousel from './owl.carousel.min.js'


$(() => {

    //открытие модального окна на стартовой позиции
    $('.panel-filter-header__filter').click(function (event) {
        event.preventDefault();
        $('.w-hidden').removeClass('w-hidden')
        $('.type-window, .form-window, .price-window').addClass('w-hidden')
        $('.modal-window').addClass('modal-window_active')
        $('.hidden').addClass('hidden_active')
    });

    //закрытие модального окна
    $(".overlay, .modal-filter__close").click(function (event) {
        $('.modal-window').removeClass('modal-window_active')
        $('.hidden').removeClass('hidden_active')
    });

    //переход в фильтр по типу
    $(".modal-filter__link").click(function (event) {
        $('.start-window').addClass('w-hidden')
        $('.type-window').removeClass('w-hidden')
    });

    //возврат к общему окну фильтра
    $(".modal-filter__back").click(function (event) {
        $('.type-window').addClass('w-hidden')
        $('.start-window').removeClass('w-hidden')
    });

    //переход в фильтр по форме
    $("#form-filter").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('.start-window').addClass('w-hidden')
        $('.form-window').removeClass('w-hidden')

    });

    //возврат к общему окну фильтра
    $(".modal-filter__back").click(function (event) {
        $('.form-window').addClass('w-hidden')
        $('.start-window').removeClass('w-hidden')
    });


    //переход в фильтр по цене
    $("#price-filter").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('.start-window').addClass('w-hidden')
        $('.price-window').removeClass('w-hidden')

    });

    //возврат к общему окну фильтра
    $(".modal-filter__back").click(function (event) {
        $('.price-window').addClass('w-hidden')
        $('.start-window').removeClass('w-hidden')
    });




    //переключение позиции парогенератора .modal-filter__marker
    $(".modal-filter__turn").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('.modal-filter__marker').toggleClass('modal-filter__marker_on')
    });

    //добавление товара в корзину
    $('.main-parametr-goods__button, .card-add-goods__add').click(function (event) {
        // event.preventDefault();
        $('.modal-window').addClass('modal-window_active')
        $('.hidden').addClass('hidden_active')
    });

    //закрытие модального окна
    $(".overlay__modal-add-basket, .modal-add-basket__close").click(function (event) {
        $('.modal-window').removeClass('modal-window_active')
        $('.hidden').removeClass('hidden_active')
    });


    //закрытие модальное окно товара .sale-ok
    $(".overlay__sale-ok, .modal-sale-ok__close, .modal-sale-ok__button").click(function (event) {
        $('.overlay__sale-ok').addClass('overlay__sale-ok_hidden')
        $('.modal-sale-ok').addClass('modal-sale-ok_hidden')
        $('.hidden').removeClass('hidden_active')
    });

    //  ИЗМЕНЕНИЕ КОЛИЧЕСТВА ТОВАРА
    $('#minus').click(function () {
        var $output = $(this).parent().find('output');
        var t = count = parseInt($output.val())
        var count = parseInt($output.val()) - 1;
        count = count < 1 ? 1 : count;

        $output.val(count);
        $output.change();
        return false;
    });
    $('#plus').click(function () {
        var $output = $(this).parent().find('output');
        $output.val(parseInt($output.val()) + 1);
        console.log($output.val)
        $output.change();
        return false;
    });

})