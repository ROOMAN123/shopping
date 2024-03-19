const catalog = [  { id: 1, name: 'Product 1', price: 20 },
                   { id: 2, name: 'Product 2', price: 30 },
                   { id: 3, name: 'Product 3', price: 25 },
                   { id: 4, name: 'Product 4', price: 35 },
                ];
// Function to load the catalog
function loadCatalog() {
      const catalogContainer = document.getElementById('content');
      catalogContainer.innerHTML = '<h2>Catalog</h2>';
      catalog.forEach(product => {
                          const productCard = document.createElement('div');
                          productCard.classList.add('product-card');
                          productCard.innerHTML = `<h3>${product.name}</h3>
                                                   <p>$${product.price}</p>
                                                   <button onclick="addToCart(${product.id})">Add to Cart</button>`;
                          catalogContainer.appendChild(productCard);
      });
}

function validateRegistration() {
      const username = document.getElementById('user').value;
      const password = document.getElementById('pass').value;
      const mobile = document.getElementById('mobile').value;
      const city = document.getElementById('city').value;
      if (username.trim() === '' || password.trim() === '' || mobile.trim() === '' || city.trim() === '') {
      alert('Please enter all the detaills and submit your form');
      return false;
      }
      else{
      alert("Registration succesfull")
      window.location.href="login.html"
      }
     }
     // Function to validate login form
function validateLogin() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    if (username.trim() === '' || password.trim() === ''){
        alert('Please enter both username and password.');
        return false;
        }
        else{
        alert('welcome to Shopping Press ok to Continue your shopping');
        window.location.href="home.html"
        }
     }

// Function to add a product to the cart
function addToCart(productId) {
// Implement cart functionality here
console.log(`Product ${productId} added to cart`);
}
// Initial load
loadCatalog();
function lo(){
    window.location.href="login.html"
}
function re(){
    window.location.href="register.html"
}