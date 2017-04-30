import React, {Component} from 'react';
import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';
import Footer from './Footer'

class Body extends Component {
    render() {
        return (
            <div className='body'>
                <div className='intro'>
                    Main Title
                </div>
                <br/><br/>
                <div className='bodyText'>
                    <ImageBlock url='' alt='' caption={""}/>
                    <TextBlock/>
                </div>
                <br/><br/>
                <div className='bodyFooter'>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Body;