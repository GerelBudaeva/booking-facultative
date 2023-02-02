import React from 'react';
import {nanoid} from 'nanoid';

const FooterMenu = () => {

const footerMenu = [
    {
        id: nanoid(),
        title: 'Support'
    },
    {
        id: nanoid(),
        title: 'Help center'
    },
    {
        id: nanoid(),
        title: 'AirCover'
    },
    {
        id: nanoid(),
        title: 'Cancellation options'
    },

]
    return (
        <div>

            {footerMenu.map(el => <li key={el.id}>{el.title}</li>)}
        </div>
    );
};

export default FooterMenu;
