import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        movies(limit: 20, rating: 7){
            title
            rating
            summary
        }
    }
`;