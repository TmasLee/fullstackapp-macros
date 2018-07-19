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
          <p>
          This app serves as a macronutrients recorder to be used with workout routines. 
          Everyday a new day is created to record the days consumed macros. The days and foods 
          eaten is logged into a MySQL database and displayed in the history lists. Searching 
          for a food in the search bar fetches data from the USDA database.
          </p>
          <p>
          While this isn't personalized to each client visting the website, this is a demo of a
          a fullstack CRUD application prerendered server side and updating client side. This app was built 
          with a Node.js, Express and MySQL backend and React and Redux frontend.
          </p>
          <p>
          Creating an app like this came with new challenges that I wasn't expecting. These challenges include 
          handling cross-origin HTTP requests and finding a suitable hosting environment for a server side 
          prerendered app. 
          </p>
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


