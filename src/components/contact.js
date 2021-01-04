import React,  {Component} from "react";
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";
import avatar from "./assets/avatar.JPG"
class Contact extends Component{
    render(){
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                <h2>Felicia Wright</h2>
                <img src={avatar}
                alt="female avatar"
                style={{height: "450px"}}
                />
                <p style={{ width: "75%", margin: "auto", paddingTop:"1em" }}>Insurance Professional turned Full Stack Web Developer</p>


                </Cell>
                <Cell col={6}>
<h2> Contact Me</h2>
<hr/>
<div className="contact-list">
<List>
  <ListItem>
    <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
        <i className= "fa fa-phone-square" aria-hidden="true"/>
        (206) 856-7540
        </ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
        <i className= "fa fa-envelope-square" aria-hidden="true"/>
        wrightfrw@gmail.com
        </ListItemContent>
  </ListItem>
 
</List>
</div>


                </Cell>
            </Grid>
        </div>
        )
    }
}
export default Contact;