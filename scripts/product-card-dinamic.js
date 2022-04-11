(d => {
    const $productsContainer = d.querySelector(".products-container");
    const $templateProductCard = d.getElementById("template-product-card").content;
    const $fragment = d.createDocumentFragment();

    // Aca ira el codigo para obtener los datos que llenaran las procuts-cards.

    let response = [
        
        {
            code: "001",
            name: "Tinte Italy Colors",
            stock: "4",
            salePrice: "50",
            pathImage: "assets/productos/tintes-italy.jpg"
        },
        {
            code: "002",
            name: "Cera para cabello",
            stock: "2",
            salePrice: "75",
            pathImage: "assets/productos/tintes-italy.jpg"
        },
        {
            code: "002",
            name: "Cera para cabello",
            stock: "2",
            salePrice: "75",
            pathImage: "assets/productos/tintes-italy.jpg"
        },
        {
            code: "002",
            name: "Cera para cabello",
            stock: "2",
            salePrice: "75",
            pathImage: "assets/productos/tintes-italy.jpg"
        }
        
    ]; // respuesta de la consulta fetch.

    const cardContent = response;

    cardContent.forEach(el => {
        $templateProductCard.querySelector(".name-product").textContent = el.name;
        $templateProductCard.querySelector("img").setAttribute("src", el.pathImage);
        $templateProductCard.querySelector("img").setAttribute("alt", el.name);
        $templateProductCard.querySelector(".stock").textContent = `Stock: ${el.stock} und`;
        $templateProductCard.querySelector(".price").textContent = ` S/. ${el.salePrice.toLocaleString('es-ES', {style: 'currency',currency: 'INR', minimumFractionDigits: 2})}`;

        let $clone = d.importNode($templateProductCard, true);
        $fragment.appendChild($clone);
    });
    

    $productsContainer.appendChild($fragment);











})(document);