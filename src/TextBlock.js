import React, {Component} from 'react';

class TextBlock extends Component {
    render() {
        return (
            <div className='text'>
                <p className='textHeading'>Textblock Title</p>
                <div className='paragraphs'>
                    <p className='para1'>
                      Text
                    </p>
                    <p className='para2'>
                      Text
                    </p>
                    <p className='para3'>
                      Text
                    </p>
                    <p className='para4'>
                      Text
                    </p>
                    <p className='para5'>
                      Text
                    </p>
                </div>
            </div>
        );
    }
}

export default TextBlock;