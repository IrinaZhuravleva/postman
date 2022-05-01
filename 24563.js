import {
    createSpecimen,
    putAnySpecimenInTube
} from "./functions.js";
import {createOneTube, getArrayWithTubes, queueUpload } from "./tube-types.js";

const main24563 = async () => {

    // Create 5 x 50ML_EPPENDORF_CONICAL_TUBE
    // POST  'PLASMA' with "volume": 13500 into two 50ML_EPPENDORF_CONICAL_TUBE via specimen_processes
    await createSpecimen('PLASMA', 'PLASMA_test');
    const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 5);
    await putAnySpecimenInTube(arr[0], 13500, 'PLASMA_test');
    await putAnySpecimenInTube(arr[1], 13500, 'PLASMA_test');

// console.log(arr);

};
// main24563();



// 22508.js


