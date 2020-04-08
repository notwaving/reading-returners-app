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
              <td>The Crimson Petal and the White</td>
              <td>Michel Faber</td>
              <td><button type="button" className="btn btn-outline-primary" onclick="userBookReview()">Review</button></td>
              <td><button type="button" className="btn btn-outline-danger" onclick="userDeleteBook()">Delete</button></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Introducing HTML5</td>
              <td>Bruce Lawson & Remy Sharp</td>
              <td><button type="button" className="btn btn-outline-primary" onclick="userBookReview()">Review</button></td>
              <td><button type="button" className="btn btn-outline-danger" onclick="userDeleteBook()">Delete</button></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>The Amber Spyglass</td>
              <td>Philip Pullman</td>
              <td><button type="button" className="btn btn-outline-primary" onclick="userBookReview()">Review</button></td>
              <td><button type="button" className="btn btn-outline-danger" onclick="userDeleteBook()">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
  </div >
  </div>
    )
  }

}

export default Archive;