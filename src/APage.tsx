import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router";

interface IParameters {
    id: string;
}

interface IProps extends RouteComponentProps<IParameters> {
}

class Page extends Component<IProps> {
    public render() {
        return <div>Page 1{this.props.match.params.id}</div>
    }
}

export default withRouter(Page);