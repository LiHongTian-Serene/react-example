import React from 'react';

class BlogListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        let tempId = this.props.match.params.id;
        this.setState({id:tempId})
    })

     render(){
         return <h1>BlogListPage</h1>
     }
}

export default BlogListPage