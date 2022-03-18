// handler of the burger menu
((d) => {
    const $burgerMenu = d.querySelector(".header-burger-menu");
    const $btnOpen = d.querySelector(".btn-open");
    const $btnClose = d.querySelector(".btn-close");
    const $panel = d.querySelector(".panel");

    $burgerMenu.addEventListener("click", e => {
        
        $btnOpen.classList.toggle("none")
        $btnClose.classList.toggle("none")

        if($btnOpen.classList.contains("none")) {
            $panel.classList.add("active-panel");
        } else {
            $panel.classList.remove("active-panel");

        }
    });

    $panel.addEventListener("click", e => {
        if(e.target.classList.contains("link-section")){
            $panel.classList.remove("active-panel");
            $btnOpen.classList.toggle("none")
            $btnClose.classList.toggle("none")
        }
        // console.log(e.target);
    });


})(document);