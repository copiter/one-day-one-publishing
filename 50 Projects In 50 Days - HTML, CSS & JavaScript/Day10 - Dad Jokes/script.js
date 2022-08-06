const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // async 필요 없음
  // fetch("https://icanhazdadjoke.com/", config)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     jokeEl.innerHTML = data.joke;
  //   });

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
