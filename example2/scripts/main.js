/**
 * Created by Mohamed on 4/1/2017.
 */
$(document).ready(function() {
    $(".slider .slide_show").slick({
        infinite: false,
        slidesToShow: 1,
        dots: true,
        prevArrow: "<i class='fa fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fa fa-chevron-right slick-next'></i>",
    });

    $(".checkbox input[type='checkbox']").on('change', function () {
        if ($(this).is(":checked")) {
            $(this).parents(".checkbox").addClass("checked");
        }
        else {
            $(this).parents(".checkbox").removeClass("checked");
        }
    });
});
