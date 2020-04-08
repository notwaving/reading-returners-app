import React from 'react';

class Archive extends React.Component {

  render() {
    return (
      <div className="container-fluid padding">
        <hr></hr>
        <div className="row">
          <div className="col-4">
            {this.props.bookListing[0]}
          </div>
          <div className="col-4">
            {this.props.bookListing[1]}
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-primary"
              onclick="userBookReview()">
              Review
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-danger"
              onclick="userDeleteBook()">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default Archive;