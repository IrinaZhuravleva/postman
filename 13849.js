import {createSpecimenPlasma, putSpecimenInTube} from "./functions.js";
import { createOneTube, getArrayWithTubes, createKitWithTubes } from "./tube-types.js";
import {putSpecimenPlasma, putInQueueElla } from "./specimen-plasma.js";

let arr = [];
const ellaMain13849 = async () => {
    // await createSpecimenPlasma();
    arr = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_PROCESSING_LABORATORY', 2);
    // await arr.forEach(function (item, index) {
    //     putSpecimenInTube(item, 1000);
    // });  //не сработала
    // await putSpecimenInTube(arr[1], 25);
    // await putSpecimenInTube(arr[2], 26);
    // await putSpecimenInTube(arr[3], 100);
    // await putSpecimenInTube(arr[4], 100);
    // await putSpecimenInTube(arr[5], 100);
    // await putSpecimenInTube(arr[6], 100);
    // await putSpecimenInTube(arr[7], 100);
    // await putSpecimenInTube(arr[8], 100);

    await arr.forEach(putInQueueElla);
    // await putInQueueElla('81SP6XF');
};
// ellaMain13849();

// createKitWithTubes(kitType, kitLocation, tubeType, tubeNumber)
// createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1);
// createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 6);

// 13849.js