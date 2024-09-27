const key ='bb0d76db797b689c33eab58d0d2a4552'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`, 
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_ad`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
    // re
};


// console.log(Request);Z
export default requests