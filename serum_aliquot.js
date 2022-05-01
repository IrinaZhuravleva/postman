import {createAndReturnKitWithTubes, queueUpload, getArrayWithTubes, createOneTube} from "./tube-types.js";
import {createShipment} from "./createShipments.js";
import {collectionDate, createCollectEventNew, createCollectEvent} from "./collectionEvents.js";
import {putContainerInAnyQueue,putAnySpecimenInTube, createSpecimen, interTransfer} from "./functions.js";
import fs from "fs"
const serum = async () => {
    const runName = 'SERUM_ALIQUOTING_01NOV21_1';
    const tubeEpp = 'K1SCK01';
    const CSV = [
        'SourcePositionBC,VolumeTransferred,TargetRackBC,test1,test2,test3,test4,test5,test6,TargetPositionID,TargetPositionBC,RunDateTimeStamp,InitialSourceVolume,TargetTubeType',
        `${tubeEpp},400,AAABBBCCCD3,aboba,2,3,4,5,6 ,A1,AABBCCDDEE3,12_Jan_2020_150000,600,1mlMatrix`,
        `NoSource,NotUsed,AAABBBCCCD3,aboba,2,3,4,5,6 ,A1,AABBCCDDEE3,NoDate,NoVolume,1mlMatrix`,
    ].join('\n');

    fs.writeFileSync(`FILES/${runName}_output.csv`, CSV)

};

serum();
// serum_aliquot.js

