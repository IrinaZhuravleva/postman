import {
    putAnySpecimenInTube,
    createSpecimen,
    putContainerInAnyQueue,
    putContainerInContainersToStoreQueue, getParentFromStorage,
    createAnyRunNew,
    startAnyBloodProcessingRunNew
} from "./functions.js";
import {getArrayWithTubes, queueUpload} from "./tube-types.js";
import {date, upperCaseMonth} from "./index.js";
import axios from "axios";
import {config} from "./creationContainers.js";
import fs from "fs"

const main19953 = async() => {
    const runNumber = '2';
    // // 19953
    // const tube1 = await getArrayWithTubes('0.9_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const tube3 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', 'ORPHANS', 1);
    //
    // const shelf = await getArrayWithTubes('SHELF_RACK3x7', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    //
    // const shelf1 = await getArrayWithTubes('0.9_ML_FLUIDX_RACK', `${shelf[0]}_A.1`, 1);
    // const shelf2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `${shelf[0]}_A.2`, 1);
    // const shelf3 = await getArrayWithTubes('1_ML_MATRIX_RACK', `${shelf[0]}_A.3`, 1);
    //
    // const tube11 = await getArrayWithTubes('0.9_ML_FLUIDX', `${shelf1[0]}_A.1`, 1);
    // const tube21 = await getArrayWithTubes('0.5_ML_FLUIDX', `${shelf2[0]}_A.2`, 1);
    // const tube31 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', `${shelf3[0]}_A.3`, 1);

    // await createAnyRunNew('TUBE_BATCHING', 'MOHAWK', `MOHAWK${date}${upperCaseMonth}21_${runNumber}`, 'BALTIMORE');
    // await startAnyBloodProcessingRunNew(`MOHAWK_${date}${upperCaseMonth}21_${runNumber}`);
    // const fileName = `MOHAWK_${date}${upperCaseMonth}21_${runNumber}`;
    // const CSV = [
    //     'containers',
    //     `${tube1}`,
    //     `${tube2}`,
    //     `${tube3}`,
    //     `${tube11}`,
    //     `${tube21}`,
    //     `${tube31}`,
    // ].join('\n');
    // console.log(CSV);
    // console.log(fileName);

    // // 19958
    // const tube1 = await getArrayWithTubes('0.9_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const tube3 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const tube4 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);

    // await createAnyRunNew('TUBE_BATCHING', 'MOHAWK', `MOHAWK${date}${upperCaseMonth}21_${runNumber}`, 'BALTIMORE');
    // await startAnyBloodProcessingRunNew(`MOHAWK_${date}${upperCaseMonth}21_${runNumber}`);
    // const fileName = `MOHAWK_${date}${upperCaseMonth}21_${runNumber}`;
    // const CSV = [
    //     'containers',
    //     `${tube1}`,
    //     `${tube2}`,
    //     `${tube3}`,
    //     `${tube4}`,
    // ].join('\n');
    // console.log(CSV);
    // console.log(fileName);
    // const fileName_outcome = `MOHAWK_${date}${upperCaseMonth}21_${runNumber}_outcome`;
    // const CSV2 = [
    //     'Rack Barcode,Tube Barcode,Row,Column,In Worklist',
    //     `TS01552899,${tube1},A,1,Y`,
    // ].join('\n');
    // console.log(CSV2);
    // console.log(fileName_outcome);
    //
    // console.log('Удвоение строки с одной тубой - Шаг 12');
    // const CSV3 = [
    //     'Rack Barcode,Tube Barcode,Row,Column,In Worklist',
    //     `TS01552899,${tube1},A,1,Y`,
    //     `TS01552899,${tube1},A,1,Y`,
    // ].join('\n');
    // console.log(CSV3);
    //
    // console.log('Две тубы - Шаг 13');
    // const CSV4 = [
    //     'Rack Barcode,Tube Barcode,Row,Column,In Worklist',
    //     `TS01552899,${tube1},A,1,Y`,
    //     `TS01552899,${tube2},A,1,Y`,
    // ].join('\n');
    // console.log(CSV4);
    //
    // console.log('Второй формат файла с одной тубой - Шаг 16');
    // const CSV5 = [
    //     'Date: 18November2019 01:53:40,,,',
    //     'Rack: TS01552899,,,',
    //     'RackID,LocationRow,LocationColumn,TubeCode',
    //     `TS01552899,A,2,${tube1}`
    // ].join('\n');
    // console.log(CSV5);
    //
    // console.log('Третий формат файла с одной тубой - Шаг 17');
    // const CSV6 = [
    //     'Rack ID,Tube Location,Tube Barcode',
    //     `TS01552899,A1,${tube1}`
    // ].join('\n');
    // console.log(CSV6);

    // // 19959
    // const shelf1 = await getArrayWithTubes('0.9_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const shelf2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const shelf3 = await getArrayWithTubes('1_ML_MATRIX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    //
    // const tube_shelf1 = await getArrayWithTubes('0.9_ML_FLUIDX', `${shelf1[0]}_A.1`, 1);
    // const tube_shelf12 = await getArrayWithTubes('0.5_ML_FLUIDX', `${shelf2[0]}_A.1`, 1);
    // const tube_shelf13 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', `${shelf3[0]}_A.1`, 1);


    // console.log(tube_shelf1, tube_shelf12, tube_shelf13, tube_shelf14);
    // console.log(tube_shelf1, tube_shelf12, tube_shelf13);
    // console.log(shelf1, shelf2, shelf3);


    // const tube1 = await getArrayWithTubes('0.9_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const tube3 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const tube4 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);

    // 19965
    // const tube1 = await getArrayWithTubes('0.9_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const tube3 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const tube4 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);

    // const shelf2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube21 = await getArrayWithTubes('0.5_ML_FLUIDX', `${shelf2[0]}_A.2`, 1);

    // const shelf = await getArrayWithTubes('SHELF_RACK3x7', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const shelf2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `${shelf[0]}_A.2`, 1);
    // const tube21 = await getArrayWithTubes('0.5_ML_FLUIDX', `${shelf2[0]}_A.2`, 1);

    // 19966
    // const tube1 = await getArrayWithTubes('0.9_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY', 1);
    // const tube3 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY', 1);

    // const shelf1 = await getArrayWithTubes('0.9_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const shelf2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const shelf3 = await getArrayWithTubes('1_ML_MATRIX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube_shelf1 = await getArrayWithTubes('0.9_ML_FLUIDX', `${shelf1[0]}_A.1`, 1);
    // const tube_shelf12 = await getArrayWithTubes('0.5_ML_FLUIDX', `${shelf2[0]}_A.1`, 1);
    // const tube_shelf13 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', `${shelf3[0]}_A.1`, 1);


    // 19967 mohawk
    // const source_rack1 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack3 = await getArrayWithTubes('0.9_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const source_rack4 = await getArrayWithTubes('1_ML_MATRIX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack7 = await getArrayWithTubes('1_ML_MATRIX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    //
    // const tube1 = await getArrayWithTubes('0.5_ML_FLUIDX', `${source_rack1[0]}_A.1`, 1);
    //
    // const tube2 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    //
    // const tube3 = await getArrayWithTubes('0.9_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube4 = await getArrayWithTubes('0.9_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // await createAnyRunNew('TUBE_BATCHING', 'MOHAWK', `MOHAWK${date}${upperCaseMonth}21_${runNumber}`, 'BALTIMORE');


    // 19968 mohawk
    // const source_rack1 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack3 = await getArrayWithTubes('0.9_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const source_rack4 = await getArrayWithTubes('1_ML_MATRIX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack7 = await getArrayWithTubes('1_ML_MATRIX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    //
    // const tube1 = await getArrayWithTubes('0.5_ML_FLUIDX', `${source_rack1[0]}_A.1`, 1);
    //
    // const tube2 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    //
    // const tube3 = await getArrayWithTubes('0.9_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube4 = await getArrayWithTubes('0.9_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    //
    // const tube_existing = await getArrayWithTubes('0.5_ML_FLUIDX', `${destination_rack2[0]}_A.1`, 1);

    // await getParentFromStorage('non_existing_barcode');
    // await getParentFromStorage('HF81CA8');
    // await getParentFromStorage('A713CPF');
    // await getParentFromStorage('6SP78FX');
    // await getParentFromStorage('XA49AX6');

    // // 21996 MOHAWK
    // const tube1 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube2 = await getArrayWithTubes('0.9_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube3 = await getArrayWithTubes('0.5_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);


    // 22110
    // const tube1 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube2 = await getArrayWithTubes('0.9_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube3 = await getArrayWithTubes('0.5_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);

    // 28434

    // const source_rack1 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack2 = await getArrayWithTubes('0.5_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack3 = await getArrayWithTubes('0.9_ML_FLUIDX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const source_rack4 = await getArrayWithTubes('1_ML_MATRIX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const destination_rack7 = await getArrayWithTubes('1_ML_MATRIX_RACK', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    //
    // const tube1 = await getArrayWithTubes('0.9_ML_FLUIDX', `${destination_rack3}_A.1`, 1);
    // const tube2 = await getArrayWithTubes('0.5_ML_FLUIDX', `BALTIMORE_AVAILABLE_CONTAINERS`, 1);
    // const tube3 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', `BALTIMORE_PROCESSING_LABORATORY`, 1);
    //
    // const tube4 = await getArrayWithTubes('1ML_THERMO_MATRIX_2D', `ORPHANS`, 1);

};
main19953();
// mohawk.js



// //ПЕРВОЕ
// const data1 = [{
//     "Source Rack ID": "U8PC50K",
//     "Source Location": "G1",
//     "Source Tube ID": "AN355SP",
//     "Sample ID": "AN355SP_CF_DNA_31JUL21_142455",
//     "Source Concentration (pg/ul)": "3323"
// }, {
//     "Source Rack ID": "U8PC50K",
//     "Source Location": "H1",
//     "Source Tube ID": "N5F7KK9",
//     "Sample ID": "N5F7KK9_CF_DNA_31JUL21_142455",
//     "Source Concentration (pg/ul)": "1968"
// }];
//
// let res = []; // это массив тубов для размещения в очередь
//
// data1.forEach(item => {
//     res.push(item["Source Tube ID"]);
// });
//
// console.log(res);

// //ВТОРОЕ
// const arr = res; //  из main.js
// let i = 0;

// Подставить в TubeID массив из 96 тубов
//     racks.forEach(function (item, index) {
//         item["tubeID"] = arr[i];
//         i++;
//     });
// export_csv
//Получить csv файл - загружается автоматом с локали через console.log(csvFile)
//     const arrayHeader = ['rackID','tubeID','tubeLocation'];
//
//     const dataArray = [];
//     racks.forEach(function (item, index) {
//         dataArray.push(Object.values(item));
//     })
//     console.log(dataArray);
//     const csvFile = export_csv(arrayHeader, dataArray, ',', 'runID_output');
// console.log(csvFile); //ЗАПУСТИТЬ ДЛЯ СОЗДАНИЯ ФАЙЛА

// const CSV = [
//     'containers',
//     `1`,
//     `2`,
// ].join('\n');
//
// fs.writeFileSync("FILES/some.csv", CSV)