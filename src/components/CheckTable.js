import React, { Component } from 'react';

export default class CheckTable extends Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.items.map(
                            (item) => { return(
                                <tr key={ item.id }>
                                    <td>{ item.title }</td>
                                    <td>{ item.count }</td>
                                    <td>{ item.price }</td>
                                    <td>{ item.count * item.price }</td>
                                </tr>
                            )}
                        )
                    }
                </tbody>
                
                
            </table>
        )
    }
}

