import React from 'react';

const LiIcon = () => {
    return (
        <div>
            <figure className="absolute left-0">
                <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                    <circle cx="75" cy="50" r="20" className="stroke-primary stroke-[10px] fill-none"/>
                    <circle cx="75" cy="50" r="20" className="stroke-[5px] fill-text"/>
                    <circle cx="75" cy="50" r="10" className="stroke-1 fill-contrastDark"/>
                </svg>
            </figure>
        </div>
    );
};

export default LiIcon;