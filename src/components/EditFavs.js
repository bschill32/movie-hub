import React, {Component} from "react"

class EditFavs extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            edit: false
        }
    }

    componentDidMount() {
        this.setState({title: this.props.fav.title})
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    render() {
        console.log(this.state.edit)
        return (
            <div>
                {
                    this.state.edit ?
                    (
                        <div>
                            <input value={this.state.title} type="text" onChange={this.handleTitleChange}/>
                            <button onClick={() => {
                                this.props.updateFavorite(this.state.title, this.props.fav.id)
                                this.toggleEdit()
                                }}>Submit</button>
                            <button onClick={this.toggleEdit}>Cancel</button>
                        </div>
                    ):
                    (
                        <div>
                            {this.props.fav.title}
                            <button onClick={this.toggleEdit}>Edit</button>
                            <button onClick={() => this.props.deleteFavorite(this.props.fav.id)}>Delete</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default EditFavs