import React from 'react';
import Gary from '../img/Gary.png';

class Blog extends React.Component {    
    constructor(props){
        super(props);
        const date = new Date();
        this.state = {
            type: 'BLOG_DETAILS',
            blogName : "Gary",
            date: date.getFullYear() + '-' + date.getDate() + '-' + date.getMonth(),
            ForwardCount: 1680,
            CommentsCount: 567,
            FavoritesCount: 2800,
            blogContainerText: 'On this page we’ve listed some React-related On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.'
        }
        this.BlogHandleClick = this.BlogHandleClick.bind(this);
        this.BlogDetailsHandleClick = this.BlogDetailsHandleClick.bind(this);
    }

    
    BlogHandleClick(e) {
        e.preventDefault()
    }

    BlogDetailsHandleClick(){
        e.preventDefault()
    }

    render(){
        return (
            <div className='blog'>
                    <div className="blogTitle">
                        <div className="blogName">{this.state.blogName} Blog</div>
                        <div className="blogMore" value={this.state.type} onClick={this.BlogHandleClick}>MORE {String('>')}</div>
                    </div>
                    <div className="blogContainer" value={this.state.type} onClick={this.BlogDetailsHandleClick}>
                        <div className='blogContainerTitle'>
                            <div><img src={Gary} alt={this.state.blogName} /></div>
                            <div>
                                <span>{this.state.blogName}</span>
                                <span className='blogTimes'>{this.state.date}</span>
                            </div>
                        </div>
                        <div className='blogContainerText'>
                            {this.state.blogContainerText}
                        </div>
                        <div className='blogFooter'>
                            <div className='blogAction'>
                                <div>Forward  {this.state.ForwardCount}</div>
                                <div className='text-align-center'>Comments  {this.state.CommentsCount}</div>
                                <div className='text-align-right'>Favorites  {this.state.FavoritesCount}</div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Blog