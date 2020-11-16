function getMenu() {
  console.log("called me");
  document.getElementById("nav").innerHTML +=
    '<nav class="navbar navbar-expand-lg navbar-light nav-color col-12"> <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> <div class="navbar-nav w-100"> <a class="navbar-brand" href="./jogos.html"> <img src="img/video-game.png" width="30" height="25" alt=""/> Jogos </a> <a class="navbar-brand" href="./AcervoJogos.html"> <img src="img/video-camera.png" width="30" height="25" alt=""/> Acervo de Jogos </a> <a class="navbar-brand" href="./images.html"> <img src="img/painting.png" width="30" height="25" alt=""/> Screenshots </a> <a class="navbar-brand" href="./document.html"> <img src="img/document.png" width="30" height="25" alt=""/> Generos </a> </div></div></nav>';
}
function hideSpinner() {
  document.getElementById("spiner").classList.add("invisible");
}
function showSpinner() {
  document.getElementById("spiner").classList.remove("invisible");
}

async function fetchData(url) {
  content = null;
  content = await fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err.message));
}
