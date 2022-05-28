import '../styles/modal.css';
import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';


function Modal({ handleClose, show, children }) {
    const prikaz = show ? "modal display-block" : "modal display-none";
    const [podatki, setPodatki] = React.useState("Pivo ni bilo najdeno.");
    const [stopStream, setStopStream] = React.useState(false);

    return (
        <div className={prikaz}>
            <section className="modal-main">
                {children}
                <>
                <BarcodeScannerComponent
                    width = {500}
                    height = {500}
                    facingMode = {"environment"}
                    stopStream = {stopStream}
                    onUpdate = {(err, result) => {
                        if(result) {
                            setPodatki(result.text);
                            setStopStream(true);
                        } else {
                            setPodatki("Pivo ni bilo najdeno.");
                        }
                    }}
                    
                />
                </>
                <p>{podatki}</p> 
                <button type="button" onClick={handleClose}>
                    Zapri
                </button>
            </section>
        </div>
    );
};

export default Modal;