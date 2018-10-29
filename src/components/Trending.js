import React, {Component} from 'react';
import axios from 'axios';

class Trending extends Component {
    constructor() {
        super()

        this.state = {
            movies: []
            
        }
    }

    componentDidMount = () => {
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=76d7b27b5dfcc547a04ba766e18e963d').then(response => {
            // console.log('TMDB', response);
            var ten = response.data.results
            var items = ten.splice(0,10);
            this.setState({
                movies: items
            });
        });
    }

    render() {
        // console.log(this.state.movies)
        return (
            <div className="space">
                <h1>Trending This Week</h1>
                {
                    this.state.movies.map(update => {
                        return (
                            <div>
                            {/* <img src={`https://image.tmdb.org/t/p/w1280${update.poster_path}`} alt="Movie"/> */}
                            <div>{update.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Trending