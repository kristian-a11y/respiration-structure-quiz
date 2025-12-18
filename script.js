const params = new URLSearchParams(window.location.search);
const pathwayName = params.get("name");

const title = document.getElementById("pathway-title");

if (title && pathwayName) {
  title.textContent = pathwayName;
}

function goTo(type) {
  window.location.href =
    `content.html?name=${encodeURIComponent(pathwayName)}&type=${type}`;
}
