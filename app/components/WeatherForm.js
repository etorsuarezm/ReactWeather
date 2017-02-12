import React, { Component } from 'react';

class WeatherForm extends Component {
    
    onButtonClick(e) {
        e.preventDefault();
        const { locationText } = this.refs;
        const location = locationText.value;
        if (location.length > 0) {
            locationText.value = '';
            this.props.onSearch(location);
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onButtonClick.bind(this)}>
                    <div>
                        <input 
                            type="text"
                            placeholder="Enter City Name"
                            ref="locationText"
                        /> 
                    </div>
                    <div>
                        <button className="button expanded hollow">Get Weather</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default WeatherForm;
