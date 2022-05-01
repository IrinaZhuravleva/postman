import {
    createAndReturnKitWithTubes,
    queueUpload,
    getArrayWithTubes,
    createOneTube,
    getArrayWithTubesInKit
} from "./tube-types.js";
import {createShipment} from "./createShipments.js";
import {collectionDate, createCollectEventNew, createCollectEvent} from "./collectionEvents.js";
import {putContainerInAnyQueue,putAnySpecimenInTube, createSpecimen, interTransfer} from "./functions.js";
import fs from "fs"
const main2523 = async () => {

    // const emptyKit = await createOneTube( 'ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS');
    // // const arrKits = await getArrayWithTubes('STRECK_CELL_FREE_DNA_BCT', emptyKit, 6);
    // const arrKits = await getArrayWithTubesInKit('STRECK_CELL_FREE_DNA_BCT', emptyKit, 6);
    // //надо поменять на LB Gard всё поменять
    // const arrKitsSST = await getArrayWithTubesInKit('SST_TUBE', emptyKit, 1);
    // await createCollectEvent(emptyKit, 'shipment_02', 'BALTIMORE', collectionDate);
    // await arrKits.forEach(function(item, index) {
    //     putContainerInAnyQueue(item, 'BLOOD_CENTRIFUGATION_QUEUE');
    // });
    //
    //
    // await interTransfer(arrKits, emptyKit);

    // const plasma_run_name = "POOLING_PLASMA_29OCT21_24" ;
    // const arrKits1 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const CSV_plasma = [
    //     'PLASMA_BARCODE,VOLUME_uL,KIT_ID',
    //     `${arrKits1[0]},27000,'test'`,
    // ].join('\n');
    // fs.writeFileSync(`FILES/${plasma_run_name}_output.csv`, CSV_plasma)

    // const buffy_run_name = "POOLING_PLASMA_29OCT21_24";
    // const arrKits2 = await getArrayWithTubes('5ML_SIMPORT_CRYOTUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    // const CSV_buffy = [
    //     'BUFFY_BARCODE,VOLUME_uL,KIT_ID',
    //     `${arrKits2[0]},800.7,'test'`,
    // ].join('\n');
    // fs.writeFileSync(`FILES/${buffy_run_name}_output.csv`, CSV_buffy)

    // const buffy_al_run_name = "BUFFY_ALIQUOT_14NOV21_68";
    // const dest_tube = '111222333444';
    // const source_tube = '8FS9P0C';
    // const CSV = [
    //     'SourcePositionBC,VolumeTransferred,TargetRackBC,TargetPositionID,TargetPositionBC,RunDateTimeStamp,InitialSourceVolume,TargetTubeType',
    //     `${source_tube},400,SimulationRackB,A1,${dest_tube},21_Jan_2021_091601,2000,0.5mlFluidX`,
    // ].join('\n');
    // fs.writeFileSync(`FILES/${buffy_al_run_name}_output.csv`, CSV)
    // const arrKits1 = await getArrayWithTubes('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS', 1);
    //
    // const buffy_al_run_name = "PLASMA_LG_ALIQUOT_14NOV21_78";
    // const source_tube = 'K7X4CS6';
    // const CSV = [
    //     'RunDateTimeStamp,VolumeTransferred,TargetPositionBC,SourcePositionBC,InitialSourceVolume ',
    //     `22_Jan_2020_150000,10000,${arrKits1[0]},${source_tube},3000`,
    // ].join('\n');
    // fs.writeFileSync(`FILES/${buffy_al_run_name}_output.csv`, CSV)

    // const buffy_al_run_name = "PLASMA_SM_ALIQUOT_14NOV21_94";
    // const source_tube = 'K7X4CS6';
    // const CSV = [
    //     'TargetRackBC,SourcePositionBC,TargetPositionID,RunDateTimeStamp,TargetPositionBC,VolumeTransferred,TargetTubeType,InitialSourceVolume',
    //     `SimulationRackB,${source_tube},A1,22_Jan_2020_150000,SimTubeBD_1,350,0.5mlFluidX,10000`,
    //     `SimulationRackB,${source_tube},A2,22_Jan_2020_150000,SimTubeBD_2,350,0.5mlFluidX,10000`,
    //     `SimulationRackB,${source_tube},A3,22_Jan_2020_150000,SimTubeBD_3,300,0.5mlFluidX,10000`,
    //     `SimulationRackC,${source_tube},A1,22_Jan_2020_150000,SimTubeBD_4,500,0.5mlFluidX,10000`,
    //     `SimulationRackC,${source_tube},A2,22_Jan_2020_150000,SimTubeBD_5,450,0.5mlFluidX,10000`
    // ].join('\n');
    // fs.writeFileSync(`FILES/${buffy_al_run_name}_output.csv`, CSV)

    const buffy_al_run_name = "EMPTY_TUBE_REMOVAL_14NOV21_32";
    const source_tube = 'K7X4CS6';
    const rack = 'SimulationRackB';
    const CSV = [
        'Rack ID,Tube Location,Tube Barcode',
        `${rack},A1,SimTubeBD_1`,
        `${rack},A2,SimTubeBD_2`,
        `${rack},A3,SimTubeBD_3`

    ].join('\n');
    fs.writeFileSync(`FILES/${buffy_al_run_name}_output.csv`, CSV)
};

main2523();


// 2523.js