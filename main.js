const article = document.getElementById("article");


const Data = [
  {
    id:0,
    name:"Arindam Roy"
  },
  {
    id:1,
    name:"Mrinal Sarkar"
  },
  {
    id:2,
    name:"Bhaskar Roy"
  },
  {
    id:3,
    name:"Bikram Roy"
  }
]


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

