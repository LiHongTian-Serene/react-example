import React from 'react';
import BlogList from './blogList';
import fetchData from '../../fetchData';

class BlogListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list : [
               
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
                        return <BlogList key={item.toString()}  value={item}/>
                    })
                }                
            </div>
            )
     }
}

export default BlogListPage