import {putAnySpecimenInTube, createSpecimen} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";

const main14387 = async() => {
    const specName = 'BUFFY-test';
    await createSpecimen("BUFFY_COAT", specName);

    const arrKits = await getArrayWithTubes('5ML_SIMPORT_CRYOTUBE', 'BALTIMORE_PROCESSING_LABORATORY', 5); //?

    await arrKits.forEach(function (item, index) {
        putAnySpecimenInTube(item, 3000, specName);

    });

    // const arrKits = [ 'HXF921U', 'N1PH09P', 'S436SHX', 'X70A3PP', '92SSX9S' ];
    await arrKits.forEach(function (item, index) {
        queueUpload(item, 'BUFFY_ALIQUOT_QUEUE');
    });


};
main14387();

// 14387.js