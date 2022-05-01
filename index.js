import axios from 'axios';

import { tubes, createOneTube,
    createSpecimenPlasma,
    putPlasmaInTube,
    queueEllaResultUpload } from './functions.js'

import { createKitOneTube, config } from './creationContainers.js';
import {  createCollectEventBalt, shipment } from './collectionEvents.js'

// public async cleanDLQEvents(topic: string): Promise<void> {
//     return await this._findTopic(topic).cleanDLQEvents();
// }


export const date = Date().split(' ').splice(2, 1);
const month = Date().split(' ').splice(1, 1);
export const upperCaseMonth = month.toString().toUpperCase();
const d = new Date();
export let monthInNumber = d.getMonth() + 1;
const kitReceivingRun = `KIT_RECEIVING_${date}${upperCaseMonth}21_193`;
const kitContentsAccessioningRun = `KIT_CONTENTS_ACCESSIONING_${date}${upperCaseMonth}21_193`;


// const kitReceivingRun = 'KIT_RECEIVING_18JUN21_190';
// const kitContentsAccessioningRun = 'KIT_CONTENTS_ACCESSIONING_18JUN21_190';
// const kit = 'SA97UK8';
// const tube = '6NUH78K';
// ты не проходила аксешенинг с еррор кодами?
// колекшен ивент "протухает" через 32 часа
// если он создан ранее чем за 32 часа до сканирования в лабе, ставится этот еррор код и кит уходит в  менеджер ревью

// const kitNum = 1;
// let kitsArray = ['S14UAC6', 'HP976KP', 'P0KN3C9'];

// Accessioning/Kit Receiving run creation
export const createKitReceivingRun = async (kitReceivingRun) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs', {
            "runTypeCode": "KIT_RECEIVING",
            "runCategoryCode": "ACCESSIONING",
            "runName": kitReceivingRun,
            "containersInQueues": [],
            "forceCreate": false,
            "location": "BALTIMORE"
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};



// Accessioning/Kit Receiving: run start
export const startKitReceivingRun = async (kitReceivingRun) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${kitReceivingRun}/start`, {
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// Accessioning/Kit Receiving: scanning of shipment
export const scanShipmentKitReceivingRun = async (kitReceivingRun, shipment) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/shipment_receiving/${kitReceivingRun}/add_container/${shipment}`, {
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const scanShipmentKitReceivingRun1 = async (shipment, kitReceivingRun) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/shipment_receiving/${kitReceivingRun}/add_container/${shipment}`, {
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// Accessioning/Kit Receiving: scanning of kit ARRAY ДОДЕЛАТЬ
const scanKitKitReceivingRun = async () => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/shipment_receiving/${kitReceivingRun}/add_container/${kit}?shipmentBarcode=${shipment}`, {}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const scanKitKitReceivingRun1 = async (kitReceivingRun, shipm, newKit) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/shipment_receiving/${kitReceivingRun}/add_container/${newKit}?shipmentBarcode=${shipm}`, {}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
// [ '3AKK8A7', '3XCH4K7' ] //'EXISTS'
//[ '09UPFC5', 'SA875UP' ]
//не надо сканировать тубу
// const scanTubeKitReceiving = async () => {
//     try {
//         const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/shipment_receiving/${kitReceivingRun}/add_container/${tube}?shipmentBarcode=${shipment}`,
//             {}, config);
//         console.log(resp.data);
//     } catch (err) {
//         console.error(err);
//     }
// };

// function scanArrayKitReceiving(item, index) {
//     scanKitReceiving(item);
// }
// kitsArray.forEach(scanKitReceiving);


// Accessioning/Kit Receiving: run finish
export const finishKitKitReceivingRun = async (kitReceivingRun) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${kitReceivingRun}/finish/shipment_receiving_v2`, {
        }, config);
    console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

//////////////////

// Accessioning/Kit Contents Accessioning run creation
export const createKitContentsAccessioningRun = async () => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs', {
            "runTypeCode": "KIT_CONTENTS_ACCESSIONING",
            "runCategoryCode": "ACCESSIONING",
            "runName": kitContentsAccessioningRun,
            "containersInQueues": [],
            "forceCreate": false,
            "location": "BALTIMORE"
            }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// Accessioning/Kit Contents Accessioning: run start
export const startKitContentsAccessioningRun = async () => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/kit_contents_accessioning/start/${kitContentsAccessioningRun}`, {
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// Accessioning/Kit Contents Accessioning: scanning of kit
export const skanKitKitContentsAccessioningRun = async (kit) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/kit_contents_accessioning/scan/${kitContentsAccessioningRun}`,
{"container": kit}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// Accessioning/Kit Contents Accessioning: scanning of tubes
const scanTubeKitContentsAccessioningRun = async () => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/kit_contents_accessioning/scan/${kitContentsAccessioningRun}`,
    {"container": tube, "selectedKit": kit}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// Accessioning/Kit Contents Accessioning: scanning of Log Tag
const scanLogTagKitContentsAccessioningRun = async () => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/kit_contents_accessioning/scan/${kitContentsAccessioningRun}`,
    {"container": logTag, "selectedKit": kit}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// Accessioning/Kit Contents Accessioning: run finish
const finishTubeKitContentsAccessioningRun = async () => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/kit_contents_accessioning/finish/${kitContentsAccessioningRun}`, {}, config);
            console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};


const main = async () => {
    // пререквизиты - создать кит и тубу и записать их в переменные в самом верху
    // await createSpecimenPlasma(); //необязательно
    // await putPlasmaInTube(tube);
    //
    // await createCollectEventBalt(kit);
    // await createKitReceivingRun();
    // await startKitReceivingRun();
    // await scanShipmentKitReceivingRun();
    // await scanKitKitReceivingRun();
    // await finishKitKitReceivingRun();

    // await createKitContentsAccessioningRun();
    // await startKitContentsAccessioningRun();
    // await skanKitKitContentsAccessioningRun();
    // await scanTubeKitContentsAccessioningRun();
    // //какая-то проблема со сканированием лог тега!!!!
    // await scanLogTagKitContentsAccessioningRun(); //какая-то проблема со сканированием лог тега!!!!
    // await finishTubeKitContentsAccessioningRun();
};

// main();

// BLOOD_VOLUME_TRACKING_QUEUE здесь уже лежит tube