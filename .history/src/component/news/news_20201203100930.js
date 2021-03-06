import React from 'react';

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newsTitle: 'Balance China Event-How to Create Success',
            date: 'June 14,2019',
            content:'Balance China Event-How to Create Success in Your Care...'
        };
        this.newsMoreHandleClick = this.newsMoreHandleClick.bind(this);
    }

    

    newsMoreHandleClick(e) {
        
    }

    render() {
        return (
            <div>
                <div className="blogTitle">
                    <div className="blogName">News</div>
                    <div className="blogMore" onClick={this.newsMoreHandleClick}>MORE {String('>')}</div>
                </div>
                <div className="newsContainer">
                    <div className='newImg'>newsimg</div>
                    <div className='newsDetails'>
                        <div className='newsTitle'>{this.state.newsTitle}</div>
                        <div className='blogTimes'>{this.state.date}</div>
                        <div>{this.state.content}</div>
                    </div>
            </div>
            </div>
        )
    }
}

export default News