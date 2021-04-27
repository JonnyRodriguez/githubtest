repos();

function repos() {
  let url = "https://api.github.com/users/JonnyRodriguez/repos";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
