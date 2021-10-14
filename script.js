fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => response.json())
.then((movies) => {
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

    let form = document.querySelector("form");  

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let reviewDisplay = document.querySelector("ul");
        let pError = document.querySelector(".error")
        let list = document.createElement("li");
        let input = event.target.review.value;
        if(input.length === 0){
          pError.textContent = "Please share your thoughts on the movie ..."
        } else { (input.textContent === "")
            document.querySelectorAll(".error").forEach((error) => {
                error.remove()
            }) 
          list.innerHTML = `<strong>${dropdown.value}:</strong> ${input}`;
          reviewDisplay.append(list);
        };
        event.target.reset();
    });   
});