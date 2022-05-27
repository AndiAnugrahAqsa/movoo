import Setup from "./api"

const getMovieList = async (typeList) => {
    Setup.createEntities(["movie", typeList]);
    const data = await Setup._crudMethod.getAll();
    return data.data.results;
}

const getMovieById = async(movie_id) => {
    if (!movie_id) {
        return{};
    }
    Setup.createEntities(["movie", movie_id])
    const data = await Setup._crudMethod.getAll();
    return data.data;
}

const getGenreList = async() => {
    Setup.createEntities(["genre", "movie", "list"]);
    const data = await Setup._crudMethod.getAll();
    return data.data.genres;
}

const movieAction = {
    getMovieList,
    getMovieById,
    getGenreList
}

export default movieAction;