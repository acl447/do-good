import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavTabs from "../components/Navbar/NavTabs";
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
// import Logout from "../components/Logout";
// import Profile from "../components/Profile";
import Detail from "../components/Detail";


class DetailPage extends Component {

    componentDidMount() {

        console.log("below are this.props");

        console.log(this.props.match.params.id);
    };

    render() {
        return (
            <AuthConsumer>
                {({ user }) => (
                    <Can
                        role={user.role}
                        perform="detail-page:visit"
                        yes={() => (
                            <div>
                                <NavTabs />
                                {/* <Logout /> */}
                                <h1>Detail Page</h1>
                                <Detail postId={this.props.match.params.id} />

                            </div>
                        )}
                        no={() => <Redirect to="/" />}
                    />
                )}
            </AuthConsumer>
        );
    };
}


export default DetailPage;