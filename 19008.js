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

const main19008 = async() => {
    // await createSpecimen("CF_DNA", "CF_DNA_test_NEW_222");
    // await createSpecimen("PLASMA", "PLASMA_test");

    // const arrKits = await getArrayWithTubes('5ML_SIMPORT_CRYOTUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 5);

    const arrKits = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // await putAnySpecimenInTube(arrKits[0], 100, "CF_DNA_test_NEW_222");

    await putContainerInAnyQueue(arrKits[0], 'PLASMA_SM_ALIQOUT_QUEUE');

};
main19008();
// 19008.js

