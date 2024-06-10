let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "p3") {
            event.target.setAttribute("src", "assets/image/natio2.jpeg");
            return;
        } else if (event.target.id === "p5") {
            event.target.setAttribute("src", "assets/image/jinan2.jpeg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "p3") {
            event.target.setAttribute("src", "assets/image/natio.jpeg");
            return;
        }
        if (event.target.id === "p5") {
            event.target.setAttribute("src", "assets/image/jinan.jpeg");
            return;
        }
    });
}