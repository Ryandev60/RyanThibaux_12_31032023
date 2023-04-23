import React from 'react';

/**
 * LeftBar component
 * @description - Component to display the left bar
 * @returns {JSX.Element} - LeftBar component
 * */

const LeftBar = () => {
    return (
        <aside className="leftbar">
            <div className="square">
                <img src="../images/meditation.png" alt="Logo méditation" />
            </div>
            <div className="square">
                <img src="../images/swim.png" alt="Logo nage" />
            </div>
            <div className="square">
                <img src="../images/velo.png" alt="Logo velo" />
            </div>
            <div className="square">
                <img src="../images/fitness.png" alt="Logo fitness" />
            </div>
        </aside>
    );
};

export default LeftBar;
