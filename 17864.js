import axios from 'axios';
import { token } from './token.js'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
import {createKitWithTubes, createOneTube} from './tube-types.js'
import {createCollectEventBalt, createCollectEventArrayCamb} from "./collectionEvents.js";
import {createKitReceivingRun, startKitReceivingRun, scanShipmentKitReceivingRun} from "./index.js";
// location: "BALTIMORE_AVAILABLE_CONTAINERS",
const kitReceivingRun = 'KIT_RECEIVING_15JUN21_120';
const findShipment = async (shipmentName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/existing_container_management/find',
            { barcode: shipmentName}, config);
        // let tube = resp.data.storage.code;
        console.log(resp);
        // return tube;
    } catch (err) {
        console.error(err);
    }
};

// findShipment('');
const createShipment = async (shipmentName, location) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/existing_container_management/create',
            { barcode: shipmentName,
                code: shipmentName,
                id: shipmentName,
                json: {},
                location: location,
                type: "SHIPMENT"}, config);
        // let tube = resp.data.storage.code;
        console.log(resp);
        // return tube;
    } catch (err) {
        console.error(err);
    }
};

const findShipmentUpdated = async (shipmentName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_location_management/find',
            { barcode: shipmentName}, config);
        // let tube = resp.data.storage.code;
        console.log(resp);
        // return tube;
    } catch (err) {
        console.error(err);
    }
};

const moveShipmentUpdated = async (shipmentName, newParentCode) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_location_management/move',
            { codes: [shipmentName], newParentCode: newParentCode}, config);
        // let tube = resp.data.storage.code;
        console.log(resp);
        // return tube;
    } catch (err) {
        console.error(err);
    }
};
// createKitReceivingRun();
// startKitReceivingRun();

// [ '3AKK8A7', '3XCH4K7' ] //'EXISTS'
//[ '09UPFC5', 'SA875UP' ]

// scanShipmentKitReceivingRun('EXISTS');

// findShipment('FREESHIP2');
// createShipment('FREESHIP2', 'BALTIMORE_AVAILABLE_CONTAINERS');

// createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'FREESHIP2', 'LBGARD_TUBE', 1); //1 kit <LBgard_free> A738CHP
// createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'FREESHIP2');//1 tube <epp_tube_free> H2C7PK5

// findShipment('DSPSHIP2');
// createShipment('DSPSHIP2', 'BALTIMORE_AVAILABLE_CONTAINERS');

// createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'DSPSHIP2', 'LBGARD_TUBE', 1);

// findShipmentUpdated('DSPSHIP2');
// moveShipmentUpdated('DSPSHIP2', 'DISPOSAL');
// createShipment('LOOSE', 'BALTIMORE_AVAILABLE_CONTAINERS');
// createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'LOOSE', 'LBGARD_TUBE', 1);

// 1. shipment <FREESHIP> FREESHIP
//
// 2. add into it: 1 kit <LBgard_free> 3N0UX7C and 1 tube <epp_tube_free> CU63SP1
//
// 3. shipment in DISPOSAL <DSPSHIP2> DSPSHIP2 with another kit inside <LB_gard2>.26A6AKH
//
// 4. Create another shipment <LOOSE> LOOSE with a custom kit inside <loose_kit>. KNCK331
//
// 5. Scan <FREESHIP> into the queue INBOUND_CAMBRIDGE.


// https://qa.lims.thrivedetect.com/core-services/webui/queueEdit/INBOUND_BALTIMORE/1
// {containers: ["FREESHIP"]}