import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import FormModal from '../modals/Modal';
import {connect} from 'react-redux'

class DataRow extends Component {
  render() {

      let item = this.props.item

    return (

        <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.first}</td>
            <td>{item.last}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.location}</td>
            <td>{item.hobby}</td>
            <td>
            <div style={{width:"110px"}}>
                {/* FormModal needs input props of the item={*item to edit*} and an updateState={function} */}
                <FormModal buttonLabel="Edit" item={item} /> 
                {' '}
                {/* Button needs an onClick callback with a delete function */}
                <Button color="danger" onClick={() => {}}>Del</Button>
            </div>
            </td>
        </tr>

    )
  }
}

export default connect()(DataRow)
