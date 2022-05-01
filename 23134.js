import {createKitWithTubes, createOneTube, getArrayWithTubes, queueUpload} from './tube-types.js'
import {createCollectEventNew, collectionDate} from './collectionEvents.js'
import {
    createSpecimen,
    putAnySpecimenInTube, putContainerInAnyQueue
} from "./functions.js";
import {getStorage} from "./storage.js";



const main23134 = async () => {
    const container_1 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'CAMBRIDGE_AVAILABLE_CONTAINERS');
    const container_2 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'CAMBRIDGE_AVAILABLE_CONTAINERS');
    const container_3 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'CAMBRIDGE_AVAILABLE_CONTAINERS');

    const camb_rack_1 = await createOneTube('0.5_ML_FLUIDX_RACK', 'CAMBRIDGE_AVAILABLE_CONTAINERS');
    const balt_rack_1 = await createOneTube('0.5_ML_FLUIDX_RACK', 'BALTIMORE_PROCESSING_LABORATORY');
    const orth_rack_1 = await createOneTube('0.5_ML_FLUIDX_RACK', 'ORPHANS');
    const und_rack_1 = await createOneTube('0.5_ML_FLUIDX_RACK', 'ship001');

    const camb_rack_tube_dest_A1 = await createOneTube('0.5_ML_FLUIDX', `${camb_rack_1}_A.1`);
    const camb_rack_tube_dest_A2 = await createOneTube('0.5_ML_FLUIDX', `${camb_rack_1}_A.2`);
    const camb_rack_tube_dest_A3 = await createOneTube('0.5_ML_FLUIDX', `${camb_rack_1}_A.3`);


    await createSpecimen("PLASMA", "spTimestamp");

    await putAnySpecimenInTube(container_1, 10000, "spTimestamp");
    await putAnySpecimenInTube(container_2, 10000, "spTimestamp");
    await putAnySpecimenInTube(container_3, 10000, "spTimestamp");


    // await updateLocation('8HK25HF', 'CAMBRIDGE_WIP_REAGENTS');
    // const resp = await getStorage('DESTCONTAINER_1');
    // const storage = resp.data;
    // console.log(storage);

    await queueUpload(container_1, 'CFDNA_EXTRACTION_QUEUE');
    await queueUpload(container_2, 'CFDNA_EXTRACTION_QUEUE');
    await queueUpload(container_3, 'CFDNA_EXTRACTION_QUEUE');
    // await queueUpload(tube4, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // // await queueUpload(tube5, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // // await queueUpload(tube6, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // //
    console.log(container_1, container_2, container_3);
    console.log(camb_rack_1, balt_rack_1, orth_rack_1, und_rack_1);
    console.log(camb_rack_tube_dest_A1, camb_rack_tube_dest_A2, camb_rack_tube_dest_A3);
};

// main23134();

// 23134.js