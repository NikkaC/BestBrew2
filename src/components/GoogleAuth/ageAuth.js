import React from "react"
import "./ageAuthPopUp.css";



export default function AgeAuthPopUp({ closeWindow, popUpState2 }) {

    const handleClick = () => {
        closeWindow(false);
        popUpState2(false);
    };


    return (

        <div className="Background">
            <div className="Container">

                <div className="title">
                    <h1>Ali ste polnoletni?</h1>
                </div>
                <div className="body">

                </div>
                <div className="footer">
                    <button onClick={() => handleClick()} >Potrdi</button>
                    <button>Zavrni</button>
                </div>

            </div>
        </div>

    );
};