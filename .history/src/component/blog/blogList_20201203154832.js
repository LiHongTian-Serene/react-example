import React from 'react';

class BlogList extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <div>{this.props.value.title}</div>
                <div>{this.props.value.blogContainerText}</div>
                <div>{this.props.value.author}</div>
                <div>{this.props.value.date}</div>
            </div>
        )
    }
}

export default BlogList