((d)=> {
    const $reservation = d.querySelector(".none-reservation");

    setTimeout(() => {
        $reservation.classList.remove("none-reservation");
    }, 60000);

})(document);