import React from 'react';
import { Query } from 'react-apollo';
import { DETAIL_PAGE } from './queries';
import Movie from './Movie';

const details = ({
    match: {
        params: { movieId }
    }
}) => {
    return <Query query={DETAIL_PAGE} variables={{ movieId: Number(movieId)}}>
        {({ loading, data, error }) => {
            if(loading) return 'loading...';
            if(error) return 'something wrong!';
            const {movie:{title, rating, description_intro}, suggestions} = data;
            console.log(title);
            console.log(rating);
            console.log(description_intro);
            console.log(suggestions);
            return <div></div>;
        }}
    </Query>
}

export default details;