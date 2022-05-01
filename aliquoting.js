import {
    createSpecimen,
    getGeneralInfoFromStorage,
    getParentFromStorage,
    putAnySpecimenInTube,
    putContainerInAnyQueue
} from "./functions.js";
import {createOneTubeInKit, getArrayWithTubes, getArrayWithTubesInKit} from "./tube-types.js";
import fs from "fs"
import {createOneTube} from "./tube-types.js"
import {
    getRunID,
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
    getSpecificEquipmentMicroLab,
    getSpecificEquipmentWithType,
    putIntoAnyBloodProcQueue,
    putIntoAnyBloodProcQueue1,
    setDestEppTubeManualPouring,
    finishAnyRunID,
    uploadAnyFile,
    finishSerumAliquotingRunID,
    startManualPouringRunID,
    setConsumablesIntoManualPouringSerum,
    setExpirationDateManualPouringSerum,
    putIntoBloodCentrifugationQueue
} from "./e2e_functions.js";

const main = async () => {
    // await getArrayWithTubes('STRECK_CELL_FREE_DNA_BCT', 'BALTIMORE_PROCESSING_LABORATORY', 6);



    // const runName = 'BUFFY_ALIQUOT_11NOV21_41';
//     // await putIntoBloodCentrifugationQueue(arrKits[0],arrKits[1],arrKits[2],arrKits[3],arrKits[4],arrKits[5], runName);
// // await startRunID(runName);
//     // //
//     // // // step5
//     await getInstructions(runName);
//     // //
//     // // // step6
//     await getRequiredEquipment(runName);
//     // //
//     // // // step7
//     const equipmentID = await getSpecificEquipment(runName);
//     const id = equipmentID[0].equipmentId;
//     // //
//     // // // step8
//     await setRequiredEquipment(runName, id);
//     // //
//     // // // step9
//     await finishRunID(runName);


    // const tubeEpp = await createDestTube50Epp();
    // await uploadFile(tubeEpp, 'test', runName);
    // await getArrayWithTubes('10ML_SIMPORT_CRYOTUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);

    //
    // await getRunID();
    // await startManualPouringRunID(runName);
    // await setConsumablesIntoManualPouringSerum(runName, context);
    //
    // await setExpirationDateManualPouringSerum(runName, context);

    // const tubeEppDest = await createDestTube50Epp();
    // await uploadFile('P2CAP16', 'test', runName);
///
// // step56 PLASMA_SM_ALIQUOT run
// const runName = await getRunID('PLASMA_SM_ALIQOUT');

// console.log(runName);

//step57

// await putIntoAnyBloodProcQueue1(sourceTube, runName,'PLASMA_SM_ALIQOUT_QUEUE','PLASMA_SM_ALIQOUT');

    // const runName = 'BUFFY_ALIQUOT_11NOV21_7';
    // const sourceTube = 'CS129SN';
    // const sourceTube = 'KCU7N67';
    // const CSV_plasma = [
    //     `"SourcePositionBC","VolumeTransferred","TargetRackBC","TargetPositionID","TargetPositionBC","RunDateTimeStamp","InitialSourceVolume","TargetTubeType"`,
    //     `${sourceTube},100,SimulationRackB,B1,SimTubeBC_7,21_Jan_2021_091601,5000,0.5mlFluidX`,
    //     `${sourceTube},100,SimulationRackB2,D1,SimTubeBC_9,21_Jan_2021_091601,5000,0.9mlFluidX`,
    //     `${sourceTube},100,SimulationRackB,C1,SimTubeBC_8,21_Jan_2021_091601,5000,0.5mlFluidX`,
    //     `${sourceTube},100,SimulationRackB,A1,SimTubeBC_5,21_Jan_2021_091601,5000,0.5mlFluidX`,
    //
    // ].join('\n');
    // fs.writeFileSync(`FILES/${runName}_output.csv`, CSV_plasma)
    // BUFFY_BARCODE,VOLUME_uL,KIT_ID
    // BUFFY_AFTER_POOLING_KIT_1, 4900,<kit>

        // const CSV_plasma = [
        //     `BUFFY_BARCODE,VOLUME_uL,KIT_ID`,
        //     `${sourceTube},4900,"test"`,
        // ].join('\n');
        // fs.writeFileSync(`FILES/${runName}_output.csv`, CSV_plasma)

    // const runName = 'BUFFY_ALIQUOT_11NOV21_45';
    // const CSV_plasma = [
    //     `Source Tube Barcode,Destination Rack Barcode,Destination Tube Position ID,Destination Tube Barcode,Volume Transferred,Date and Time`,
    //     `SX3N3S1,rack_5AU5CA4_bsm,A1,5AU5CA4_bsm_1,200,31_March_2020_150000`,
    // ].join('\n');
    // fs.writeFileSync(`FILES/${runName}_buffy96.csv`, CSV_plasma)

    // const CSV_plasma = [
    //     `Source Tube Barcode,Destination Rack Barcode,Destination Tube Position ID,Destination Tube Barcode,Volume Transferred,Date and Time`,
    //     `SX3N3S1,rack_5AU5CA4_blg,A1,5AU5CA4_blg_1,200,22_March_2020_150000`,
    // ].join('\n');
    // fs.writeFileSync(`FILES/${runName}_buffy24.csv`, CSV_plasma)

    // 5048

    // await createSpecimen("BLOOD", "blood1");

    // const arrKits = await getArrayWithTubes('STRECK_CELL_FREE_DNA_BCT', 'BALTIMORE_AVAILABLE_CONTAINERS', 6);
    // const kit = 'PA94H7N';
    // await getArrayWithTubesInKit('LBGARD_TUBE', kit[0], 6);

    // const arrKits = [ 'S78CX2U', 'P7PF2S9', 'UC8C3K3', '86X0FCP', 'SH1HC85', '68U2HUA' ]


     ;


    // await arrKits.forEach(function (item, index) {
    //     putAnySpecimenInTube(item, 5, "blood1");
    // });



    // ВАЖНО!!!
    // await arrKits.forEach(function (item, index) {
    //     putContainerInAnyQueue(item, 'BLOOD_CENTRIFUGATION_QUEUE');
    // });

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

    // // step12  Pooling Plasma run
    // let runName = await getRunID('POOLING_PLASMA');
    // const runName = 'POOLING_PLASMA_11NOV21_15';
    // //
    // // // step 13 Create Pooling plasma RUN with tubes from the kit
    // await putIntoPlasmaQueue(arrKits[0],arrKits[1],arrKits[2],arrKits[3],arrKits[4],arrKits[5], runName);
    //
    // // //в ответе важно   "runName": "POOLING_PLASMA_15OCT21_3",  "status": 1,
    // //
    // step14 Start a Pooling plasma RUN
    // const dataFromPooling = await startPoolingPlasmaRunID(runName);
    // const context = dataFromPooling.context;
    // console.log(context);


    //step15 Create destination tube 50ML_EPPENDORF_CONICAL_TUBE for pooling
    // const tubeEpp = await createDestTube50Epp();

    // step16 Upload the following fake output file
    // await uploadFile(tubeEpp, 'test', runName);

    // // step17 Set consumables for the run
    // await setConsumables(runName, context);
    //
    // //step18 Set exp date for the run
    // await setExpirationDate(runName,context);

    // step19 Get required equipment for the RUN
    // await getRequiredEquipment(runName);

    // step20 Get specific equipment for the RUN
    // const equipmentArr = await getSpecificEquipmentMicroLab(runName);
    // const equipment = equipmentArr[0].equipmentId;
    // // // console.log(equipment);
    // // //
    // // // step21 Set specific equipment for the RUN
    // await setRequiredEquipment(runName, equipment);
    //
    // //step22 Finish
    // const runData = await finishPoolingPlasmaRunID(runName);
    // const sourceTube = 'SX3N3S1';
    // const runName = 'POOLING_BUFFY_11NOV21_19';
    // const CSV_plasma = [
    //     `BUFFY_BARCODE,VOLUME_uL,KIT_ID`,
    //     `${sourceTube},4900,"test"`,
    // ].join('\n');
    // fs.writeFileSync(`FILES/${runName}_output.csv`, CSV_plasma)
};

main();