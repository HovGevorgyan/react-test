import React, {Component} from 'react';
import axiosInstance from '../axios-requests';

class categories extends Component {

    state = {
        categories: null,
        category: null
    };

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadData();
    }

    loadData() {
        if(this.props.match.params.category) {
            if(!this.state.categories || (this.state.categories )) {
                axiosInstance.get('categories.json')
                    .then(res => {
                        const categoriesRes = res;
                        let categories = [];
                        for (let key in categoriesRes.data) {
                            categories.push(
                                ...categoriesRes.data[key],
                            )
                        }

                        console.log(categories);
                        // this.setState({categories: categories});
                        console.log(this.state);
                    })
            }
        }
    }

    render() {
        return (
            <div>
                Test!

            </div>
        )
    }
}

export default categories;
