import React,  {Component} from "react";
import{Grid, Cell} from "react-mdl";
import img from "./assets/IMG_0463.jpg";

class Landing extends Component{
    render(){
        return(
        <div style={{ width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
            <Cell col={12}>
                <img src={img}
                alt="Felicia Wright"
                className="me-img"
                />

                <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>

                    <hr/>
                    <p>
                        HTML5 | CSS3 | Bootstrap | JavaScript | React | Express | NodeJS | Handlebars |MySQL | NoSQL |MongoDB</p>
<div className="social-links">
    {/*LinkedIn*/}
    <a href="http://linkedin.com/in/felicia-wright-4464911b2" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
    </a>

       {/*Github*/}
       <a href="https://github.com/Fedub1" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-github-square" aria-hidden="true" />
    </a>

       {/*Twitter*/}
       <a href="http://twitter.com/Felicia67172015" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-twitter-square" aria-hidden="true" />
    </a>

     

</div>

                </div>
            </Cell>
        </Grid>
        </div>
        )
    }
}
export default Landing;