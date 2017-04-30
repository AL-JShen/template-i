import React, {Component} from 'react';
import SocMeIcon from './SocMeIcon';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <SocMeIcon linkURL={'https://github.com/AL-JShen'} imgURL={require('../icons/github.png')} imgALT={'Github'} caption={'Github'}/>
                <SocMeIcon linkURL={'https://www.facebook.com/'} imgURL={require('../icons/facebook.png')} imgALT={'Facebook'} caption={'Facebook'}/>
                <SocMeIcon linkURL={'https://twitter.com/?lang=en'} imgURL={require('../icons/twitter.png')} imgALT={'Twitter'} caption={'Twitter'}/>
                <SocMeIcon linkURL={'https://www.linkedin.com/uas/login'} imgURL={require('../icons/linkedin.png')} imgALT={'LinkedIn'} caption={'LinkedIn'}/>
                <SocMeIcon linkURL={'https://www.instagram.com/'} imgURL={require('../icons/instagram.png')} imgALT={'Instagram'} caption={'Instagram'} />
            </div>
        );
    }
}

export default Footer;