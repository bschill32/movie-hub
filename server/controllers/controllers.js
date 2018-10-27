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
    
}