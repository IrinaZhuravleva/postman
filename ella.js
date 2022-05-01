import {createSpecimenPlasma, queueEllaResultUpload} from "./functions.js";
import { createOneTube, getArrayWithTubes, createKitWithTubes } from "./tube-types.js";
import { putSpecimenPlasma, putInQueueElla } from "./specimen-plasma.js";


// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS');
// createOneTube('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY');


let arr = [ '69KC5KA', 'A45F5UN', 'UK4U2A3' ];
const ellaMain = async () => {
    // // await createSpecimenPlasma();
    // arr = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY', 1);

    await arr.forEach(putSpecimenPlasma);
    // // await putSpecimenPlasma('81SP6XF');
    await arr.forEach(putInQueueElla);
    // await putInQueueElla('A45F5UN');

    // await createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1);
};
// ellaMain();
createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1);
// putInQueueElla('A45F5UN');
// getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY', 1);
// getArrayWithTubes('COBAS_SAMPLE_CUP','BALTIMORE_PROCESSING_LABORATORY', 1);
// getArrayWithTubes('2_ML_SCREW_CAP_TUBE','BALTIMORE_PROCESSING_LABORATORY', 1);


// createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1);
