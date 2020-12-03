import React from 'react';
import fetchData from '../../fetchData'

class BlogListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            "blogName" : "Gary's",
            "title": "Balance China Event-How"
            "date" : "2020-02-12",
            "ForwardCount": "1",
            "CommentsCount": "1",
            "FavoritesCount": "1",
            "blogContainerText": "Balance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create"
        }
    }

    componentDidMount(){
        fetchData('./mock/blogList.json').then((res) =>{
            console.log(res.list)
        })
    }

     render(){
         return (
            <div className='blogListPage'>
                <div>
                    <div>{this.state.blogName}</div>
                    <div>{this.state.date}</div>
                    <div>{this.state.blogContainerText}</div>
                </div>
            </div>
            )
     }
}

export default BlogListPage