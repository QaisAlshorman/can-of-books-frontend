import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import BooksItem from './BooksItem';
import Carousel from "react-bootstrap/Carousel";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favBooksArr: [],
    }
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`http://localhost:3010/Books?email=${email}`)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
  }
  render() {
    return (
      <><h1>My Favorite Books</h1>
        <div>
          {this.state.favBooksArr.map((item, indx) => {
            return (
              <>
                <BooksItem
                  item={item} />

                <Carousel fade>
                <Carousel.Item key={indx} interval={1000}>
                  
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.status}</p>
                    <h3>{item.desciption}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
              </>
            );
          })}

        </div>
        <p> This is a collection of my favorite books</p></>



    )
  }
}



export default withAuth0(MyFavoriteBooks);
