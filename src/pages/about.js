import React from "react";
import { Redirect } from "react-router-dom";
import NavTabs from "../components/Navbar/NavTabs";
import SideNav from "../components/SideNav/SideNav";
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";

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
                        <SideNav />                    {/* {sideNav} */}
                        {/* <NavTabs href="/about" /> */}
                        {/* <Logout /> */}
                        <h1>About Page</h1>
                        {/* <Profile /> */}
                        <main style={{marginTop: "100px"}}>
                        <p>
                        Do Good is a community-based service that allows neighbors to give and receive goods and services without any cost or money exchange. Doing good to help each other out without expecting anything in return but gratitude. </p>
                        </main>
                       
                    </div>
                )}
                no={() => <Redirect to="/" />}
            />
        )}
    </AuthConsumer>
);

export default AboutPage;