import React from 'react';

class Header extends React.Component {

  render() {
    return <div className="container-fluid padding">
    <div className="header">
      <div className="col-12">
        <h1 className="display-5"><i className="fas fa-book-open"></i> Reading Returners</h1>
      </div>
    </div>
  </div>
  }

}
export default Header;