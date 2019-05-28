if (!global.PARAMETR_MODULE) {
    global.PARAMETR_MODULE = true;

    $(function () {
        //открытие списка 
        $(".parametr__button").click(function (event) {
            console.log(this)
            console.log('Open')

            // event.preventDefault();
            // event.stopPropagation();
            // console.log($(event.target).parent())
            $(this).toggleClass('parametr__button_open')
            $('.other-parametrs__view', $(this).parent().parent().parent().parent()).toggleClass('other-parametrs__view_active')
            // console.log($(this).hasClass('parametr__button_open'))

        });

    })
}