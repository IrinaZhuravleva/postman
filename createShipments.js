import axios from 'axios';
import { token } from './token.js'
import { createKitWithTubes } from './tube-types.js';
import { createCollectEventBalt, createCollectEventArrayCamb } from './collectionEvents.js';
export const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export const findShipment = async (shipmentName) => {
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

// findShipment('EXISTS');

export const createShipment = async (shipmentName, location) => {
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



// createShipment('EXISTS', 'BALTIMORE_AVAILABLE_CONTAINERS');
// createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1);

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

export const moveShipmentUpdated = async (shipmentName, newParentCode) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_location_management/move',
            { codes: [shipmentName], newParentCode: newParentCode}, config);
        // let tube = resp.data.storage.code;
        // console.log(resp);
        // return tube;
    } catch (err) {
        console.error(err);
    }
};
