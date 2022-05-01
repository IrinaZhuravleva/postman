import {createAndReturnKitWithTubes} from "./tube-types.js";
import {createShipment} from "./createShipments.js";
import {collectionDate, createCollectEventNew} from "./collectionEvents.js";
import {putAnySpecimenInTube, createSpecimen, createReagent, createReagentType, createOneTube} from "./functions.js";
import {createStorage, createTubeInStorage} from "./storage.js";
import {getArrayWithTubes, queueUpload } from "./tube-types.js";

const main = async () => {


    const specName = 'BUFFY-test';
    await createSpecimen("BUFFY_COAT", specName);

    const arrKits = await getArrayWithTubes('10ML_SIMPORT_CRYOTUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1); //?
    const arrKits2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1); //?
    await putAnySpecimenInTube(arrKits[0], 5000, specName);

    // const arrKits = [ 'HXF921U', 'N1PH09P', 'S436SHX', 'X70A3PP', '92SSX9S' ];
    await queueUpload(arrKits[0], 'BUFFY_ALIQUOT_QUEUE');
    console.log(arrKits, arrKits2);
};

main();