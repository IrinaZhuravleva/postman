import {
    createSpecimen,
    getGeneralInfoFromStorage,
    getParentFromStorage,
    putAnySpecimenInTube,
    putContainerInAnyQueue
} from "./functions.js";
import {createOneTubeInKit, getArrayWithTubes, getArrayWithTubesInKit} from "./tube-types.js";
import fs from "fs"
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
    setExpirationDateManualPouringSerum
} from "./e2e_functions.js";

const main = async () => {
    // const runName = 'SERUM_ALIQUOTING_10NOV21_1';
    // await getRunID();
    // await startManualPouringRunID(runName);
    // await setConsumablesIntoManualPouringSerum(runName, context);
    //
    // await setExpirationDateManualPouringSerum(runName, context);

    // const tubeEppDest = await createDestTube50Epp();

///
// // step56 PLASMA_SM_ALIQUOT run
// const runName = await getRunID('PLASMA_SM_ALIQOUT');

// console.log(runName);

//step57

// await putIntoAnyBloodProcQueue1(sourceTube, runName,'PLASMA_SM_ALIQOUT_QUEUE','PLASMA_SM_ALIQOUT');

//step58
// const runInfo = await startRunID(runName);

// const CSV = [
//     'SourcePositionBC,VolumeTransferred,TargetRackBC,test1,TargetPositionID,TargetPositionBC,RunDateTimeStamp,InitialSourceVolume,TargetTubeType',
//     `${sourceTube},400, NEWRACK1,aboba,A1, NEWTUBE1,12_Jan_2020_150000,600,1mlMatrix`,
//     `${sourceTube},300,NEWRACK1,aboba,A2,NEWTUBE2,12_Jan_2020_150000,600,1mlMatrix`,
//     `${sourceTube},500, NEWRACK2,aboba,A3,NEWTUBE3,12_Jan_2020_150000,600,1mlMatrix`,
//     `${sourceTube},400, NEWRACK2,aboba,A4,NEWTUBE,4,12_Jan_2020_150000,600,1mlMatrix`,
//
// ].join('\n');
// await uploadAnyFile(CSV,'serum_aliquoting', runName);
    const runName = 'BUFFY_ALIQUOT_11NOV21_7';
    const sourceTube = 'CS129SN';
    // const sourceTube = 'NoSource';
    const CSV_plasma = [
        `"SourcePositionBC","VolumeTransferred","TargetRackBC","TargetPositionID","TargetPositionBC","RunDateTimeStamp","InitialSourceVolume","TargetTubeType"`,
        `${sourceTube},100,SimulationRackB,B1,SimTubeBC_7,21_Jan_2021_091601,5000,0.5mlFluidX`,
        `${sourceTube},100,SimulationRackB2,D1,SimTubeBC_9,21_Jan_2021_091601,5000,0.9mlFluidX`,
        `${sourceTube},100,SimulationRackB,C1,SimTubeBC_8,21_Jan_2021_091601,5000,0.5mlFluidX`,
        `${sourceTube},100,SimulationRackB,A1,SimTubeBC_5,21_Jan_2021_091601,5000,0.5mlFluidX`,

    ].join('\n');
    fs.writeFileSync(`FILES/${runName}_output.csv`, CSV_plasma)

// https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/serum_aliquoting/upload/SERUM_ALIQUOTING_10NOV21_21

// step60 Get required equipment for the run
//
//
//     await getRequiredEquipment(runName);
//     //
//     // //step61
//     const equipmentID = await getSpecificEquipmentMicroLab(runName);
//     const id = equipmentID[0].equipmentId;
//     //
//     // step62
//     await setRequiredEquipment(runName, id);
//
//     //step63
//     await finishSerumAliquotingRunID(runName);

    // const runName = await getRunID('EMPTY_TUBE_REMOVAL');
    // console.log(runName)
    // const runName = 'EMPTY_TUBE_REMOVAL_10NOV21_9';
    // const rack = 'AAABBBCCCD3';
    // // await putIntoAnyBloodProcQueue1(rack, runName,'ALIQUOTS_TO_STORE_QUEUE','EMPTY_TUBE_REMOVAL');
    // const runInfo = await startRunID(runName);
    // console.log(runInfo);
};

main();