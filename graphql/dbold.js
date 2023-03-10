// let movies = [
//     {
//         id:1,
//         name: "Мстители",
//         score: 10,
//     },
//     {
//         id:2,
//         name: "Готов к войне",
//         score: 4
//     },    
//     {
//         id: 3,
//         name: "Правда",
//         score: 8
//     },    
//     {
//         id:4,
//         name: "Ложь",
//         score: 1
//     }
// ];

// export const getMovies = () => movies;


// export const getBYId = (id) => {
//     return movies.find(person => person.id === id);
// }

// export const deleteMovie =(id) => {
//     const deleteMovies = movies.filter(movie => movie.id !== id)
//     if(movies.length > deleteMovies.length){
//         movies = deleteMovies
//         return true
//     }
//     else{
//         return false
//     }
// }


// export const addMovie = (name, score) => {
//     const newMovie = {
//         id:movies.length +1,
//         name,
//         score
//     }
//     movies.push(newMovie);
//     return newMovie
// }