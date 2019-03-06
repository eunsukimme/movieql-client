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