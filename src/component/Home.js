import React, { Fragment } from 'react';
import LinkSectionItem from './linkSectionItem'
import Banner from './banner'
import Blog from './blog'
import '../index.css';
import News from './news';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkItems : ['QSeat', 'Mars', '360 Survey'],
            title: 'Staff Engagement'
        }
    }

    render(){
        return (
            <Fragment>
                <div className='title'>{this.state.title}</div>
                <Banner />
                <div className='linkSection'>
                    {
                        this.state.linkItems.map((item) => {
                            return <LinkSectionItem key={item.toString()} value={item} />
                        })
                    }
                </div>
                <Blog />
                <News />
            </Fragment>
        )
    }
}

export default Home;
