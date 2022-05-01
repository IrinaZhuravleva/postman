import {createKitWithTubes, createOneTube, getArrayWithTubes, queueUpload} from './tube-types.js'
import {createCollectEventNew, collectionDate} from './collectionEvents.js'
import {
   createSpecimen,
   putAnySpecimenInTube, putContainerInAnyQueue
} from "./functions.js";
import {getStorage} from "./storage.js";
import axios from "axios";
import {addExistingContainer, updateLocationWithPosition, updateLocation} from "./functions.js";


const main17817 = async () => {
   // const tube1 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
   // const tube2 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
   // const tube3 = await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');

   // const tube4 = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY');
   // const tube5 = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY');
   // const tube6 = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY');

   // await createSpecimen("PLASMA", "spTimestamp");
   //
   // await putAnySpecimenInTube(tube1, 10000, "spTimestamp");
   // await putAnySpecimenInTube(tube2, 12345, "spTimestamp");
   // await putAnySpecimenInTube(tube3, 10000, "spTimestamp");

   // await updateLocation('8HK25HF', 'CAMBRIDGE_WIP_REAGENTS');
   // const resp = await getStorage('HA117PU');
   // const storage = resp.data;
   // console.log(storage);
   // updateLocation('190SUSN', 'BALTIMORE_WIP_REAGENTS');
   // await createCollectEventNew('HA117PU', 'ship1', 'log', 'BALTIMORE', collectionDate);

   // await queueUpload(tube1, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
   // await queueUpload(tube2, 'GENERIC_CFDNA_EXTRACTION_QUEUE');
   // await queueUpload(tube3, 'GENERIC_CFDNA_EXTRACTION_QUEUE');

   // console.log(tube1, tube2, tube3);
// console.log(tube4, tube5, tube6);


};

main17817();

// 22375.js

