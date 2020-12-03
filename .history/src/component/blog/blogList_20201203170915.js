import React from 'react';

class BlogList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className='blogList marginTop10'>
                <div className='blogListTitle'>{this.props.value.title}</div>
                <div className='blogListContainer'>{this.props.value.blogContainerText}</div>
                <div>
                    <div className='blogListauthor'>{this.props.value.author}</div>
                    <div className='blogListdate'>{this.props.value.date}</div>
                    <div className='blogListdate'>{this.props.value.date}</div>
                    <div className='blogListdate'>{this.props.value.date}</div>
                    <div className='blogListdate'>{this.props.value.date}</div>
                </div>
            </div>
        )
    }
}

export default BlogList