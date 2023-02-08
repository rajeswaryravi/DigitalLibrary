import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../images/logo.jpg';
import banner1 from '../../images/banner1.jfif';
import react1 from '../../images/react1.png';
import react2 from '../../images/react2.jpg';
import react3 from '../../images/react3.jpg';
import react4 from '../../images/react4.png';
import react5 from '../../images/react5.jpg';


import { Link } from "react-router-dom";


class Home extends React.Component {
  render() {
    return (
      <>
      <header className="navbar navbar-dark sticky-top flex-lg-nowrap m-1  shadow" style={{backgroundColor:"lightblue",height:"50px"}}>
      <img src={`${logo}`} alt="" style={{width:"100px",height:"50px"}}/>
        <h1> <a className="navbar-brand " href="/" style={{color:"#000"}}>
          Digital Library
        </a></h1>
        <button className="btn btn-light " style={{marginLeft:"600px",color:"#000"}}>
            <Link to={"/add"}>Add Book</Link>
          </button>
        <input type="search" Placeholder="Search here.." style={{outline:"none",border:"none"}}></input>
      </header>
      <div>
      <img src={`${banner1}`} alt="" style={{width:"100%",height:"275px"}}/>
      </div>
      <div>
      <button>
      <img src={`${react1}`} alt="" style={{width:"150px",height:"100px",marginRight:"10px",marginTop:"5px"}}/>
      </button>
      <button>
      <img src={`${react2}`} alt="" style={{width:"150px",height:"100px", marginRight:"10px",marginTop:"5px"}}/>
      </button>
      <button>
      <img src={`${react3}`} alt="" style={{width:"150px",height:"100px",marginRight:"10px",marginTop:"5px"}}/>
      </button>
      <button>
      <img src={`${react4}`} alt="" style={{width:"150px",height:"100px",marginRight:"10px",marginTop:"5px"}}/>
      </button>
      <button>
      <img src={`${react5}`} alt="" style={{width:"150px",height:"100px",marginRight:"10px",marginTop:"5px"}}/>
      </button>
      </div>
      <footer className="navbar navbar-dark sticky-top flex-md-nowrap m-0  shadow" style={{backgroundColor:"black",height:"50px"}}>
        <p style={{color:"#fff"}}>@Copy right 2023</p>
      </footer>
      </>
    );
  }
}

export default Home;
