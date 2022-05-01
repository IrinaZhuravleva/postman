import axios from 'axios';

const collectionDate = "Wed, 09 Jun 2021 10:43:20 GMT";
export const shipment = 'ship1';
const logTag = 'lgHAK48A8';
// export const kits = [];
const tubeNumber = 1;

export const createKitOneTube = async () => {
    try {
        const resp = await axios.post('https://dev.lims.thrivedetect.com/core-services/container/api/v1/kit_orders', {
            "kitType": "ALLIED_KIT",
            "kitsNumber": 1,
            "parentContainerCode": "ALLIED",
            "tubes": [{"type": "STRECK_CELL_FREE_DNA_BCT", "number": tubeNumber, "name": "Streck Blood Tube", "showNumber": `${tubeNumber}`}]
        });
        // console.log(resp.data.orderID);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

createKitOneTube();

export const createKitOneTube2 = async () => {
    try {
        const resp = await axios.post('https://dev.lims.thrivedetect.com/core-services/container/api/v1/kit_orders', {
            "kitType": "ALLIED_LBGARD_KIT_V1",
            "kitsNumber": 1,
            "parentContainerCode": "ALLIED",
            "tubes": [{"type": "LBGARD_TUBE", "number": tubeNumber, "name": "LBGard Tube v1.x", "showNumber": `${tubeNumber}`}]
        });
        // console.log(resp.data.orderID);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

// createCollectEvent
export const createCollectEvent = async (kit) => {
    try {
        const resp = await axios.post(`https://dev.lims.thrivedetect.com/core-services/container/api/v1/kit_collection_event/${kit}`, {
            "kitCode": kit,
            "collectionDate": collectionDate,
            "personId": "",
            "json": {
                "processingFailed": false,
                "redrawRequested": false,
                "destination": "BALTIMORE",
                "shipment": shipment,
                "tempLogId": logTag
            },
            "contextCode": "VISIT_1",
            "shipment": {
                "shipment": shipment,
                "destination": "BALTIMORE",
                "tempLogId": logTag
            }
        });
    } catch (err) {
        console.error(err);
    }
};

