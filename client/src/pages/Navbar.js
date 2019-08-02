import React from 'react';
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return(
        
        <nav>
        <div class="nav-wrapper">
          <Link to="/" classNanme="brand-logo">HBooks</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/saved">Saved</Link></li>
          </ul>
        </div>
      </nav>
        )
    }
}

export default Navbar