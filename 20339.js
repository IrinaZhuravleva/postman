import {
    putAnySpecimenInTube,
    createSpecimen,
    putContainerInAnyQueue,
    putContainerInContainersToStoreQueue
} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {date, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";

const main20339 = async() => {
    await createSpecimen("PLASMA", "PLASMA_test");

    const arrKits = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY', 1);


    await putAnySpecimenInTube(arrKits[0], 10000, "PLASMA_test");
    const arrKits2 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    await putContainerInAnyQueue(arrKits[0], 'MANUAL_POURING_QUEUE');
console.log(arrKits, arrKits2);
};
main20339();
// 20339.js