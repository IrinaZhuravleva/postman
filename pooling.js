import {getArrayWithTubes} from "./tube-types.js";
import {
    createSpecimen,
    putAnySpecimenInTube, putContainerInAnyQueue
} from "./functions.js";

const pooling = async () => {

    // await putContainerInAnyQueue('', 'POOLING_PLASMA_QUEUE');
    const arrKits = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1); //?
};

pooling();

// pooling.js