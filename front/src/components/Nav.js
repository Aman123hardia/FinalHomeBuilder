import React from 'react'
import { Link } from 'react-router-dom';
import "./css/sidebar.scss";
import Post from './Post';
const Nav = () => {
  
  return (
    <span  >
  <aside className="sidebarCode" style={{width:'20%'}}>
    <nav className="navBarCode" >
      <ul>
        <li><Link  to="/createPost">Create Post </Link></li>
        <li><Link  to="#">Saved Post</Link></li>
        <li><Link  to="#">Notification</Link></li>
        <li><Link  to="#">Logout</Link></li>
      </ul>
    </nav>
  </aside>
<Post style={{marginLeft:'-20%'}}></Post>
    </span>
  )
}

export default Nav
