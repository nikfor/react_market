import React, { Component } from 'react';
import { productsArray } from '../constants/Products';
import Hello from '../components/Hello';
import { Check } from '../classes/Check';
import CheckTable from '../components/CheckTable';

export default class App extends Component {

    render() {
        const check = new Check(productsArray);
        check.add({ id: 2, title: 'Beet', price: 12.30, imageUrl: 'https://hb.bizmrg.com/ydemo/beetroot.jpg'});
        check.add({ id: 2, title: 'Beet', price: 12.30, imageUrl: 'https://hb.bizmrg.com/ydemo/beetroot.jpg'});
        
        return(
            <div>
                <Hello/>
                <CheckTable items={check.summary_list()}/>
            </div>

        )
    }
}