import React from 'react';

class BooksItem extends React.Component {
    render(){
        return(
            <>
                <p>{this.props.item.title}</p>
                <p>{this.props.item.desciption}</p>
                <p>{this.props.item.status}</p>
            </>
        )
    }
}

export default BooksItem;