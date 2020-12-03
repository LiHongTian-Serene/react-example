import React from 'react';

class BlogList extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <div>{this.state.title}</div>
                <div>{this.state.blogContainerText}</div>
                <div>{this.state.author}</div>
                <div>{this.state.date}</div>
            </div>
        )
    }
}

export default BlogList