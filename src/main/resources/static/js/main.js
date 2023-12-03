function allProductsList() {
  const apiUrl = "http://localhost:8080/products";
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
      }
      return response.json();
    })

    .then((data) => {
      const productsList = document.getElementById("productsList");

      data.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - R$ ${product.value.toFixed(
          2
        )}`;
        productsList.append(listItem);
      });
    })

    .catch((error) => {
      console.error("Erro ao buscar dados da API", error);
    });
}

function searchById() {
  let idProduct = document.getElementById('idProduct').value;
  const apiUrl = `http://localhost:8080/products/${idProduct}`;
  const Productdisplay = document.getElementById('productFindById');
  const inputId = document.getElementById('idProduct');

  fetch(apiUrl).then((response) => {
    if (!response.ok) {
      inputId.style.border = '2px solid red';
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      inputId.style.border = '';
    }
    return response.json();
  })

  .then(product => {
    console.log('Dados do produto:', product);
    const Product = document.createElement('h2');
    Product.textContent = `${product.name} - R$ ${product.value.toFixed(
      2
    )}`;
    Productdisplay.append(Product)
  })

  .catch(error => {
    console.error('Erro ao buscar dados do Produto:', error)
  });
}
