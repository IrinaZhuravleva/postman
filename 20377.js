import {createSpecimenPlasma, queueEllaResultUpload, createSpecimen, putAnySpecimenInTube} from "./functions.js";
import {createOneTube, getArrayWithTubes, createKitWithTubes, queueUpload} from "./tube-types.js";
import { putSpecimenPlasma, putInQueueElla } from "./specimen-plasma.js";


// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS');
// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY');


// let arr = [ ];
const main20377 = async () => {
    const container1 = await getArrayWithTubes('1_ML_MATRIX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const container2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const container3 = await getArrayWithTubes('0.5_ML_FLUIDX','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const container4 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK','DISPOSAL', 1);
    // const container5 = await getArrayWithTubes('0.9_ML_FLUIDX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);

    await queueUpload(container1[0], 'COBAS_SAMPLE_SETUP_QUEUE');
   // console.log(container1[0],container2[0], container3[0], container4[0], container5[0]);
};
main20377();



// 20377.js


