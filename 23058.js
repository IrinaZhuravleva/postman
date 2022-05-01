import {createKitWithTubes, createOneTube, getArrayWithTubes, queueUpload} from './tube-types.js'
import {createCollectEventNew, collectionDate} from './collectionEvents.js'
import {
    createSpecimen,
    putAnySpecimenInTube, putContainerInAnyQueue
} from "./functions.js";
import {getStorage} from "./storage.js";
import axios from "axios";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";


const main23053 = async () => {
    // const source1 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
    // const source2 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');

    // getStorage('HAN50F8');
    const desttube1 = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY');
    const desttube2 = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY');
    //
    const desttube3 = await createOneTube('0.5_ML_FLUIDX', 'CAMBRIDGE_PROCESSING_LABORATORY');
    // const tube6 = await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');

    // await createSpecimen("PLASMA", "spTimestamp");
    // await createSpecimen("SERUM", "SER-TEST");
    // await putAnySpecimenInTube(source1, 500, "spTimestamp");
    // await putAnySpecimenInTube(source2, 500, "spTimestamp");
    // await putAnySpecimenInTube(tube3, 10000, "spTimestamp");
    // await putAnySpecimenInTube(tube4, 100, "SER-TEST");
    // await putAnySpecimenInTube(tube4, 10000, "spTimestamp");
    // await putAnySpecimenInTube(tube5, 10000, "spTimestamp");
    // await putAnySpecimenInTube(tube6, 10000, "spTimestamp");

    // await updateLocation('8HK25HF', 'CAMBRIDGE_WIP_REAGENTS');
    // const resp = await getStorage('DESTCONTAINER_1');
    // const storage = resp.data;
    // console.log(storage);
    // updateLocation('190SUSN', 'BALTIMORE_WIP_REAGENTS');
    // await createCollectEventNew('HA117PU', 'ship1', 'log', 'BALTIMORE', collectionDate);

    // await queueUpload(source1, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // await queueUpload(source2, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // // await queueUpload(tube3, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // // await queueUpload(tube4, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // // await queueUpload(tube5, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // // await queueUpload(tube6, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
    // //
    // console.log(source1, source2);
    console.log(desttube1, desttube2, desttube3);
    // console.log(tube5, tube6);
    // PF2H01X 9CX8K0S FXP7F07

};

// 0FFCN09 NSS6H15
// P5P9CA1 HA940CH 83KX2CS


main23053();

// 23058.js


