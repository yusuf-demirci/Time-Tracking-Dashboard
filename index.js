
fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {

        $(".time-info").click(function () {
            $(".time-info").removeClass("selected");
            $(this).addClass("selected");

            let time = this.innerText.toLowerCase();
            let recentTime;

            if (time === "daily") recentTime = "Yesterday";
            else if (time === "weekly") recentTime = "Last Week";
            else recentTime = "Last Month";

            data.forEach(card => {
                $(`.${card.title} .hours`).fadeOut(300, function () {
                    $(this).text(card.timeframes[time]["current"] + "hrs").fadeIn(300);
                })

                $(`.${card.title} .recent`).fadeOut(300, function () {
                    $(this).text(recentTime + " - " + card.timeframes[time]["previous"] + "hrs").fadeIn(300);
                })
            })
        });
    });
