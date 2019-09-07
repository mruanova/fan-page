import React from 'react'
class Users extends React.Component {
  render() {
    const { params } = this.props.match
    console.log(this.props)
    return (
      <div>
        <h1>Users</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}
export default Users