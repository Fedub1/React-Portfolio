import React,  {Component} from "react";
import {Grid, Cell} from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import IMG_0849 from "./assets/IMG_0849.jpg";

class Resume extends Component{
    render(){
        return(
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: "center"}}>
                    <img src={IMG_0849}
                    alt="Felicia Wright2"
                    style={{height: "200px"}}
                    />
                    </div>
                    <h2 style={{paddingTop: "2em"}}>Felicia Wright</h2>
                    <h4 style={{color: "grey"}}>Programmer</h4>
                    <hr style={{borderTop: "3px sold 833fb2", width: "50%"}}/>
                    <p>Insurance Professional turned Full Stack Web Developer</p>
                            
                    <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    <h5>Address</h5>
                    <p> 9910 Perth Moor Road Charlotte, NC 28278 </p>
                    <h5>Phone</h5>
                    <p> (206) 856-7540</p>
                    <h5>Email</h5>
                    <p> wrightfrw@gmail.com</p>
                    <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                    
                    </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    
                    
                    <Education 
                    startYear={2019}
                    endYear={2020}
                    schoolName="University of North Carolina Charlotte"
                    schoolDescription="Full Stack Coding Bootcamp"
                    />

                    <Education 
                    startYear={2014}
                    endYear={2016}
                    schoolName="Washington State University"
                    schoolDescription="Psychology"
                    />
<hr style={{borderTop: "3px solid #e22947"}}/>
<h2>Experience</h2>.

<Experience 
                    startYear={2017}
                    endYear={"present"}
                    employerName="The Hartford"
                    employerDescription="Billing Specialist  - Key Accomplishments : Handles policy change requests on Workers Compensation, General Liability and Commercial Auto policies. Utilizes industry knowledge and creativity to performs audits and billing inquiries reducing customer call backs by 15%. Boosted customer experience by 25% by introducing digital products and self service options. Collaborates with a team of 12 to provide high quality customer service decreasing customer effort by 15%."
                    />
 <Experience 
                    startYear={2014}
                    endYear={2016}
                    employerName="Hopelink"
                    employerDescription="Center Manager - Key Accomplishments : Managed a team of 6 direct reports and 25 volunteers to deliver emergency services which decreased customer hardship by 30%. Developed procedures for providing emergency assistance to the community.Managed budget and increased overall client base by 20%. Trained and developed training materials for new hires which improved staff retention by 10%."
                    />  

<Experience 
                    startYear={2009}
                    endYear={2014}
                    employerName="Hopelink"
                    employerDescription="Program Supervisor - Key Accomplishments : Center Manager - Key Accomplishments : 
                    Managed incident investigation process which helped decrease customer incidents by 15% over a 12 month period. Primary contact for the State of Washington Non-Emergent transportation team for customer  concerns and VIP clients. Developed and distributed outreach materials which increased customer base by 40%. 
                    Managed a team of 6 direct reports and 25 volunteers to deliver emergency services which decreased customer hardship by 30%. Developed procedures for providing emergency assistance to the community.Managed budget and increased overall client base by 20%. Trained and developed training materials for new hires which improved staff retention by 10%. Developed procedures  and reports to track service delivery and safety protocols. Trained and created training materials for staff increasing ."
                    />                
<hr style={{borderTop: "3px solid #e22947"}}/>

<h2>Skills</h2>
<Skills 
skill="HTML/CSS"
progress={100}
/>
<Skills 
skill="Bootstrap"
progress={100}
/>
<Skills 
skill="NodeJS"
progress={80}
/>
<Skills 
skill="JavaScript"
progress={80}
/>
<Skills 
skill="MySQL"
progress={80}
/>
<Skills 
skill="React"
progress={65}
/>

                    </Cell>
            
            </Grid>




        </div>
        )
    }
}
export default Resume;