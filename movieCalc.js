// Open the inspector to see the data
console.log(movies);

// Arrays to hold all movies by decade
let movies1930s = [];
let movies1940s = [];
let movies1950s = [];
let movies1960s = [];
let movies1970s = [];
let movies1980s = [];
let movies1990s = [];
let movies2000s = [];
let movies2010s = [];

// loop through the movie array
for (let i = 0; i < movies.length; i++)
{
    // get the current movie from the array
    let currentMovie = movies[i];

    // use a condtional if/else to filter our proper array using the 'year' property
    if (currentMovie.year < 1940)
        movies1930s.push(currentMovie);
    else if (currentMovie.year < 1950)
        movies1940s.push(currentMovie);
    else if (currentMovie.year < 1960)
        movies1950s.push(currentMovie);
    else if (currentMovie.year < 1970)
        movies1960s.push(currentMovie);
    else if (currentMovie.year < 1980)
        movies1970s.push(currentMovie);
    else if (currentMovie.year < 1990)
        movies1980s.push(currentMovie);
    else if (currentMovie.year < 2000)
        movies1990s.push(currentMovie);
    else if (currentMovie.year < 2010)
        movies2000s.push(currentMovie);
    else
        movies2010s.push(currentMovie);
}

// display results
console.log(`# of 1930's movies: ${movies1930s.length}`)
console.log(`# of 1940's movies: ${movies1940s.length}`)
console.log(`# of 1950's movies: ${movies1950s.length}`)
console.log(`# of 1960's movies: ${movies1960s.length}`)
console.log(`# of 1970's movies: ${movies1970s.length}`)
console.log(`# of 1980's movies: ${movies1980s.length}`)
console.log(`# of 1990's movies: ${movies1990s.length}`)
console.log(`# of 2000's movies: ${movies2000s.length}`)
console.log(`# of 2010's movies: ${movies2010s.length}`)