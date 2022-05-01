import axios from 'axios';
import { token } from './token.js'
// import { tubeType, location } from './tube-types';
import { createCollectEventBalt, createCollectEventArrayCamb } from './collectionEvents.js';
export const config = {
    headers: { Authorization: `Bearer ${token}` }
};


// export const kits = [];
const tubeNumber = 1;

export const createKitOneTube = async () => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/kit_orders', {
            "kitType": "ALLIED_KIT",
            "kitsNumber": 2,
            "parentContainerCode": "ALLIED",
            "tubes": [{"type": "STRECK_CELL_FREE_DNA_BCT", "number": tubeNumber, "name": "Streck Blood Tube", "showNumber": `${tubeNumber}`}]
        }, config);

        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
// createKitOneTube();

export const createKitOneTube2 = async () => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/kit_orders', {
            "kitType": "ALLIED_LBGARD_KIT_V1",
            "kitsNumber": 3,
            "parentContainerCode": "ALLIED",
            "tubes": [{"type": "LBGARD_TUBE", "number": tubeNumber, "name": "LBGard Tube v1.x", "showNumber": `${tubeNumber}`}]
        }, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
// createKitOneTube2();


// let arr = ['6AF36CC', 'A40XX6H'];
//
// arr.forEach(createCollectEventArray);