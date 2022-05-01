import axios from "axios";

import { token } from './token.js'
export const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const shipmentCamb = 'sh_camb';
export const shipment = 'EXISTS';
const logTag = 'lgHAK48A9';

const today = new Date();
export const collectionDate = today.toUTCString();
// const collectionDate = 'Tue, 15 Jun 2021 05:15:57 GMT';

export const createCollectEventBalt = async (item) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/kit_collection_event/${item}`, {
            "kitCode": item,
            "collectionDate": collectionDate,
            "personId": "",
            "json": {
                "processingFailed": false,
                "redrawRequested": false,
                "destination": "BALTIMORE",
                "shipment": shipment,
            },
            "contextCode": "VISIT_1",
            "shipment": {
                "shipment": shipment,
                "destination": "BALTIMORE"
            }
        }, config);
    } catch (err) {
        console.error(err);
    }
};

export const createCollectEvent = async (item, shipment, location, date) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/kit_collection_event/${item}`, {
            "kitCode": item,
            "collectionDate": date,
            "personId": "",
            "json": {
                "processingFailed": false,
                "redrawRequested": false,
                "destination": location,
                "shipment": shipment,
            },
            "contextCode": "VISIT_1",
            "shipment": {
                "shipment": shipment,
                "destination": location
            }
        }, config);
    } catch (err) {
        console.error(err);
    }
};

export const createCollectEventNew = async (item, shipment, tempLog, location, date) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/kit_collection_event/${item}`, {
            "kitCode": item,
            "collectionDate": date,
            "personId": "",
            "json": {
                "processingFailed": false,
                "redrawRequested": false
            },
            "destinationSite": location,
            "processingFailed": false,
            "redrawRequested": false,
            "contextCode": "VISIT_1",
            "shipment": {
                "shipment": shipment,
                "destinationSite": location,
                "tempLogId": tempLog,
                "tempLogType": "LOGTAG"
            },
            "tempLogId": tempLog,
            "tempLogType": "LOGTAG",
            "systemJson": {}
        }, config);
    } catch (err) {
        console.error(err);
    }
};

export const createCollectEventArrayCamb = async (item) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/kit_collection_event/${item}`, {
            "kitCode": item,
            "collectionDate": collectionDate,
            "personId": "",
            "json": {
                "processingFailed": false,
                "redrawRequested": false,
                "destination": "CAMBRIDGE",
                "shipment": shipmentCamb
            },
            "contextCode": "VISIT_1",
            "shipment": {
                "shipment": shipmentCamb,
                "destination": "CAMBRIDGE"
            }
        }, config);
    } catch (err) {
        console.error(err);
    }
};
