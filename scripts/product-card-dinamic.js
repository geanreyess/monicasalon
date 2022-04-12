function quantityMultiple() {
    const d = document;
    const $inputList = d.querySelectorAll(".product-card");
    
    $inputList.forEach(el => {
        let $stock = Number(el.querySelector(".stock").getAttribute("data-stock"));
        // console.log($stock);
        let $element = el.querySelector(".quantity .number");
        $element.value = 0;
        // console.log($element);


        el.addEventListener("click", e => {
            // console.log(e.target);
            if(e.target.matches(".quantity .button-down") || e.target.matches(".quantity .button-down svg") || e.target.matches(".quantity .button-down path")){
                // console.log("Se presiono el bton nde abajo")
                let count = $element.value;
                count--
                if(count < 0){
                    $element.value = 0;
                }else {
                    $element.value = count;
                }
            }

            if(e.target.matches(".quantity .button-up") || e.target.matches(".quantity .button-up svg") || e.target.matches(".quantity .button-up path")){
                // console.log("Se presiono el bton nde arriba")
    
                let count = $element.value;
                // console.log(count, $stock);
                if(count < $stock){
                    
                    count++
                    $element.value = count;
                    
                }else {
                    // console.log(count);
                    $element.value = count;
                }
                
                
                
            }


        });

    });
}

(d => {
    const $productsContainer = d.querySelector(".products-container");
    const $templateProductCard = d.getElementById("template-product-card").content;
    const $fragment = d.createDocumentFragment();

    // Aca ira el codigo para obtener los datos que llenaran las procuts-cards.

    

    fetch("../db/productos.json")
        .then(res => {
            // console.log(res);
            // console.log(res.json());
            return res.ok ? res.json(): Promise.reject(res);
        })
        .then(json => {
            
            const cardContent = json;
           

            // console.log(cardContent);

            cardContent.forEach(el => {
                $templateProductCard.querySelector(".name-product").textContent = el.name;
                $templateProductCard.querySelector("img").setAttribute("src", el.pathImage);
                $templateProductCard.querySelector("img").setAttribute("alt", el.name);
                $templateProductCard.querySelector(".stock").textContent = `Stock: ${el.stock} und`;
                $templateProductCard.querySelector(".stock").setAttribute("data-stock", el.stock);
                $templateProductCard.querySelector(".price").textContent = ` S/. ${el.salePrice}`;

                let $clone = d.importNode($templateProductCard, true);
                $fragment.appendChild($clone);
            });
            

            $productsContainer.appendChild($fragment);

            // asigancion de la quantity multiple;
            quantityMultiple();
        
            
        })
        .catch(err => {
            // console.log(err);
            let message = err.statusText || "Productos no disponibles";
            // let message = "Productos no disponibles";
            $productsContainer.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            // console.log("Esto se ejecutara independientemente del resultado de la Promesa Fetch");
        })
        

})(document);