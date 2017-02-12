import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends Component {
    state = {
        location: '',
        temp: null,
        isLoading: false
    }

    handleSearch(location) {
        const that = this;
        this.setState({ isLoading: true });
        openWeatherMap.getTemp(location)
        .then(
            function({ temp, location}) {
                that.setState({
                    location,
                    temp,
                    isLoading: false
                });
            },
            function(errorMessage) {
                that.setState({ isLoading: false });
                alert(errorMessage);
            }
        );
    }

    renderMessage() {
        const { isLoading, location, temp } = this.state;
        if (isLoading) {
            return <h3 className="text-center">Fetching weather...</h3>;
        } else if (temp && location) {
            return <WeatherMessage location={location} temp={temp}/>;
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch.bind(this)} />
                {this.renderMessage()}
            </div>
        );
    }
}

export default Weather;
