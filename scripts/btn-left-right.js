// handler of the burger menu
((d) => {

    const $btnArrowLeft = d.querySelector(".btn-arrow-left");
    const $btnArrowRight = d.querySelector(".btn-arrow-right");
    const $carouselCards = d.querySelector(".services .carousel-cards");


    let count = 0;
    const arr = [1, 2, 3, 4, 5, 6]; // Numero de cards.

    $btnArrowLeft.addEventListener("click", e => {
        const mvLeft = 100;
        // console.log($btnArrowLeft);
        
        
        console.log(arr.length);
        if(count < ((arr.length - 1) * 100)) {
            count += mvLeft;
            let translate = `translateX(-${count}%)`;
            $carouselCards.style.setProperty("transform", translate);
            $carouselCards.style.transition = "transform .5s ease-in-out";
            
            $btnArrowRight.classList.remove("opacity");
            if(count === ((arr.length - 1) * 100)){
                $btnArrowLeft.classList.add("opacity");
            }
            // console.log($carouselCards.style);
        }

    });
    
    $btnArrowRight.addEventListener("click", e => {
        const mvRight = 100;
        // console.log($btnArrowRight);

        console.log(count);

        if(count >0 ){
            count -= mvRight;
            let translate = `translateX(-${count}%)`;
            $carouselCards.style.setProperty("transform", translate);
            $carouselCards.style.transition = "transform .5s ease-in-out";

            $btnArrowLeft.classList.remove("opacity");
            if(count === 0){
                $btnArrowRight.classList.add("opacity");
            }
        }
        



    });





















    // const $burgerMenu = d.querySelector(".header-burger-menu");
    // const $btnOpen = d.querySelector(".btn-open");
    // const $btnClose = d.querySelector(".btn-close");
    // const $panel = d.querySelector(".panel");

    // $burgerMenu.addEventListener("click", e => {
        
    //     $btnOpen.classList.toggle("none")
    //     $btnClose.classList.toggle("none")

    //     if($btnOpen.classList.contains("none")) {
    //         $panel.classList.add("active-panel");
    //     } else {
    //         $panel.classList.remove("active-panel");

    //     }
    // });

    // $panel.addEventListener("click", e => {
    //     if(e.target.classList.contains("link-section")){
    //         $panel.classList.remove("active-panel");
    //         $btnOpen.classList.toggle("none")
    //         $btnClose.classList.toggle("none")
    //     }
    //     // console.log(e.target);
    // });


})(document);