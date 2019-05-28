if (!global.PARAMETR_BASKET_MODULE) {
    global.PARAMETR_BASKET_MODULE = true;

    $(function () {


        $(".parametr__button").click(function (event) {
            console.log(this)
            console.log('Open')
            // $(this).toggleClass('parametr__button_open')

            const $wrapper = $(this).parent().parent().parent().parent().parent()
            console.log($wrapper, $('.basket__box', $wrapper));
            $('.basket__box', $wrapper).toggleClass('basket__box_active')
            // console.log($(this).hasClass('basket__box_active'))

        });


    })
}