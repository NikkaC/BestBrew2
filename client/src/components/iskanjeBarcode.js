import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Card } from "react-bootstrap";

function IskanjeBarcode() {
  const [data, setData] = React.useState("Pivo ni bilo najdeno.");
  const [stopStream, setStopStream] = React.useState(false);

return (
  <>
    <center>
      <Card>
        <h1>Iskanje ~ Barcode</h1>
        <div className="w-full h-12">

          <BarcodeScannerComponent
            width={500}
            height={500}
            stopStream={stopStream}
            onUpdate={(err, result) => {
              if (result) {
                setData(result.text);
                setStopStream(true);
              } else {
                setData("Not Found");
              }
            }}
          />
        </div>
        <p>{data}</p>
      </Card>
    </center>
  </>
);
}

export default IskanjeBarcode;