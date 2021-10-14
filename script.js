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
    })
    let movieTitle = document.querySelector("#title");
    let year = document.querySelector("#year");
    let description = document.querySelector("#description");

    dropdown.addEventListener("change", (event) => {
        event.preventDefault();
        movies.forEach((movie) => {
            if(dropdown.value === movie.title){
                movieTitle.textContent = movie.title;
                year.textContent = movie.release_date;
                description.textContent = movie.description;
            }
        });
    });
});