import {createKitWithTubes, createOneTube, getArrayWithTubes, queueUpload} from './tube-types.js'
import {createCollectEventNew, collectionDate} from './collectionEvents.js'
import {
    createSpecimen,
    putAnySpecimenInTube, putContainerInAnyQueue
} from "./functions.js";
import {getStorage} from "./storage.js";
import axios from "axios";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";


const main22996 = async () => {
    const tube1 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
    const tube2 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
    const tube3 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
    const tube4 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');

    const tube5 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');
    const tube6 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');

    // await createSpecimen("PLASMA", "spTimestamp");
    // await createSpecimen("SERUM", "SER-TEST");
    await putAnySpecimenInTube(tube1, 10000, "spTimestamp");
    await putAnySpecimenInTube(tube2, 10000, "spTimestamp");
    await putAnySpecimenInTube(tube3, 10000, "spTimestamp");
    await putAnySpecimenInTube(tube4, 100, "SER-TEST");
    // await putAnySpecimenInTube(tube4, 10000, "spTimestamp");
    // await putAnySpecimenInTube(tube5, 10000, "spTimestamp");
    // await putAnySpecimenInTube(tube6, 10000, "spTimestamp");

    // await updateLocation('8HK25HF', 'CAMBRIDGE_WIP_REAGENTS');
    // const resp = await getStorage('DESTCONTAINER_1');
    // const storage = resp.data;
    // console.log(storage);
    // updateLocation('190SUSN', 'BALTIMORE_WIP_REAGENTS');
    // await createCollectEventNew('HA117PU', 'ship1', 'log', 'BALTIMORE', collectionDate);

    await queueUpload(tube1, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    await queueUpload(tube2, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    await queueUpload(tube3, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // await queueUpload(tube4, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // await queueUpload(tube5, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // await queueUpload(tube6, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    //
    console.log(tube1, tube2, tube3, tube4);
    // console.log(tube1, tube2, tube3);
    console.log(tube5, tube6);
    // PF2H01X 9CX8K0S FXP7F07

};
// P7KC8H2 X08AXH9 NH4XP53

// A8F5K5C U1KUN73 S1US2N7 tube1, tube2, tube3);

// PF2H01X 9CX8K0S FXP7F07


main22996();

// 22996.js


