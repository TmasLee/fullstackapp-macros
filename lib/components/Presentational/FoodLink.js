import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  listItem: {
    listStyleType: 'none',

  },
  link: {
    textDecoration: 'none',

  }
}

const FoodLink = ({name,ndbno, onClick}) => {
  return(
    <div>
      <li style={styles.listItem}>
        <a 
          href=""
          style={styles.link}
          onClick={e=>{
            e.preventDefault();
            onClick(ndbno, name);
            }}
          >
          {name}
        </a>
      </li>
    </div>
  )
}

FoodLink.propTypes = {
  name: PropTypes.string.isRequired,
  ndbno: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FoodLink;