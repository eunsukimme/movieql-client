import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import Movie  from './Movie';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-content: center;
`;

const Home = () => {

    window.onscroll = ()=>{
        console.log('current scroll: ', window.scrollY);
    }
    
    return(
<Container>
    <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
            if(loading) return 'loading...';
            if(error) return 'something wrong!';
            return data.movies.map((movie) => {
            return <Movie
                id={movie.id}
                key={movie.id}
                title={movie.title}
                rating={movie.rating}
                poster={movie.medium_cover_image}
            />});
        }}
    </Query>
</Container>)
}
export default Home;
