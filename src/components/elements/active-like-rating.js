$(() => {

    //переключение нажатия на рейтинг .card-goods__star
    $(".card-goods__star").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('.card-goods__star').toggleClass('card-goods__star_active')
    });

    //переключение нажатия на лайк/добавление в избранное .card-goods__like
    $(".card-goods__like").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('.card-goods__like').toggleClass('card-goods__like_active')
    });

})