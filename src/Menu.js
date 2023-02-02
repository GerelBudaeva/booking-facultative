import React from 'react';

const Menu = () => {
    const headerMenu = ['Home', 'Apartments', 'Villas', 'Townhouses']

    return (
        <div>
            {headerMenu.map((el, i) => <li key={el}>{el}</li>)}
        </div>
    );
};

export default Menu;
