import { fieldsConflictMessage } from "graphql/validation/rules/OverlappingFieldsCanBeMerged";
import { fetch } from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json"

export const getMovies = (limit, rating) => {
	fetch(`${API_URL}?limit=${limit}&rating=${rating}`)
	.then(res => res.json())
	.then(json => json.data.movies);
}

let movies = [{
		id: 1,
		name: "암수살인",
		score: 80
	},
	{
		id: 2,
		name: "명당",
		score: 75
	},
	{
		id: 3,
		name: "협상",
		score: 50
	},
	{
		id: 4,
		name: "빽 투더 퓨처",
		score: 99
	}
];

export const getMovies = () => movies;

export const getById = id => {
	const filteredMovies = movies.filter(movie => movie.id === id);
	return filteredMovies[0];
}

export const deleteMovie = id => {
	const cleanedMovies = movies.filter(movie => movie.id !== id);
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true;
	} else {
		return false;
	}
}

export const addMovie = (name, score) => {
	const newMovie = {
		id: movies.length + 1,
		name: name,
		score: score
	};
	movies.push(newMovie);
	return newMovie;
}