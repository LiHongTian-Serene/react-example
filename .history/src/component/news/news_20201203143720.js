import React from 'react';
import {Link} from 'react-router-dom'
import fetchData from '../../fetchData'

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newsTitle: 'Balance China Event-How to Create Success',
            date: 'June 14,2019',
            content:'Balance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your Care'
        };
        this.newsMoreHandleClick = this.newsMoreHandleClick.bind(this);
    }

    componentDidMount(){
        fetchData('./mock/newDetails.json').then((res) => {
            console.log(res);
            this.setState({
                newsTitle: res.newsTitle,
                date: res.date,
                content: res.content
            });
        });
    }
    

    newsMoreHandleClick(e) {
        
    }

    render() {
        return (
            <div className='marginTop10'>
                <div className="blogTitle">
                    <div className="blogName">News</div>
                    <Link to='/NewsListPage/' className="blogMore" value={this.state.type}>MORE {String('>')}</Link>
                    {/* <div className="blogMore" onClick={this.newsMoreHandleClick}>MORE {String('>')}</div> */}
                </div>
                <div className="newsContainer">
                    <div className='newImg'>newsimg</div>
                    <div className='newsDetails'>
                        <div className='newsTitle'>{this.state.newsTitle}</div>
                        <div className='dateStyle'>{this.state.date}</div>
                        <div className='ContainerTextStyle marginTop10 newsContainerTextStyle'>{this.state.content}</div>
                    </div>
            </div>
            </div>
        )
    }
}

export default News