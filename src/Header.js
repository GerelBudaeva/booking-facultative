import React from 'react';
import Menu from './Menu';
import SiteName from './SiteName';

const Header = () => {
    return (
        <div>
            <SiteName/>
            <Menu/>
        </div>
    );
};

export default Header;
