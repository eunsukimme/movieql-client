import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        movies(limit: 40, rating: 8){
            id
            title
            rating
            genres
            medium_cover_image
            summary
        }
    }
`;

export const DETAIL_PAGE = gql`
query getMovieDetail($movieId: Int!)
{
    movie(id: $movieId){
        title
        rating
        genres
        language
        medium_cover_image
        description_intro
    }
    suggestions(id: $movieId){
        title
        rating
        medium_cover_image
    }
}`;