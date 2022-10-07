import React from 'react'
import { Link } from 'react-router-dom';
import obj_triangle from "../assets/img/obj_triangle.png"
import Nav from '../commons/Nav';


const Home = () => {
  return (
    <>
  <div className="home jumbotron">
        <Nav/>
    <div className="container">  
      <Link to='/login'><h1>SIG<br/>ISH</h1></Link>
     </div>
    <div className="rectangle-1"></div>
    <div className="rectangle-2"></div>
    <div className="rectangle-transparent-1"></div>
    <div className="rectangle-transparent-2"></div>
    <div className="circle-1"></div>
    <div className="circle-2"></div>
    <div className="circle-3"></div>
    <div className="triangle triangle-1">
      <img src={obj_triangle} alt=""/>
    </div>
    <div className="triangle triangle-2">
      <img src={obj_triangle} alt=""/>
    </div>
    <div className="triangle triangle-3">
      <img src={obj_triangle} alt=""/>
    </div>
    <div className="triangle triangle-4">
      <img src={obj_triangle} alt=""/>
    </div>
    </div>
    </>
  )
}

export default Home