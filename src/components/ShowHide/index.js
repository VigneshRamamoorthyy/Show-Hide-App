import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    fname: true,
    lname: true,
  }

  onShowFname = () => {
    const {fname} = this.state

    this.setState({
      fname: !fname,
    })
  }

  onShowLname = () => {
    const {lname} = this.state

    this.setState({
      lname: !lname,
    })
  }

  render() {
    const {fname, lname} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="buttons-container">
          <div className="button-container">
            <button
              className="show-hide-btn"
              type="button"
              onClick={this.onShowFname}
            >
              Show/Hide FirstName
            </button>
            {fname ? '' : <p className="name">Joe</p>}
          </div>

          <div className="button-container">
            <button
              className="show-hide-btn"
              type="button"
              onClick={this.onShowLname}
            >
              Show/Hide LastName
            </button>
            {lname ? '' : <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
