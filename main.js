const article = document.getElementById("article");

async function fetchPosts() {
  const response = await fetch(
    "https://fakestoreapi.com/products"
  );
  const data = await response.json();
  return data;
}

fetchPosts().then(data => {
    data.map((post) => {
        const article = document.createElement("article");
        article.innerHTML = `
          <h2>${post.title}</h2>
          <img src=${post.image}/>
          <div>
            <h3>${post.price}</h3>
          <p>${post.description}</p>
          </div>
        `;
        document.body.appendChild(article);
      });
      
});

