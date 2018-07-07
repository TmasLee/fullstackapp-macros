import React, {Component} from 'react';

const styles = {
  container: {
    background: 'none',
    border: 'none',
    color: 'red',
    padding: '0',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    fontFamily: 'Arial',
    fontSize: '20px',
    listStyleType: 'none',
    textDecoration: 'none'
  },
  text: {
    width: '450px',
    top: '100%',
    left: '50%',
    marginLeft: '-50px',
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    padding: '5px 0',
    borderRadius: '5px',
    position: 'absolute',
    zIndex: '1000',
  },
  link: {
    position: 'absolute',
    fontFamily: 'Arial',
    fontSize: '20px',
    right: '0',
    color: 'rgb(67, 123, 219)',

  }
}

class HelpTooltip extends Component {
  state = {
    hover: false
  }

  onHover = () => {
    this.setState((prevState)=>{
      return {hover: !prevState.hover}
    });
  }

  render(){
    var text;
    if (this.state.hover === false){
      text = null;
    } else if (this.state.hover === true){
      text = (
        <div style={styles.text}>
          <span>
          This app serves as a macronutrients recorder to be used with 
          workout routines. Everyday (starting at midnight) a new day is created, ready to 
          record the new day's consumed macros. The previous day and foods eaten is logged into
          a MySQL database and displayed in the history lists. Searching for a food in the search bar 
          fetches data from the USDA database.
          </span>
          <span>
          While this isn't personalized to each client visting the website, it's a demo of of a
          a fullstack CRUD application. This app was built with Node.js, Express and MySQL backend 
          and React for the front end with Redux for state management. 
          </span>
          <span>
          Soon to come are: delete/update buttons for both lists and the ability to easily see foods logged
          for a specific day. Also some bug fixes, refactoring, and optimization!
          </span>
        </div>
      )
    }
    return(
      <div>
        <button
          style={styles.container}
          onMouseOver={(e)=>{
            e.preventDefault();
            this.onHover();
          }}
          onMouseLeave={(e)=>{
            e.preventDefault();
            this.onHover();
          }}
        >
          What is this?
          {text}
        </button>
        <a href='https://ndb.nal.usda.gov/ndb/search/list?home=true' style={styles.link}>Link to USDA database</a>
      </div>
    )
  }
}

export default HelpTooltip;


