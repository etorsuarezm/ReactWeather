import React, { Component } from 'react';

const WeatherMessage = ({ location, temp }) => {
    return (
        <h3 className="text-center">It is {temp} in {location} </h3>
    );
};

export default WeatherMessage;
