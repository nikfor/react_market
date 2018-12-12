import React, { Component } from 'react';
import { productsArray } from '../constants/Products';
import Catalog from '../components/Catalog';

export default class App extends Component {

    render() {        
        return(
            <Catalog products={productsArray}/>
        )
    }
}