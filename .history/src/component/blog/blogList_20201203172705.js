import React from 'react';
import Gary from '../../img/Gary.png';

class BlogList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className='blogList marginTop10' onClick={}>
                <div className='blogListTitle'>{this.props.value.title}</div>
                <div className='blogListContainer'>
                    <img src={Gary} alt={this.props.value.author} />
                    {this.props.value.blogContainerText}</div>
                <div className='blogListFooter'>
                    <div className='blogListauthor'>{this.props.value.author}</div>
                    <div className='blogListdate'>{this.props.value.date}</div>
                    <div className='blogListdate'>{this.props.value.ForwardCount}</div>
                    <div className='blogListdate'>{this.props.value.CommentsCount}</div>
                    <div className='blogListdate'>{this.props.value.FavoritesCount}</div>
                </div>
            </div>
        )
    }
}

export default BlogList