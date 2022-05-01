import {putAnySpecimenInTube, createSpecimen} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {date, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";
import {shipment} from "./collectionEvents.js";

const serumAliquotingRun = `SERUM_ALIQUOTING_${date}${upperCaseMonth}21_190`;

// ['4N6CUC4', '7P5HN6C' ];
// '7P5HN6C' = bute 1
// 4N6CUC4 = tube
// const arrKits = [ '0K51FCA', '68PAP2H', 'N6HH8P6' ];

const main10114 = async() => {
    await createSpecimen("CF_DNA", "CF_DNA_test");
    await createSpecimen("PLASMA", "PLASMA_test");

    const arrKits = await getArrayWithTubes('5ML_SIMPORT_CRYOTUBE', 'BALTIMORE_PROCESSING_LABORATORY', 2);

    await putAnySpecimenInTube(arrKits[0], 500, "CF_DNA_test");
    await putAnySpecimenInTube(arrKits[1], 300, "PLASMA_test");
    // await arrKits.forEach(function (item, index) {
    //     putAnySpecimenInTube(item, 300, "PLASMA-test");
    //
    // });

    // await arrKits.forEach(function (item, index) {
    //     queueUpload(item, 'PLASMA_SM_ALIQOUT_QUEUE');
    // });


};
main10114();
// 10114.js

'4KXH26S', '4K6USH0'