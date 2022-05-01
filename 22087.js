import {createSpecimenPlasma, queueEllaResultUpload, createSpecimen, putAnySpecimenInTube} from "./functions.js";
import { createOneTube, getArrayWithTubes, createKitWithTubes } from "./tube-types.js";


const main22087 = async () => {
    await createSpecimen("PLASMA", "plasma1");
    await createSpecimen("BLOOD", "BLOOD1");
    await createSpecimen("SERUM", "SERUM1");
    await createSpecimen("CF_DNA", "CF_DNA1");
    await createSpecimen("BUFFY_COAT", "BUFFY1");

    const tube1 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const tube2 = await getArrayWithTubes('0.9_ML_FLUIDX','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const tube3 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D','BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const arr = await getArrayWithTubes('0.5_ML_FLUIDX','BALTIMORE_AVAILABLE_CONTAINERS', 5);

    await putAnySpecimenInTube(tube2[0], 100, "CF_DNA1");
    await putAnySpecimenInTube(tube3[0], 100, "CF_DNA1");
    await putAnySpecimenInTube(arr[0], 100, "CF_DNA1");

    await putAnySpecimenInTube(arr[1], 100, "plasma1");
    await putAnySpecimenInTube(arr[2], 100, "SERUM1");

    await putAnySpecimenInTube(arr[3], 100, "BUFFY1");
    await putAnySpecimenInTube(arr[4], 100, "BLOOD1");
    
    console.log(tube1, tube2,tube3, arr);
};
// main22087();
// 22087.js

