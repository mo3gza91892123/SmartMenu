const url  = "https://dummyjson.com/products/";
fetch(url)
.then(function(respons){
    return respons.json();
})
.then(function (data) {
    // console.log(data.products);
    data.products.slice(0,6*6).forEach(prodact => {
        document.querySelector(".big").innerHTML += `
        <div class="product">
            <img src="${prodact.images[0]}">
            <h3>${prodact.title}</h3>
            <p>${(prodact.description.length > 60) ? prodact.description.slice(0,60)+"..." : prodact.description}</p>
            <h4 >${prodact.price} ج م</h4>
            </div>
            `;
        });
})
