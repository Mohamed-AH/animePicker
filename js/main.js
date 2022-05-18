fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
  .then((res) => res.json())
  .then((data) => {
    console.table(data);
    document.querySelector("button").addEventListener("click", getAnime);

    function getAnime() {
      let animeSNo = document.querySelector("input").value;
      Number(animeSNo);
      if (animeSNo >= 0 && animeSNo < 13) {
        document.querySelector("img").src = data.data[animeSNo].anime_img;

        document.querySelector("h1").innerText = data.data[animeSNo].anime_name;
      } else {
        console.log("sorry");
      }
    }
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
