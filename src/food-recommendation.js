function getCocktail() {
    const response = fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
    .then(response => response.json())
    .then(data => console.log(data))
    return response
}


function display(input) {
    let para = document.createElement("p");
    para.innerHTML = `${input}`;
    document.querySelector("body").appendChild(para);
}

display(getCocktail())