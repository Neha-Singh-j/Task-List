import React from 'react'

const footer = () => {
  // use this kind of styling otherwise add a file footer.css then add styling theeir and import that fie here
  let footerStyle={
    
    position:"relative",
    top:"50vh",
    width:"100%",
    // border:"2px solid red"
  }
  return (
    <footer className="bg-dark text-light text-center py-3 " style={footerStyle}>
     Copyright &copy; MyTodosList.com
    </footer>
  )
}

export default footer
