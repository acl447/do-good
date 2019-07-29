import React from "react";
import { Redirect } from "react-router-dom";
import NavTabs from "../components/Navbar/NavTabs";
// import SideNav from "../components/SideNav/SideNav";
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
import "./about.css";
// import Logout from "../components/Logout";
// import Profile from "../components/Profile";


const AboutPage = () => (
        // state = {
        //     sideNavOpen: false
        // },
    
        //  navToggleClickHandler = () => {
        // this.setState((prevState) => {
        //     return {sideNavOpen: ! prevState.sideNavOpen};
        // })},
    
        // let sideNav;

        // if (this.state.sideNavOpen) {
        //     sideNav = <SideNav />;
        // } 

        // closeSideNavClickHandler = ( => {
        //     thissetState({sideNavOpne: false});
        // }) click={this.closeSideNavClickHandler} needs to be added to the app container
        
    <AuthConsumer>
        {({ user }) => (
        
            <Can
                role={user.role}
                perform="about-page:visit"
                yes={() => (
                

                    <div style={{height: "100%"}} className="page-container page-container-about">
                        {/* navClickHandler={this.navToggleClickHandler} needs to go into NavTavbs? */}
                        <NavTabs />
                        {/* show={this.state.SideNavOpen} needs to go in side nav */}
                        {/* <SideNav />                    {sideNav} */}
                        {/* <NavTabs href="/about" /> */}
                        {/* <Logout /> */}
                        <div class="about">

                        </div>
                        <br>
                        </br>
                        
                        {/* <Profile /> */}
                        <main style={{marginTop: "5px"}}>
                        <h5>
                        <h1><font color="white">About Us</font></h1>
                        Our MISSION is to facilitate Do Good so that they can create the needed processes, opportunities and projects to satisfy 
                        their needs within the framework of our vision and core values. 
                        <br></br>
                        <br></br>
                        Our VALUES are integrity, empowerment, community, kindness, helpfulness, generosity and inclusiveness. 
                        Do Good is a dynamic web application that encourages relationships between neighbors. 
                        Do Good provides an outlet to express personal 
                        and familiar needs such as shoveling a driveway, getting a babysitter, getting your kids a ride to hockey practice, 
                        finding orders for girl scout cookies, or even just letting the neighborhood know you're having a pool party next week. 
                        In the hectic world of today what we really need is to Do Good.</h5>
                        <br></br>
<h6> The Developers
<br></br>
Jill Veltrie
<br></br>
Ally Lesser
<br></br>
Ivana Langerova
<br></br>
Laura Schooley
</h6>
                        </main>
                       
                    </div>
                )}
                no={() => <Redirect to="/" />}
            />
        )}
    </AuthConsumer>
);

export default AboutPage;