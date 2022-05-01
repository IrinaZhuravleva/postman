import {
    putAnySpecimenInTube,
    createSpecimen,
    putContainerInAnyQueue,
    putContainerInContainersToStoreQueue, getParentFromStorage, createAnyRunNew, startAnyBloodProcessingRunNew, getSpecimenFromStorage
} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {date, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";
import {createShipment} from "./createShipments.js";
const main28900 = async() => {


    await createSpecimen('PLASMA', 'PLASMA_test');
    await putAnySpecimenInTube('TEST_SARSTEDT_Pooling', 100, "PLASMA_test");

};
main28900();
// 28900.js

