import {getArrayWithTubes} from "./tube-types.js";
import {createSpecimenPlasma, putAnySpecimenInTube} from "./functions.js";

const main = async() => {
    await createSpecimenPlasma('test');
    // const tube1 = await getArrayWithTubes('1.5_ML_EPPENDORF_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    const tube2 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 2);
    // await getArrayWithTubes('PLATE_96_PCR', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    await aliquoting(tube1[0], 10,'test');
    // await putAnySpecimenInTube(tube2[0], 10,'test');
    // await putAnySpecimenInTube(tube2[0], 30000,'test');


}

main();

// 23783.js
//