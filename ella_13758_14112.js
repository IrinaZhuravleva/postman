import {createSpecimenPlasma, queueEllaResultUpload} from "./functions.js";
import { createOneTube, getArrayWithTubes, createKitWithTubes } from "./tube-types.js";
import { putSpecimenPlasma, putInQueueElla } from "./specimen-plasma.js";


// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS');
// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY');


let arr = [ ];
const ellaMain = async () => {
    // await createSpecimenPlasma();
    arr = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY', 4);
    // await getArrayWithTubes('COBAS_SAMPLE_CUP','BALTIMORE_PROCESSING_LABORATORY', 1);
    // await getArrayWithTubes('2_ML_SCREW_CAP_TUBE','BALTIMORE_PROCESSING_LABORATORY', 1);
    // await arr.forEach(putSpecimenPlasma);
    // await putSpecimenPlasma('69KC5KA');
    // await putSpecimenPlasma('A45F5UN');
    // await putSpecimenPlasma('UK4U2A3');


    // await arr.forEach(putInQueueElla);
    // await putInQueueElla('UN34SX8');

    // await createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1);

};
// ellaMain();

// putInQueueElla('UHF0X62');
// putInQueueElla('U553NHK');
// putInQueueElla('2H7H7HA');

// какая-то проблема с количеством образующихся туб
// putInQueueElla('A45F5UN');
// getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY', 1);
// getArrayWithTubes('COBAS_SAMPLE_CUP','BALTIMORE_PROCESSING_LABORATORY', 1);
// getArrayWithTubes('2_ML_SCREW_CAP_TUBE','BALTIMORE_PROCESSING_LABORATORY', 1);

// createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1);


// ella_13758_14112.js

