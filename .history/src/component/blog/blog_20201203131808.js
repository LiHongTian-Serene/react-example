import React from 'react';\
import Gary from '../../img/Gary.png';
import fetchData from '../../fetchData'

class Blog extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            type: 'BLOG_DETAILS',
            blogName : "Gary",
            date: '2020-02-12',
            ForwardCount: 1680,
            CommentsCount: 567,
            FavoritesCount: 2800,
            blogContainerText: 'On this page we’ve listed some React-related On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.'
        }
    }

    componentDidMount() {
        fetchData('./mock/blogDetails.json').then((res) => {
            console.log(res);
            this.setState({
                blogName:res.blogName,
                date: res.date,
                ForwardCount: res.ForwardCount,
                CommentsCount: res.CommentsCount,
                FavoritesCount: res.FavoritesCount,
                blogContainerText: res.blogContainerText
                })
        })
    }

    JumpToBlogListPage(){
        var history=this.props.history;
        var match=this.props.match;
        console.log(match)
        /*使用history的push函数来切换路由*/
        //history.push(match.url+"/item3");
    }

    render(){
        return (
            <div className='blog'>
                    <div className="blogTitle">
                        <div className="blogName">{this.state.blogName} Blog</div>
                        <div className="blogMore" onClick={() => {this.JumpToBlogListPage()}} value={this.state.type}>MORE {String('>')}</div>
                    </div>
                    <div className="blogContainer" value={this.state.type}>
                        <div className='blogContainerTitle'>
                            <div><img src={Gary} alt={this.state.blogName}/></div>
                            <div>
                                <span>{this.state.blogName}</span>
                                <span className='dateStyle'>{this.state.date}</span>
                            </div>
                        </div>
                        <div className='ContainerTextStyle blogContainerTextStyle'>
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