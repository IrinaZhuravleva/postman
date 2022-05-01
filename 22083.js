import {createSpecimenPlasma, queueEllaResultUpload, createSpecimen, putAnySpecimenInTube} from "./functions.js";
import { createOneTube, getArrayWithTubes, createKitWithTubes } from "./tube-types.js";
import { putSpecimenPlasma, putInQueueElla } from "./specimen-plasma.js";



const main22083 = async () => {
    await createSpecimen("PLASMA", "plasma1");
    await createSpecimen("BLOOD", "BLOOD1");
    await createSpecimen("SERUM", "SERUM1");

    const arr = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','BALTIMORE_AVAILABLE_CONTAINERS', 6);

    await putAnySpecimenInTube(arr[1], 100, "plasma1");
    await putAnySpecimenInTube(arr[2], 100, "SERUM1");
    await putAnySpecimenInTube(arr[3], 100, "BLOOD1");
    await putAnySpecimenInTube(arr[4], 100, "BLOOD1");
    await putAnySpecimenInTube(arr[4], 100, "plasma1");
    await putAnySpecimenInTube(arr[4], 100, "SERUM1");

    const box = await getArrayWithTubes('BOX','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const rack1 = await getArrayWithTubes('0.9_ML_FLUIDX_RACK','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const tube6 = await getArrayWithTubes('0.5_ML_FLUIDX','BALTIMORE_AVAILABLE_CONTAINERS', 1);


    console.log(arr[0], arr[1], arr[2], arr[3], arr[4], tube6[0],rack1[0],box[0]);

};
main22083();

// 22083.js


