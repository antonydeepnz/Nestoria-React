import React from 'react'
import { connect } from 'react-redux'

const Ex = ({}) => {
  return (
    <>
      {routes.map(item => {
        return <li>{item.path}</li>
      })}
    </>
  );
}

const mapStateToProps = state => ({
  routes: state.router
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Ex)