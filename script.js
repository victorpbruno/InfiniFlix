const submit = document.querySelector(".form-submit")

// funçao que irá retorna os dados da API
async function fetchMovies(url) {
    //Realizando a requisição
    const res = await fetch(url);
    //Conventendo os dados da resposta para json()
    const data = await res.json();
    //Retornando os dados da requisição
    return data;
}

// Função que irá ser executada quando o user clicar em submit
async function buscarFilmes(e){
    e.preventDefault();
    const filme = document.querySelector(".form-input").value;
    const url = `https://www.omdbapi.com/?s=${filme}&apikey=e341acff`
    const data = await fetchMovies(url)
    console.log(data)

    //percorrendo a lista de filmes
    //Para cada filme iremos criar um <li>
    const ul = document.querySelector("#movies")
    let content = ""
    for (let i = 0; i < data.Search.length; i++) {
        content += `<li class="app-movies-all-card">`;
        content += `<figure class="app-movies-all-figure">`;
        content += `<img class="app-movies-all-thumb" src="${data.Search[i].Poster}" />`;
        content += `</figure>`;
        content += `<legend class="app-movies-all-legend">`;
        content += `<span class="app-movies-all-year">${data.Search[i].Year}</span>`;
        content += `<h2 class="app-movies-all-title">${data.Search[i].Title}</h2>`;
        content += `</legend>`;
        content += `</li>`
    }
    ul.innerHTML = content;
}

submit.addEventListener("click", buscarFilmes)