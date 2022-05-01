import {createAndReturnKitWithTubes, queueUpload, getArrayWithTubes, createOneTube} from "./tube-types.js";
import {createShipment} from "./createShipments.js";
import {collectionDate, createCollectEventNew, createCollectEvent} from "./collectionEvents.js";
import {putContainerInAnyQueue,putAnySpecimenInTube, createSpecimen, interTransfer} from "./functions.js";

const dest = async () => {


    // const arrKits =['PAK53C9', 'A1AF3S5','7KK5AH5','X40SCA7','XK99K4S'];
    await arrKits.forEach(function(item, index) {
        putContainerInAnyQueue(item, 'SAMPLE_DESTRUCTION_QUEUE');
    });

};

dest();
// sample-destruction.js

