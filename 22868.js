import {createKitWithTubes, createOneTube, getArrayWithTubes, queueUpload} from './tube-types.js'
import {createCollectEventNew, collectionDate} from './collectionEvents.js'
import {
    createSpecimen,
    putAnySpecimenInTube, putContainerInAnyQueue
} from "./functions.js";
import {getStorage} from "./storage.js";
import axios from "axios";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";


const main22868 = async () => {
    const tube1 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
    const tube2 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
    const tube3 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');

    // const tube4 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');
    // const tube5 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');
    // const tube6 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');

    // await createSpecimen("PLASMA", "spTimestamp");

    await putAnySpecimenInTube(tube1, 10000, "spTimestamp");
    await putAnySpecimenInTube(tube2, 10000, "spTimestamp");
    await putAnySpecimenInTube(tube3, 10000, "spTimestamp");

    // await updateLocation('8HK25HF', 'CAMBRIDGE_WIP_REAGENTS');
    // const resp = await getStorage('DESTCONTAINER_1');
    // const storage = resp.data;
    // console.log(storage);
    // updateLocation('190SUSN', 'BALTIMORE_WIP_REAGENTS');
    // await createCollectEventNew('HA117PU', 'ship1', 'log', 'BALTIMORE', collectionDate);

    await queueUpload(tube1, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    await queueUpload(tube2, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    await queueUpload(tube3, 'GENERIC_CFDNA_EXTRACTION_QUEUE');

    console.log(tube1, tube2, tube3);

    // 37KU1KH 512HNNH PSNX256

};

// main22868();

// 22868.js

// ANCA675 29XKP3K 98UXK3K
