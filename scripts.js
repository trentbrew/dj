var input = document.getElementById("inputBox");
var button = document.getElementById("runButton");
var output = document.getElementById("outputBox");

function fetchSong() {
  console.log("finding song...");

  const query = input.value;
  console.log("request: ", query || "no query...");

  return fetch(`http://localhost:8095/v1/dj`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: query }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

async function run() {
  output.innerHTML = `<span style="width:100%;text-align:center;">thinking...<span>`;
  console.log("running...");
  const { song, description } = await fetchSong();
  console.log("song: ", song);
  output.innerHTML = `
    <a
      href="https://open.spotify.com/search/${encodeURIComponent(song)}}"
      target="_blank"
    >
      <h4>
        ${song}
      </h4>
    </a>
    <p>
      ${description}
    </p>
  `;
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") run();
});
