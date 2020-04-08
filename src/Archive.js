import React from 'react';

class Archive extends React.Component {

  render() {
    return (
      <div>
        <button className="archive-button btn btn-outline-secondary" data-toggle="collapse" data-target="#archive-toggle">Click
      for Archive</button>
        <div id="archive-toggle" className="collapse">

          <div className="container-fluid padding">
            <table className="table">
              <div className="col-12">
                <h4 className="table-header text-left">Archive</h4>
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
                  <td><button type="button" className="btn btn-outline-primary" onclick="userBookReview()">Review</button></td>
                  <td><button type="button" className="btn btn-outline-danger" onclick="userDeleteBook()">Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div >
      </div>
    );
  };
}

export default Archive;