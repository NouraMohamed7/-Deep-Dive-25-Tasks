let container = document.querySelector('.container');
let products = [];

async function getProduct() {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
}

async function getProducts() {
    products = await getProduct();
    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += `
          <div class="card">
            <div>
              <img src="${products[i].image}" />
            </div>

            <div class="details">
              <b>${products[i].title.split(" ").slice(0, 3).join(" ")}</b>
              <p>${products[i].description.split(" ").slice(0, 8).join(" ")}...</p>
              <div>
                <span>${products[i].price} $</span>
                <span>Rating: ${products[i].rating.rate}</span>
              </div>
              <button onclick="description(${i})">Show Details</button>
            </div>
          </div>
        `;
    }

    container.innerHTML = html;
}

function description(index) {
    const product = products[index];
    alert(`The description is: ${product.description}`);
}

getProducts(); 
