import {createSpecimenPlasma, queueEllaResultUpload} from "./functions.js";
import { createOneTube, getArrayWithTubes, createKitWithTubes } from "./tube-types.js";
import { putSpecimenPlasma, putInQueueElla } from "./specimen-plasma.js";
import {moveShipmentUpdated} from "./createShipments.js";

let arr = [ '9NF0CP1','UNC663F'];
const ellaMain = async () => {
    // await createSpecimenPlasma();

    // Step 1. Create 2 tubes
    // createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS');
    // createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY');

    // Step 2. Put plasma in 2 tubes
    // await arr.forEach(putSpecimenPlasma);

    // await putSpecimenPlasma('69KC5KA');
    // await putSpecimenPlasma('A45F5UN');
    // await putSpecimenPlasma('UK4U2A3');

    // Step 3. Put 2 tubes in Ella Result Upload Queue
    // await arr.forEach(putInQueueElla);
    // await putInQueueElla('UN34SX8');

    // await createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1);

    //Step 14. Change location
    await moveShipmentUpdated('UNC663F', 'BALTIMORE_PROCESSING_LABORATORY');
};
ellaMain();

// putInQueueElla('UHF0X62');
// putInQueueElla('U553NHK');
// putInQueueElla('2H7H7HA');

// какая-то проблема с количеством образующихся туб
// putInQueueElla('A45F5UN');
// getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY', 1);
// getArrayWithTubes('COBAS_SAMPLE_CUP','BALTIMORE_PROCESSING_LABORATORY', 1);
// getArrayWithTubes('2_ML_SCREW_CAP_TUBE','BALTIMORE_PROCESSING_LABORATORY', 1);

// createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1);


// ella_13694.js

// post
// https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs
// {"runTypeCode":"ELLA_RESULT_UPLOAD",
//     "runCategoryCode":"ELLA_PROTEIN_QUANTIFICATION",
//     "runName":"ELLA_RESULT_UPLOAD_21JUN21_101",
//     "containersInQueues":[{
//     "containerCode":"UNC663F",
//     "queueCode":"ELLA_RESULT_UPLOAD_QUEUE"},
//     {"containerCode":"9NF0CP1",
//     "queueCode":"ELLA_RESULT_UPLOAD_QUEUE"}],
//     "forceCreate":false,
//     "site":"BALTIMORE"}

XK99KK7
C06NA9U