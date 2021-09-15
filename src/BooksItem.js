import React, { Component } from 'react';


class BookItem extends Component {
    render() {
        return (
            <div>
                <h3> {this.props.item.title}</h3>
                <p> {this.props.item.desciption}</p>
               
                <p> {this.props.item.status}</p>
                <p> {this.props.item.email} </p>
                <button onClick={()=>this.props.deleteBook(this.props.item._id)}>delete</button>
                <button onClick={() => this.props.showUpdateForm(this.props.item)}>Update</button>
            </div>

        )
    }
}

export default BookItem;