(async () => {
  console.log(await content("data"));
})();

async function content(path, repo = "githubdb", owner = "JonnyRodriguez") {
  let url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  console.log(url);
  return await fetch(url).then((response) => response.json());
}
