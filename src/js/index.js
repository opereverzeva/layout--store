import createTicker from './Ticker'


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
})