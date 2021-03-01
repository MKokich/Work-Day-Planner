$(document).ready(function () {
    $(".saveBtn").on("click", function () {

        var value = $(this).siblings(".text").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    function hourUpdate() {

        var currentHour = moment().hours();
    

        $(".text").each(function () {

            var hour = parseInt($(this).data("hour"));
            console.log(hour)


            if (hour > currentHour) {

                $(this).addClass("future")

            }
            else if (hour < currentHour) {

                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present")
            }
            else {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            var time = $(this).parent().attr("id");
            var task = localStorage.getItem(time)
            console.log(task)
            $(this).val(task)
        });

    }
    hourUpdate();
})
