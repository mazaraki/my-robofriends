import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true });
    }

    render() {
        if(this.state.hasError) {
            return <h1>OOpss!!!</h1>
        } 
        return this.props.children;
    }
}

export default ErrorBoundary;