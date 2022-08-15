const article = document.getElementById("article");

async function fetchPosts() {
  const response = await fetch(
    "https://62fa2c4dffd7197707e6e60f.mockapi.io/posts"
  );
  const data = await response.json();
  return data;
}

fetchPosts().then(data => {
    data.map((post) => {
        const article = document.createElement("article");
        article.innerHTML = `
          <img src=${post.image}/>
          <h2>${post.title}</h2>
          `;
        document.body.appendChild(article);
      });
      
});

