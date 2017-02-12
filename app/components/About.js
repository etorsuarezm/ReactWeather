import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

const About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>Hey I've made this Weather App with React and Foundation for UI styling.</p>            
            <h2 className="text-center">Who am I ?</h2>
            <div className="text-center">
                <Gravatar email="etorsuarez@gmail.com" size={150} />
            </div>
            <br/>
            <br/>
            <p>Birth developer, JS by choice and React/React Native by passion</p>
            <h2 className="text-center">Tools I used:</h2>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>- JS Framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a>- Free access Weather API I used
                    to get weather data by city name.
                </li>
                <li>
                    <a href="http://foundation.zurb.com/">Foundation</a>- UI Framework.
                </li>
            </ul>

        </div>
        
    );
}

export default About;
