import React, {Component} from 'react';
import Slider from 'infinite-react-carousel';

class CustomSlider extends Component {
    render() {
        return (
            <>
                <Slider>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Slider>
            </>
        )
    }
}

export default CustomSlider;
