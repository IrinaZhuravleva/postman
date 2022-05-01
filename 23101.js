import {createSpecimenPlasma, queueEllaResultUpload, createSpecimen, putAnySpecimenInTube} from "./functions.js";
import { createOneTube, getArrayWithTubes, createKitWithTubes } from "./tube-types.js";

import {queueUpload} from "./tube-types.js";


const main23101 = async () => {

    // const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','BALTIMORE_AVAILABLE_CONTAINERS', 3);
    // const arr2 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','CAMBRIDGE_AVAILABLE_CONTAINERS', 3);
    //
    // console.log(arr, arr2);
    // [ '6HU5K2U', 'A1KAK98', 'S8C2PK4' ] [ '9S4SF8P', '2SP80UH', '1CP7UP3' ]
    await queueUpload('6HU5K2U', 'PLASMA_CENTRIFUGATION_QUEUE');
    await queueUpload('A1KAK98', 'PLASMA_CENTRIFUGATION_QUEUE');
    await queueUpload('S8C2PK4', 'PLASMA_CENTRIFUGATION_QUEUE');
    await queueUpload('9S4SF8P', 'PLASMA_CENTRIFUGATION_QUEUE');
    await queueUpload('2SP80UH', 'PLASMA_CENTRIFUGATION_QUEUE');
    await queueUpload('1CP7UP3', 'PLASMA_CENTRIFUGATION_QUEUE');

};
main23101();

// 23101.js


