fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => response.json())
.then((movies) => {
    console.log(movies)
    let dropdown = document.querySelector(".dropdown");
    movies.forEach((movie) => {
        const option = document.createElement("option");
        option.value = movie.title;
        option.textContent = movie.title;
        dropdown.append(option);
    });
    
});