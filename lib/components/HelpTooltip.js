import React, {Component} from 'react';

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    fontFamily: 'Arial',
    fontSize: '20px',
    listStyleType: 'none',
    textDecoration: 'none'
  },
  text: {
    width: '200px',
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
        <span style={styles.text}>
          tooltip explaining what this app does and how to use + 
          Link to the USDA api + 
          explain concepts + 
          whats to be added
        </span>
      )
    }
    return(
      <a 
        href=''
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
      </a>
    )
  }
}

export default HelpTooltip;


