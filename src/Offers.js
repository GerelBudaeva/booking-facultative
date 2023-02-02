import React from 'react';
import { nanoid } from 'nanoid'

const Offers = () => {

    const villas = [
        {id: nanoid(),
            title: 'Sea view',
            address: {
            city: 'NY',
             street: 'Meridian',
             building: 3
            },
            price: 4000,
            description: '2 bedrooms, sea view, 2000 sqft'
            },
        {id: nanoid(),
            title: 'Sunrise',
            address: {
                city: 'Seattle',
                street: '5th ave',
                building: 12
            },
            price: 6000,
            description: '3 bedrooms, by the Pike market, 3000 sqft'
        },
    ]

    return (
        <ul>
            {villas.map(el => <li key={el.id}>
                <hr/>
                <strong>{el.title} </strong>
                <br/>
                <i> {el.address.city + ' ' + el.address.street + ' ' + el.address.building } </i>
                <br/>
                {el.description}
                <br/>
                Price: $ { el.price }
                </li>
            )}
        </ul>
    );
};

export default Offers;
