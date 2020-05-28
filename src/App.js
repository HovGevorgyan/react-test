import React, {Component} from 'react';
import Headroom from 'react-headroom';
import categories from './components/Categories';
import {BrowserRouter, Route} from 'react-router-dom';

import classes from './App.module.css';
import Gallery from './components/Carousel/Test';


class App extends Component {

    state = {
        isDesktop: false,
        inputValue: '',
    }

    handleWindowResize = () => {
        this.setState({isDesktop: window.innerWidth >= 500});
    }

    componentDidMount() {
        this.handleWindowResize();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <div className={classes.App}>
                <Headroom disable={this.state.isDesktop}>
                    <div className={classes.Nav}>
                        {this.state.isDesktop ? 'HEADER' : 'Changed Header'}
                    </div>
                </Headroom>


                <Gallery />
                <BrowserRouter>
                    <Route path="/:category" component={categories}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
