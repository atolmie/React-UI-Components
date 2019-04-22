import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="header-title">
            <div>Lambda School</div>
            <div className="light-gray">@lambda_school</div>
            <div className="light-gray">26 Jan</div>
        </div>
    )
}

export default HeaderTitle;