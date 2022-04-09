const requests = {
    fetchTrending: `/trending?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`,
};

export default requests;