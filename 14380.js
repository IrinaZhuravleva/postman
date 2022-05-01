import {putAnySpecimenInTube, createSpecimen} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {date, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";
import {shipment} from "./collectionEvents.js";

const serumAliquotingRun = `SERUM_ALIQUOTING_${date}${upperCaseMonth}21_190`;

const main14380 = async() => {
    // await createSpecimen("PLASMA", "PLASMA-test");

    const arrKits = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY', 1); //?

    await arrKits.forEach(function (item, index) {
        putAnySpecimenInTube(item, 3000, "PLASMA-test");

    });

    await arrKits.forEach(function (item, index) {
        queueUpload(item, 'PLASMA_SM_ALIQOUT_QUEUE');
    });


};
main14380();


// 14380.js

// containersInQueues: [{containerCode: "A91PC0H", queueCode: "ALIQUOTING_SERUM_QUEUE"},…]
// 0: {containerCode: "A91PC0H", queueCode: "ALIQUOTING_SERUM_QUEUE"}
// 1: {containerCode: "79UUFH1", queueCode: "ALIQUOTING_SERUM_QUEUE"}
// 2: {containerCode: "07SAKN9", queueCode: "ALIQUOTING_SERUM_QUEUE"}
// forceCreate: false
// runCategoryCode: "BLOOD_PROCESSING"
// runName: "SERUM_ALIQUOTING_05JUL21_17"
// runTypeCode: "SERUM_ALIQUOTING"
// site: "CAMBRIDGE"

// export const createSerumAliquotingRun = async () => {
//     try {
//         const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs', {
//             "runTypeCode": "SERUM_ALIQUOTING",
//             "runCategoryCode": "BLOOD_PROCESSING",
//             "runName": serumAliquotingRun,
//             "containersInQueues": [
//            {containerCode: "A91PC0H", queueCode: "ALIQUOTING_SERUM_QUEUE"},
//              {containerCode: "79UUFH1", queueCode: "ALIQUOTING_SERUM_QUEUE"},
// {containerCode: "07SAKN9", queueCode: "ALIQUOTING_SERUM_QUEUE"}
//
//             ],
//             "forceCreate": false,
//              "site": "CAMBRIDGE"
//         }, config);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
//https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/SERUM_ALIQUOTING_05JUL21_17/start
// // Accessioning/Kit Receiving: run start
// export const startKitReceivingRun = async () => {
//     try {
//         const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${serumAliquotingRun}/start`, {
//         }, config);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
//
