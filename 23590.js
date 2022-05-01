import {
    createSpecimenPlasma,
    queueEllaResultUpload,
    createSpecimen,
    putAnySpecimenInTube,
    putContainerInAnyQueue
} from "./functions.js";
import {getArrayWithTubes, queueUpload } from "./tube-types.js";



// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS');
// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY');

// Create 3 "50 mL Eppendorf Conical" - <balt_tube1>,<balt_tube2> and <balt_tube3> in BALTIMORE_AVAILABLE_CONTAINERS
//     Create 2 "50 ml 4x4 Box" - <balt_box1> and <balt_box2> in BALTIMORE_AVAILABLE_CONTAINERS
//  Create "50 ml 4x4 Box" - <camb_box> in CAMBRIDGE_AVAILABLE_CONTAINERS


            // Create 3 "50 mL Eppendorf Conical" - <camb_tube1>, <camb_tube2> and <camb_tube3> in CAMBRIDGE_AVAILABLE_CONTAINERS
            //
            //
            //
            //     Create 2 "50 ml 4x4 Box" - <orph_box1> and <orph_box2> in ORPHANS

const main23590 = async () => {
    const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY', 3);
    const boxex = await getArrayWithTubes('50_ML_4X4_BOX','BALTIMORE_PROCESSING_LABORATORY', 2);
    const box = await getArrayWithTubes('50_ML_4X4_BOX','CAMBRIDGE_AVAILABLE_CONTAINERS', 1);
    const arrCam = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'CAMBRIDGE_AVAILABLE_CONTAINERS', 3);
    const boxexOrhans = await getArrayWithTubes('50_ML_4X4_BOX','ORPHANS', 2);

    await queueUpload(arr[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(arr[1], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(arr[2], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(arrCam[0], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(arrCam[1], 'CONTAINERS_TO_STORE_QUEUE');
    await queueUpload(arrCam[2], 'CONTAINERS_TO_STORE_QUEUE');

    console.log(`boxex: ${boxex}`);
    console.log(`box: ${box}`);
    console.log(`boxexOrhans: ${boxexOrhans}`);

};
// main23590();



// 23590.js


