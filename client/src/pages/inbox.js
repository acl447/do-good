import React from "react";
import { Redirect } from "react-router-dom";
import NavTabs from "../components/Navbar/NavTabs";
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
// import Logout from "../components/Logout";
// import NavTabs from "../components/NavTabs";
// import Profile from "../components/Profile";


const InboxPage = () => (
    <AuthConsumer>
        {({ user }) => (
            <Can
                role={user.role}
                perform="inbox-page:visit"
                yes={() => (
                    <div>
                        <NavTabs />
                        {/* <NavTabs href="/about" /> */}
                        {/* <Logout /> */}
                        <h1>Inbox Page</h1>
                        {/* <Profile /> */}
                        <p>

   </p>
                    </div>
                )}
                no={() => <Redirect to="/" />}
            />
        )}
    </AuthConsumer>
);

export default InboxPage;