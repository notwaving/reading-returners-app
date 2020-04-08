import React from 'react';

class ReadingList extends React.Component {

  render() {
    return (
      <div className="container-fluid padding">
        <table className="table">
          <div className="col-12">
            <h4 className="table-header text-left">Your reading list</h4>
          </div>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>{this.props.bookListing[0]}</td>
              <td>{this.props.bookListing[1]}</td>
              <td><button type="button" className="btn btn-outline-success" onclick="userFinishedBook()">Finished</button>
              </td>
              <td><button type="button" className="btn btn-outline-danger" onclick="userDeleteBook()">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

export default ReadingList;