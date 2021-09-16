import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import BooksItem from './BooksItem';
// import Carousel from "react-bootstrap/Carousel";
import UpdateForm from './UpdateForm';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favBooksArr: [],
      showFlag: false,
      title: '',
      desciption: '',
      status: '',
      bookId: ''
    }
  }

  componentDidMount = () => {

    const { user } = this.props.auth0;
    const email = user.email;
    axios
      // .get(`http://localhost:3010/getBooks?email=${email}`)
      .get(`https://app-qais.herokuapp.com/getBooks?email=${email}`)
      .then(result => {
        // console.log(result.data);
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
  }
  deleteBook = (id) => {
    const { user } = this.props.auth0;
    let email = user.email;
    axios

      // .delete(`http://localhost:3010/deleteBooks/${id}?email=${email}`)
      .delete(`https://app-qais.herokuapp.com/deleteBooks/${id}?email=${email}`)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');

      })
  }

  addBooksHandler = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    let email = user.email;
    const obj = {

      title: event.target.title.value,
      desciption :event.target.desciption.value,
      ownerEmail: email,
      status: event.target.status.value
    }

    axios
      // .post(`http://localhost:3010/addBooks`, obj)
      .post(`https://app-qais.herokuapp.com/addBooks`,obj)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
  }

  handleClose = () => {
    this.setState({
      showFlag: false
    })
  }

  showUpdateForm = (item) => {
    this.setState({
      showFlag: true,
      title: item.title,
      desciption: item.desciption,
      status: item.status,
      bookId: item._id

    })
  }

  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const ownerEmail = user.email;
    const obj = {
      title: event.target.title.value,
      desciption: event.target.desciption.value,
      status: event.target.status.value,
      // email: email,
      bookId: this.state.bookId
    }

    axios
      // .put(`http://localhost:3010/updateBook/${this.state.bookId}`, obj)
      .post(`https://app-qais.herokuapp.com/updateBook/${this.state.bookId}`,obj)
      .then(result => {
        this.setState({
          favBooksArr: result.data,
          showFlag: false
        })
      })
      .catch(err => {
        console.log('error in updating the data');
      })
  }



  render() {
    return (
      <>
        <form onSubmit={this.addBooksHandler}>
          <fieldset>
            <legend>Add Book</legend>
            <input type="text" name="title" />
            <input type="text" name="desciption" />

            <select name="status" id="status">
              <option value="Adventurs">Adventure</option>
              <option value="Action">Action</option>
              <option value="tail">tail</option>
            </select>

            <button type="submit">Add a book</button>

          </fieldset>
        </form>

        {this.state.favBooksArr.length}
        {this.state.favBooksArr.map(item => {
          return (
            <BooksItem class="books"
              item={item}
              deleteBook={this.deleteBook}

              showUpdateForm={this.showUpdateForm}
            />
          )
        })
        }

        <UpdateForm
          handleClose={this.handleClose}
          show={this.state.showFlag}
          title={this.state.title}
          status={this.state.status}
          desciption={this.state.desciption}
          updateBook={this.updateBook}
        />
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
