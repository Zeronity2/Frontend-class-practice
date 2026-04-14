let products = [];

fetch('products.json')
    .then(res => res.json())
    .then(data => {
        products = data;
        displayProducts(products);
    });

function displayProducts(items) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    items.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <h2>${p.name}</h2>
                <p>Category: ${p.category}</p>
                <p>Price: ₹${p.price}</p>
            </div>
        `;
    });
}

document.getElementById("search").addEventListener("input", filterProducts);
document.getElementById("category").addEventListener("change", filterProducts);
document.getElementById("price").addEventListener("change", filterProducts);

function filterProducts() {
    const search = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;

    let filtered = products.filter(p => {
        return (
            p.name.toLowerCase().includes(search) &&
            (category === "all" || p.category === category) &&
            (price === "all" ||
                (price === "low" && p.price < 500) ||
                (price === "high" && p.price >= 500))
        );
    });

    displayProducts(filtered);
}