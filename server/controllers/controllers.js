let favorites = [
    {
        title: "Avatar",
        id: 1
    },
    {
        title: "Interstellar",
        id: 2
    },
    {
        title: "Inception",
        id: 3
    },
    {
        title: "Dunkirk",
        id: 4
    },
    {   
        title: "The Dark Knight",
        id: 5
    }
]

let id = 6

module.exports = {
    getFavorites: (req, res) => {
        res.status(200).send(favorites)
    },
    createFavorite: (req, res) => {
        const {title} = req.body
        let newFavorite = {
            title,
            id
        }
        id++
        favorites.push(newFavorite)
        res.status(200).send(favorites)
    },
    deleteFavorite: (req, res) => {
        const {id} = req.params
        let index = favorites.findIndex(fav => fav.id === Number(id))
        if(index !== -1) {
            favorites.splice(index, 1)
        }
        res.status(200).send(favorites)
    },
    updateFavorite: (req, res) => {
        const {id} = req.params
        const {title} = req.body
        let i = favorites.findIndex(fav => fav.id === +id)
        if(i !== -1) {
            favorites[i].title = title
        }
        res.status(200).send(favorites)
    }
}