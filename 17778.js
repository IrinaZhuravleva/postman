import {createKitWithTubes, createOneTube} from './tube-types.js'
import {createCollectEventBalt, createCollectEventArrayCamb} from "./collectionEvents.js";

import {createKitReceivingRun} from "./index.js";

let kits = [];

const getKitArray = async (kitAmount) => {
    for (let i = 0; i < kitAmount; i++) {
        let kit = await createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1);
        kits.push(kit);
    }
    // return kits;
    console.log(kits);
}

// getKitArray(6);



// createCollectEventBalt

// createKitReceivingRun();

// const BT2 = ['U5SA14A', '2FXC18C'];
// const BT1 = ['C8FU2S5'];
// const BT3 = ['SS96FN4', 'AUS984U', '3UF2N7X'];
//
// BT3.forEach(createCollectEventBalt);