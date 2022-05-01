import {
    createSpecimen,
    getGeneralInfoFromStorage,
    getParentFromStorage,
    putAnySpecimenInTube,
    putContainerInAnyQueue
} from "./functions.js";
import {createOneTubeInKit, getArrayWithTubes, getArrayWithTubesInKit} from "./tube-types.js";

import {
    getRunID,
    putIntoBloodCentrifugationQueue,
    startRunID,
    getInstructions,
    getRequiredEquipment,
    getSpecificEquipment,
    setRequiredEquipment,
    finishRunID,
    queuesInfoVerification,
    putIntoBloodProcessingQueue,
    startPoolingPlasmaRunID,
    createDestTube50Epp,
    uploadFile,
    setConsumables,
    setExpirationDate,
    finishPoolingPlasmaRunID,
    getSpecificEquipmentMicroLab,
    putIntoPlasmaQueue,
    putIntoPlasmaCentrifugationQueue,
    getInstructionsCentrifugationPlasma,
    getSpecificEquipmentWithType,
    putIntoAnyBloodProcQueue,
    putIntoAnyBloodProcQueue1,
    setDestEppTubeManualPouring,
    finishManualPouringRunID,
    uploadFileLGAliquot, setConsumablesIntoLGAliquot, setExpirationDateIntoLGAliquot, finishAnyRunID,
    uploadAnyFile, setConsumablesForManualPouring, setExpirationDateForManualPouring, finishSerumAliquotingRunID
} from "./e2e_functions.js";

const main = async () => {
    // await createSpecimen("BLOOD", "blood1");

    // const kit = await getArrayWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const kit = 'PA94H7N';
    // const arrKits = await getArrayWithTubesInKit('LBGARD_TUBE', kit[0], 6);

    // const arrKits = [ 'C6SHK83', 'U97KS7S', 'PA9K59N', 'C21SX8F', 'C9X08UN', 'XUF5N62' ]

    //  const runName = await getRunID('BLOOD_CENTRIFUGATION');


    // await arrKits.forEach(function (item, index) {
    //     putAnySpecimenInTube(item, 100, "blood1");
    // });

    // await Promise.all(arrKits.map(async (item) => {
    //     await putAnySpecimenInTube(item, 100, "blood1");
    // }));

    // ВАЖНО!!!
    // await arrKits.forEach(function (item, index) {
    //     putContainerInAnyQueue(item, 'BLOOD_CENTRIFUGATION_QUEUE');
    // });

    // await Promise.all(arrKits.map(async (item) => {
    //     await putContainerInAnyQueue(item, 'BLOOD_CENTRIFUGATION_QUEUE');
    // }));

    // const runName = 'CENTRIFUGATION_BLOOD_09NOV21_58';
    // await putIntoBloodCentrifugationQueue(arrKits[0],arrKits[1],arrKits[2],arrKits[3],arrKits[4],arrKits[5], runName);
    //
    // // // step4
    // await startRunID(runName);
    // //
    // // // step5
    // await getInstructions(runName);
    // //
    // // // step6
    // await getRequiredEquipment(runName);
    // //
    // // // step7
    // const equipmentID = await getSpecificEquipment(runName);
    // const id = equipmentID[0].equipmentId;
    // //
    // // // step8
    // await setRequiredEquipment(runName, id);
    // //
    // // // step9
    // await finishRunID(runName);
    // // важно засечь
    // // "runName": "CENTRIFUGATION_BLOOD_15OCT21_4",
    // // "status": 5,
    //
    // // step10 Verify parent info for blood tubes
    // await arrKits.forEach(function (item, index) {
    //     getGeneralInfoFromStorage(item);
    //
    // });
    //    // console.log(id);
    // // step11 Queues info verification for all blood tubes
    // await arrKits.forEach(function (item, index) {
    //     queuesInfoVerification(item);
    // });
    // //     "queueCode": "POOLING_PLASMA_QUEUE",
    // //     "queueName": "Pooling Plasma Queue",
    // //     "status": "Ready",
    //
    // // step12  Pooling Plasma run
    let runName = await getRunID('POOLING_PLASMA');
    // const runName = 'POOLING_PLASMA_09NOV21_31';
    // // //
    // // // // step 13 Create Pooling plasma RUN with tubes from the kit
    // await putIntoPlasmaQueue(arrKits[0],arrKits[1],arrKits[2],arrKits[3],arrKits[4],arrKits[5], runName);
    // //
    // // // //в ответе важно   "runName": "POOLING_PLASMA_15OCT21_3",  "status": 1,
    // // //
    // // step14 Start a Pooling plasma RUN
    // const dataFromPooling = await startPoolingPlasmaRunID(runName);
    // const context = dataFromPooling.context;
    // console.log(context);

    //
    // //step15 Create destination tube 50ML_EPPENDORF_CONICAL_TUBE for pooling
    // const tubeEpp = await createDestTube50Epp();
    // const runName = 'POOLING_PLASMA_14NOV21_3';
    const kit = 'A2CK17C';
    // // step16 Upload the following fake output file
    // await uploadFile(tubeEpp, kit, runName);
    //
    // // step17 Set consumables for the run
    // await setConsumables(runName, context);

    // //step18 Set exp date for the run
    // await setExpirationDate(runName,context);
    //
    // // step19 Get required equipment for the RUN
    // await getRequiredEquipment(runName);
    //
    // // step20 Get specific equipment for the RUN
    // const equipmentArr = await getSpecificEquipmentMicroLab(runName);
    // const equipment = equipmentArr[0].equipmentId;
    // // // console.log(equipment);
    // // //
    // // // step21 Set specific equipment for the RUN
    // await setRequiredEquipment(runName, equipment);
    //
    // //step22 Finish
    // const runData = await finishPoolingPlasmaRunID(runName);
    // console.log(runData.run.runName);
    // console.log(runData.run.status);

    //step23 Verify parent info for blood tubes
    // await arrKits.forEach(function (item, index) {
    // // через nld не создается         "contexts": [
    // //     {
    // //         "context": "1f022579-ef72-4363-abb4-7f6d3a6bebf6",
    // //         "category": "ACCESSIONING"
    // //     }
    //     getParentFromStorage(item);
    //
    // });

    //step24 Verify parent info for Plasma Destination container
    //     await getParentFromStorage(tubeEpp');
    //step25 placed

    // await arrKits.forEach(function (item, index) {
    //     queuesInfoVerification(item);
    // });
    // сюда кладется epp
    // await queuesInfoVerification(tubeEpp);

    //step26 CENTRIFUGATION PLASMA run // COULD BE CREATED BY TDG
    // const runName = await getRunID('PLASMA_CENTRIFUGATION');
    // const runName = 'CENTRIFUGATION_PLASMA_09NOV21_15';

    // const tubeEpp = '5XPC3K9';AX1XP44
    //step27
    // сюда кладется epp
    // await putIntoPlasmaCentrifugationQueue(tubeEpp, runName);

    //step28
    // await startRunID(runName);

    //step29
    // await getInstructionsCentrifugationPlasma(runName);

    //step30
    // const resEqPlasmaCentrifugation = await getRequiredEquipment(runName);
    // const specEq = resEqPlasmaCentrifugation[0].code;
    // const specEq = 'SORVALL_X4R';

    //step31
    // const resp = await getSpecificEquipmentWithType(runName,specEq);
    // const equipmentID = resp[0].equipmentId;

    //step32
    // await setRequiredEquipment(runName,equipmentID);

    //step33
    // await finishRunID(runName);


    //step34 MANUAL POURING PLASMA run // previous run Centrifugation Plasma COULD BE CREATED BY TDG
    // const runName = await getRunID('MANUAL_POURING');
    // const runName = 'MANUAL_POURING_09NOV21_8';
    // const tubeEpp = '3N03FXX';
    // //step35
    // // сюда кладется epp
    // await putIntoAnyBloodProcQueue1(tubeEpp, runName,'MANUAL_POURING_QUEUE','MANUAL_POURING');
    // //
    // // // //step36
    // const runInfo = await startRunID(runName);
    // const jsonResp = runInfo.json;
    // const context = jsonResp.context;
    //  const context = '5a5e0970-8ba3-4e48-b3a5-e923adaa829b';
    // // // // runInfo.status 1
    // // // // runInfo.runName runName
    //
    // // //step37
    // const tubeEppDest = await createDestTube50Epp();
    // // // // //
    // // // // step38 Set destination tube for pouring plasma
    // await setDestEppTubeManualPouring(runName, tubeEpp, tubeEppDest);
    //
    // // //step39
    // await setConsumablesForManualPouring(runName, context);
    // // //
    // // // //step40
    // await setExpirationDateForManualPouring(runName, context);
    //

    // //step44
    // await finishManualPouringRunID(runName);

    // // step45 PLASMA_LG_ALIQUOT run
    // const runName = await getRunID('PLASMA_LG_ALIQUOT');
    // const runName = 'PLASMA_LG_ALIQUOT_09NOV21_4';
    //
    // // step46
    // const sourceTube = 'KFF0S85';
    // await putIntoAnyBloodProcQueue1(sourceTube, runName,'PLASMA_LG_ALIQUOT_QUEUE','PLASMA_LG_ALIQUOT');
    //
    // //step47
    // const runInfo = await startRunID(runName);
    // const jsonResp = runInfo.json;
    // const context = jsonResp.context;
    // // const context = '9f40f3f1-74a4-427f-9a85-8ae8518ad91c';
    // console.log(context);
    // // // runInfo.status 1
    // // // runInfo.runName runName
    //
    //
    // //step48
    // const tubeEppDest = await createDestTube50Epp();
    //
    // //step49 File
    // await uploadFileLGAliquot(sourceTube, tubeEppDest, runName);
    //
    // // step50 Get required equipment for the run
    // await getRequiredEquipment(runName);
    //
    // //step51
    // const equipmentID = await getSpecificEquipmentMicroLab(runName);
    // const id = equipmentID[0].equipmentId;
    //
    // // step52
    // await setRequiredEquipment(runName, id);
    //
    // //step53
    // await setConsumablesIntoLGAliquot(runName, context);
    //
    // //step54
    // await setExpirationDateIntoLGAliquot(runName, context);
    //
    // //step55
    // await finishAnyRunID(runName, 'plasma_large_aliquoting');

    // // step56 PLASMA_SM_ALIQUOT run
    // const runName = await getRunID('PLASMA_SM_ALIQOUT');
    // const runName = 'PLASMA_SM_ALIQUOT_09NOV21_18';
    // // console.log(runName);
    //
    // //step57
    // const sourceTube = 'KFF0S85'; // c той тубой что и сорс для Plasma LG Aliquot
    // await putIntoAnyBloodProcQueue1(sourceTube, runName,'PLASMA_SM_ALIQOUT_QUEUE','PLASMA_SM_ALIQOUT');
    //
    // //step58
    // const runInfo = await startRunID(runName);

    // // // runInfo.status 1
    // // // runInfo.runName runName


    // //step59 File
    // const CSV = [
    //     'SourcePositionBC,VolumeTransferred,TargetRackBC,TargetPositionID,TargetPositionBC,RunDateTimeStamp,InitialSourceVolume,TargetTubeType',
    //     `${sourceTube},350,AUTOTEST_TC2429_RACK_1,A1,11CHAR_PS_CODE_1,10/18/2021 13:29:31,15000,0.5mlFluidX`,
    //     `${sourceTube},350,AUTOTEST_TC2429_RACK_1,A2,11CHAR_PS_CODE_2,10/18/2021 13:29:31,15000,0.5mlFluidX`,
    //     `${sourceTube},350,AUTOTEST_TC2429_RACK_1,A3,11CHAR_PS_CODE_3,10/18/2021 13:29:31,15000,0.5mlFluidX`,
    //     `${sourceTube},800,AUTOTEST_TC24_RACK_1,A1,11CHAR_PS_CODE_4,10/18/2021 13:29:31,15000,0.9mlFluidX`,
    //     `${sourceTube},900,AUTOTEST_TC24_RACK_1,A2,11CHAR_PS_CODE_5,10/18/2021 13:29:31,15000,0.9mlFluidX`,
    // ].join('\n');
    // await uploadAnyFile(CSV,'small_aliquoting', runName);


    // // step60 Get required equipment for the run
    // await getRequiredEquipment(runName);
    // //
    // // //step61
    // const equipmentID = await getSpecificEquipmentMicroLab(runName);
    // const id = equipmentID[0].equipmentId;
    // //
    // // step62
    // await setRequiredEquipment(runName, id);

    // //step63
    // await finishAnyRunID(runName, 'plasma_small_aliquoting');


};

main();

// e2e.js