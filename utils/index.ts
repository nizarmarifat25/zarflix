import axios from "axios";

export async function fetchMovie() {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        params: {
            api_key: 'cdfcd85e54eecbb860b818b0f1c8e70c'
        }
    };

    axios
        .request(options)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return []
        });

}