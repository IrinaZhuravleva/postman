import {putAnySpecimenInTube, createSpecimen} from "./functions.js";
import {getArrayWithTubes} from "./tube-types.js";
import {date, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";


const contentPoolingTransferRun = `CONTAINER_CONTENT_POOLING_TRANSFER_${date}${upperCaseMonth}21_190`;



const main20084 = async() => {
    await createSpecimen("PLASMA", "test");
    const arrKits = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY', 4); //?

    const tubeWithVolume = arrKits[2];
    await putAnySpecimenInTube(tubeWithVolume, 5000, "test");

    const tubesWithoutVolume = arrKits.splice(0, 2);

    await tubesWithoutVolume.forEach(function (item, index) {
            putAnySpecimenInTube(item, null, "test");
    });

};

// main20084();

// 20084.js

