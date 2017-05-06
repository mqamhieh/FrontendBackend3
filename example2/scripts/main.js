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

    $(".best-sellers .items").slick({
        infinite: true,
        slidesToShow: 4,
        dots: false,
        prevArrow: "<i class='fa fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fa fa-chevron-right slick-next'></i>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".customers ul").slick({
        infinite: true,
        slidesToShow: 3,
        dots: false,
        prevArrow: "<i class='fa fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fa fa-chevron-right slick-next'></i>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".checkbox input[type='checkbox']").on('change', function () {
        if ($(this).is(":checked")) {
            $(this).parents(".checkbox").addClass("checked");
        }
        else {
            $(this).parents(".checkbox").removeClass("checked");
        }
    });

    $(".radiobutton input[type='radio']").on('change', function () {
        var name = $(this).attr("name");

        $("input[type='radio'][name='" + name + "'")
            .parents(".radiobutton")
            .removeClass("checked");

        $(this).parents(".radiobutton").addClass("checked");
    });

    $(".accordion .title").on("click", function () {
        var wasOpen = $(this).parents(".accordion").hasClass('open');
        $(".accordion.open .body").slideUp(300);
        $(".accordion.open").removeClass('open');

        if (wasOpen) {
            $(this).parents(".accordion").removeClass('open');
            $(this).parents(".accordion").find(".body").slideUp(300);
        }
        else {
            $(this).parents(".accordion").addClass('open');
            $(this).parents(".accordion").find(".body").slideDown(150);
        }

    });
});

var checkAll = function (event) {
    $(event.target)
        .parents(".block-section")
        .find("input[type='checkbox']:not(:checked)").click();
};