import {Component} from 'react';

class Greeting extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user: 'New User'     
        };
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.user}</h1>
            </div>
        );

    }

}
export default Greeting;