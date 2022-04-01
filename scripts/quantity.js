/**
 * Esta es el Javascript que controla el incremento y decremento de las cantidad de los productos.
 */

((d) => {
    const $input = d.querySelector(".quantity .number");
    $input.value = 0;

    d.addEventListener("click", (e)=> {
        // console.log(e.target);
        if(e.target.matches(".quantity .button-down") || e.target.matches(".quantity .button-down svg") || e.target.matches(".quantity .button-down path")){
            // console.log("Se presiono el bton nde abajo")
            let count = $input.value;
            count--
            if(count < 0){
                $input.value = 0;
            }else {
                $input.value = count;
            }
        }

        if(e.target.matches(".quantity .button-up") || e.target.matches(".quantity .button-up svg") || e.target.matches(".quantity .button-up path")){
            // console.log("Se presiono el bton nde arriba")

            let count = $input.value;
            count++
            $input.value = count;
        }
    },);









})(document);