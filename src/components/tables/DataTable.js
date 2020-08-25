import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import DataRow from './DataRow'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
class DataTable extends Component {


  render() {

    // Loop through passed down items, make DataRow components of each one
    
    const contactRows = this.props.contacts.map(item => {
      return (
        <DataRow item={item} key={item.id}/>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {contactRows}

        </tbody>
      </Table>
    )
  }
}

DataTable.propTypes = {
  contacts: PropTypes.array.isRequired
}

DataTable.defaultProps = {
  contacts: []
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(DataTable)