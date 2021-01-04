import React,  {Component} from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Icon} from "react-mdl";


class Projects extends Component{
constructor(props) {
    super(props);
    this.state={activeTab:0};

}
toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "black", height: "176px", background: "url(https://banner2.cleanpng.com/20180518/ptw/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg) center / cover"}} >React Project</CardTitle>
            <CardText>
                Employee Directory
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
           </CardActions>
           <CardMenu style={{color: "#fff"}}>
               <IconButton name="share" />
           </CardMenu>
            </Card>
            </div>
        )
} else if(this.state.activeTab === 1){
    return(
        <div><h1>goodReads</h1></div>
    )

} else  if(this.state.activeTab === 2){
    return(
        <div><h1>Note Taker Application</h1></div>
    )
    }else if(this.state.activeTab === 3){
            return(
                <div><h1>Employee Tracker</h1></div>
            )}
}
    render(){
        return(
        <div className="category-tabs">
<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
<Tab>React</Tab>
<Tab>Project2</Tab>
<Tab>Express</Tab>
<Tab>MySQL</Tab>
</Tabs>

    <Grid>
        <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
        </Cell>
    </Grid>
    


        </div>
        )
    }
}
export default Projects;