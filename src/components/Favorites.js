import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import Movies from './Movies';



class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favorites: [],
            userInput: ""
        }

    }
    
    componentDidMount = () => {
        axios.get('/api/favorites').then(response => {
            // let favorites = response.data
            this.setState({favorites: response.data})
            // console.log('favorites', response.data)
        })
    }

    handleInput = (e) => {
        this.setState({userInput: e.target.value})
        // console.log(this.state.userInput)
    }

    handleAddFavs = (e) => {
        axios.post('/api/favorites', {title: this.state.userInput}).then(response => {
            this.setState({
                favorites: response.data,
                userInput: ""
            })
        })
    }

    render() {
        // console.log('state',this.state)
        let favoritesList = this.state.favorites.map(fav => {
            return (
                // research props and how they work.
               <Movies title = {fav.title}/>
            )
        })
        // console.log('input', this.state.userInput)
        return (
            <div>
                <Header/>
                <input value={this.state.userInput} type='text'onChange={this.handleInput}/>
                <button onClick={this.handleAddFavs}>Add</button>
                {favoritesList}
            </div>
        );
    }
}

export default Favorites;