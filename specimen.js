import {
    putAnySpecimenInTube,
    createSpecimen,
    putContainerInAnyQueue,
    putContainerInContainersToStoreQueue, getParentFromStorage, createAnyRunNew, startAnyBloodProcessingRunNew, getSpecimenFromStorage
} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {date, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";
import {createShipment} from "./createShipments.js";
import fs from "fs"

const specimen = async() => {
// const CSV = [
//     'containers',
//     `1`,
//     `2`,
// ].join('\n');
//
// fs.writeFileSync("FILES/some.csv", CSV)

    const runNumber = '118';

    // 23253
    // await createShipment('ship', 'DELIVERY');
    // const tube1 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'CAMBRIDGE_AVAILABLE_CONTAINERS', 1);
    // const tube3 = await getArrayWithTubes('0.5_ML_FLUIDX', 'ORPHANS', 1);
    // const tube4 = await getArrayWithTubes('0.5_ML_FLUIDX', 'ship', 1);
    //
    // await createAnyRunNew('SPECIMEN_REGISTRATION', 'SPECIMEN_SELF_REGISTRATION', `SPECIMEN_SELF_REGISTRATION_${date}${upperCaseMonth}21_${runNumber}`, 'BALTIMORE');
    // await startAnyBloodProcessingRunNew(`SPECIMEN_SELF_REGISTRATION_${date}${upperCaseMonth}21_${runNumber}`);
    //
    // const fileName = `SPECIMEN_SELF_REGISTRATION_${date}${upperCaseMonth}21_${runNumber}`;
    // const CSV = [
    //     'External Sample Name,Specimen Type,Container ID,Person ID,Volume (uL),Notes',
    //     `testTube01,BLOOD,${tube1},,500,`,
    //     `testTube02,BLOOD,${tube2},,500,`,
    //     `testTube03,BLOOD,${tube3},,500,`,
    //     `testTube04,BLOOD,${tube4},,500,`,
    // ].join('\n');
    // console.log(CSV);
    // console.log(fileName);

    // 23197
    // const tube1 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'CAMBRIDGE_AVAILABLE_CONTAINERS', 1);

    // const fileName = `SPECIMEN_SELF_REGISTRATION_${date}${upperCaseMonth}21_${runNumber}`;
    // const CSV = [
    //     'External Sample Name,Specimen Type,Container ID,Person ID,Volume (uL),Notes',
    //     `specimen_test01,BLOOD,${tube1},,500,`,
    // ].join('\n');
    // console.log(CSV);
    // console.log(fileName);

    // 14565
    // const tube1 = await getArrayWithTubes('PLATE_96', 'BALTIMORE_PROCESSING_LABORATORY', 1);

    // const fileName = `persons.csv`;
    // code,json
    // Person1,
    // Person2,


    // await createAnyRunNew('SPECIMEN_REGISTRATION', 'SPECIMEN_SELF_REGISTRATION', `SPECIMEN_SELF_REGISTRATION_${date}${upperCaseMonth}21_${runNumber}`, 'BALTIMORE');
    // await startAnyBloodProcessingRunNew(`SPECIMEN_SELF_REGISTRATION_${date}${upperCaseMonth}21_${runNumber}`);

    // External Sample Name,Specimen Type,Container ID,Person ID,Volume (uL),Notes
    // test_CF_DNA_SAMPLE_1,CF_DNA,UCHX389_A.1,Person1,500,
    // test_CF_DNA_SAMPLE_2,CF_DNA,UCHX389_A.2,Person2,500,
    // const CSV2 = [
    //     'External Sample Name,Specimen Type,Container ID,Person ID,Volume (uL),Notes',
    //     `test_CF_DNA_SAMPLE_1,CF_DNA,${tube1}_A.1,Person1,500,`,
    //     `test_CF_DNA_SAMPLE_2,CF_DNA,${tube1}_A.1,Person1,500,`
    // ].join('\n');
    // console.log(CSV2);
    // await getSpecimenFromStorage('0X6NF2P_A.1');

    // const tubes = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 6);


};
specimen();

    // specimen.js

