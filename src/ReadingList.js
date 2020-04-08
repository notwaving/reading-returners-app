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
              <td>Quiet</td>
              <td>Susan Cain</td>
              <td><button type="button" className="btn btn-outline-success" onclick="userFinishedBook()">Finished</button>
              </td>
              <td><button type="button" className="btn btn-outline-danger" onclick="userDeleteBook()">Delete</button></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Lost In A Good Game</td>
              <td>Pete Etchells</td>
              <td><button type="button" className="btn btn-outline-success" onclick="userFinishedBook()">Finished</button>
              </td>
              <td><button type="button" className="btn btn-outline-danger" onclick="userDeleteBook()">Delete</button></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>La Belle Sauvage</td>
              <td>Philip Pullman</td>
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