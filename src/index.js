(async () => {
  console.log(await repos("JonnyRodriguez"));
})();

async function repos(user) {
  let url = `https://api.github.com/users/${user}/repos`;
  return await fetch(url).then((response) => response.json());
}
