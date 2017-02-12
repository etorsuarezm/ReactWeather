import React, { Component } from 'react';
import { Link } from 'react-router';

const Examples = (props) => {
        return (  
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are a few example locations to try out</p>
                <ol>
                    <li>
                        <Link to="/?location=Leon,Gto">León, Gto.</Link>
                    </li>
                    <li>
                        <Link to="/?location=Punta Cana">Punta Cana</Link>
                    </li>
                </ol>
            </div>
            
        );
}

export default Examples;
