import React from 'react';

class BlogList extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.blogContainerText}</div>
                <div>{this.props.author}</div>
                <div>{this.props.date}</div>
            </div>
        )
    }
}

export default BlogList