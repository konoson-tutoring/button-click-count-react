import React, {PureComponent} from 'react';

class App extends PureComponent {
    state = {
        clickCount: 0
    };

    handleClickEvent = () => {
      this.setState({clickCount: this.state.clickCount + 1});
    };

    render() {
        return (
            <div>
                <p>You have clicked this button {this.state.clickCount} times.</p>
                <button onClick={this.handleClickEvent}>Button</button>
            </div>
        );
    }
}

export default App;
