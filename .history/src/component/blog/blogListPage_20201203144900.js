import React from 'react';
import fetchData from '../../fetchData'

class BlogListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            "title": "new title1",
            "date" : "June 14, 2020",
            "content":"Balance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your CareBalance China Event-How to Create Success in Your Care"
        }
    }

    componentDidMount(){
        fetchData('./mock/blogList.json').then((res) =>{
            console.log(res)
        })
    }

     render(){
         return (
            <div>
                <div>
                    <div></div>
                </div>
            </div>
            )
     }
}

export default BlogListPage