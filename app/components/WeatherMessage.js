import React, { Component } from 'react';

const WeatherMessage = ({ location, temp }) => {
    return (
        <h1>It is {temp} in {location} </h1>
    );
};

export default WeatherMessage;
