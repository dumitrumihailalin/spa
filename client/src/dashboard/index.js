import React, { Component } from 'react'


// If you were testing, you'd want to export this component
// so that you can test your custom made component and not
// test whether or not Redux and Redux Form are doing their jobs
class Dashboard extends Component {
  // Pass the correct proptypes in for validation


  // Remember, Redux Form passes the form values to our handler
  // In this case it will be an object with `email` and `password`

  render () {
    return (
      <div className="dashboard">
        <h2>Welcome</h2>
      </div>
    )
  }
}



// Export our well formed login component
export default Dashboard
