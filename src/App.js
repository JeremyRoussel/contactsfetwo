import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import FormModal from './components/modals/Modal'
import DataTable from './components/tables/DataTable'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import * as contactActions from './actions/contactActions'

class App extends Component {

  // constructor(props) {
  //   super(props)

  // }

  


  render() {

    // console.log(this.props.contacts)
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>CRUD Database - Redux Actions and Reducers</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          {/* DataTable needs props of a contacts list, an update function for editing form data, and a function to delete an entry */}
            <DataTable />
          </Col>
        </Row>
        <Row>
          <Col>
          {/* FormModal takes a prop of a function to add and item to the database */}
            <FormModal buttonLabel="Add Item" />
          </Col>
        </Row>
      </Container>
    )
  }
}

// App.propTypes = {
//   contacts: PropTypes.array.isRequired
// }

// App.defaultProps = {
//   contacts: []
// }


// const mapStateToProps = (state, ownProps) => {
//   return {
//     contacts: state.contacts
//   }
// }

// export default connect(mapStateToProps, null)(App)

export default App