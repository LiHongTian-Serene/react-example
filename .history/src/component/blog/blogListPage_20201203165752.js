import React from 'react';

import fetchData from '../../fetchData';
import BlogList from './blogList';

class BlogListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list : [
                {
                    "author" : "Gary's",
                    "title": "Balance China Event-How",
                    "date" : "2020-02-12",
                    "ForwardCount": "1",
                    "CommentsCount": "1",
                    "FavoritesCount": "1",
                    "blogContainerText": "Balance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create"      
                }
            ]
        }
    }

    componentDidMount(){
        fetchData('./mock/blogList.json').then((res) => {
            console.log(res);
            this.setState({
                    list: res.list
                })
        })
    }

     render(){
         return (
            <div className='blogListPage'>
                {
                    this.state.list.map((item) => {
                        return <BlogList key={item.toString()} value={item}/>
                    })
                }                
            </div>
            )
     }
}

export default BlogListPage