import React, { Fragment } from 'react';
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
                            return (
                                <div key={item.id}>
                                    <a href=''>{item}</a>
                                </div>
                                )
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
