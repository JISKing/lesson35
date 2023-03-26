fetch("http://127.0.0.1:5500/Part1/home-work-data.json")
  .then((response) => response.json())
  .then((data) => showAdminName(data))
  .catch((error) => console.error(error));

function showAdminName(data) {
  for (let key in data) {
    if (data[key].isAdmin == true) {
      console.log(data[key].name);
    }
  }
}

//я так зрозумів що без Live Server неможливо отримати данні з JSON