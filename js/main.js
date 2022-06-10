var containerEl = document.createElement('div')
containerEl.className = "container"
document.body.appendChild(containerEl)


function createRowEl(){
 let RowEl = document.createElement('div')
 RowEl.className = 'row g-3 mt-2 mb-2'
// containerEl.appendChild(moviesRow)
return RowEl
}

var selectRow = createRowEl()
containerEl.appendChild(selectRow)

var col1El = document.createElement('div')
col1El.className = 'col-3'
selectRow.appendChild(col1El)




let uniqueGenres = normalizeGenres(movies)
let genresSelect = createSelectEl(uniqueGenres)

// genresSelect.addEventListener('change',(event) => {
//     console.log(event.target.value)
//    let foundedMovies = movies.filter(movie => movie.genres == event.target.value)
//    renderMovies(foundedMovies,moviesRow)
// })
// col1El.appendChild(genresSelect )


function createSelectEl (arr){
    let selectEl = document.createElement('select')

    let optionEl = document.createElement('option')
        optionEl.textContent = "___genres___"
        optionEl.selected = true
        optionEl.disabled = true
        selectEl.appendChild(optionEl)


    arr.forEach(genres =>{
        let optionEl = document.createElement('option')
        optionEl.value = genres
        optionEl.textContent = genres
        selectEl.appendChild(optionEl)
    })

    return selectEl
}


var moviesRow = createRowEl()
containerEl.appendChild(moviesRow)
renderMovies(movies,moviesRow)



function renderMovies(movies,parentElement){
    parentElement.innerHTML = null
    movies.forEach(movie => {
        let moviesEl = createsSingleMovie(movie)
        parentElement.appendChild(moviesEl)

        
    });

}


function createsSingleMovie(movie){
    let colEL = document.createElement('div')
    colEL.className = 'col-4 col-md-2 col-lg-4'
    
    let btn = document.createElement('button')
    btn.textContent = "genres"

    // let btnTT = document.createElement('div')
    // btnTT.textContent = " "


    let movieEl = document.createElement('div')
   
    movieEl.className = 'p-1 border'

    let titleEl = document.createElement('div')
    titleEl.textContent = "TITLE______"+movie.title
    movieEl.appendChild(titleEl)

    let yearEl = document.createElement('div')
    yearEl.textContent = "YEAR______"+movie.year
    movieEl.appendChild(yearEl)

    btn.addEventListener('click',() => {
        let genreEl = document.createElement('div')
        genreEl.textContent = movie.genres 
        genreEl.className = 'p-1 border'
        movieEl.appendChild(genreEl)
})
    colEL.appendChild(btn)
    colEL.appendChild(movieEl)
    return colEL
}

