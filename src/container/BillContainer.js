import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBill } from '../redux/actions/billsActions'
import { Bill } from '../components/Bill'

export class BillContainer extends Component {


  componentDidMount() {
    const billId = window.location.href.split('/')[4]
    this.props.fetchBill(billId)
  }


  render() {
    return (
      <div>
        <h2>In the Bill Container</h2>
        <Bill bill={this.props.bills}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bills: state.bills.bill
})

const mapDispatchToProps = dispatch => {
  return {
    fetchBill: (billId) => dispatch(fetchBill(billId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BillContainer)
