import React, {Component} from 'react';
import Headroom from 'react-headroom';

import classes from './App.module.css';

class App extends Component {

    state = {
        isDesktop: false
    }

    handleWindowResize = () => {
        this.setState({ isDesktop: window.innerWidth >= 375 });
    }

    componentDidMount() {
        this.handleWindowResize();
    }

    render() {
        return (
            <div className={classes.App}>
                <Headroom disable={this.state.isDesktop}>
                    <div className={classes.Nav}>
                        {this.state.isDesktop ? 'HEADER' : 'Changed Header'}
                    </div>
                </Headroom>
                <div style={{height: '1500px'}}>

                </div>
            </div>
        )
    }
}

export default App;
