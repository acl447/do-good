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
                            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
                            ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
                            quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
                            diam, sit amet facilisis lectus blandit at.
   </p>
                    </div>
                )}
                no={() => <Redirect to="/" />}
            />
        )}
    </AuthConsumer>
);

export default InboxPage;