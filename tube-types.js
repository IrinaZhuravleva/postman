import axios from 'axios';
import { token } from './token.js'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

// all-types-containers.js !!!!!!!!!!

// BALTIMORE_PROCESSING_LABORATORY
// BALTIMORE_AVAILABLE_CONTAINERS


export const createOneTube = async (tubeType, location) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_management/create',
            {amount: 1, type: tubeType, location: location, json: {"initialKitBarcode": "test"}}, config);
        let tube = resp.data.storage.code;
        console.log(tube);
        return tube;
    } catch (err) {
        console.error(err.response.data);
    }
};

export const createOneTubeInKit = async (tubeType, kit) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_management/create',
            {amount: 1, type: tubeType, location: kit, json: {"initialKitBarcode": kit}}, config);
        let tube = resp.data.storage.code;
        console.log(tube);
        return tube;
    } catch (err) {
        console.error(err.response.data);
    }
};

export const createOneTubeWithoutInitialJSON = async (tubeType, location) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_management/create',
            {amount: 1, type: tubeType, location: location, json: {}}, config);
        let tube = resp.data.storage.code;
        console.log(tube);
        return tube;
    } catch (err) {
        console.error(err);
    }
};

// ниже бред
export const getArrayWithTubesInitialJSON = async (tubeType, location, containerNum) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_management/create',
            {type: tubeType, location: location, json: {}, amount: containerNum }, config);
        let tube = resp.data.storage.code;
        console.log(tube);
        return tube;
    } catch (err) {
        console.error(err);
    }
}

// createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');
// createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS');

// createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_AVAILABLE_CONTAINERS'); PA4N3C9
// createOneTube('BOX', 'BALTIMORE_AVAILABLE_CONTAINERS');

export const queueUpload = async (item, nameQueue) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/${nameQueue}/containers?withLocations=true`,
            {containers: [item]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
// queueUpload('SP8S5C8', 'ALIQUOTING_SERUM_QUEUE');
// queueUpload('1PAN8K7', 'ALIQUOTING_SERUM_QUEUE');

export const getArrayWithTubes = async (tubeType, location, containerNum) => {
    let tubes = [];
    for (let i = 0; i < containerNum; i++) {
        const newTube = await createOneTube(tubeType, location);
        tubes.push(newTube);
    };
    console.log(tubes);
    return tubes;
}

export const getArrayWithTubesInKit = async (tubeType, kit, containerNum) => {
    let tubes = [];
    for (let i = 0; i < containerNum; i++) {
        const newTube = await createOneTubeInKit(tubeType, kit);
        tubes.push(newTube);
    };
    console.log(tubes);
    return tubes;
}

// export const responsArray = async (containerNum, tubeType, kit) => {
//     let tubes = [];
//     for (let i = 0; i < containerNum; i++) {
//         const newTube = await createOneTubeInKit(tubeType, kit);
//         tubes.push(newTube);
//     }
//     Promise.all(tubes).then(function(arr_with_data) {
//         console.log(tubes)
//         // console.log(arr_with_data.length)
//     })
// }


export const createKitWithTubes = async(kitType, kitLocation, tubeType, tubeNumber) => {
    const emptyKit = await createOneTube(kitType, kitLocation);
    const newTube = await getArrayWithTubes(tubeType, emptyKit, tubeNumber);
    console.log(`New kit: ${emptyKit}`, `New tubes: ${newTube}`);
}


export const createKitWithTubesReturnKit = async(kitType, kitLocation, tubeType, tubeNumber) => {
    const emptyKit = await createOneTube(kitType, kitLocation);
    await getArrayWithTubes(tubeType, emptyKit, tubeNumber);
    return emptyKit;
}

export const createAndReturnKitWithTubes = async(kitType, kitLocation, tubeType, tubeNumber) => {
    const emptyKit = await createOneTube(kitType, kitLocation);
    await getArrayWithTubes(tubeType, emptyKit, tubeNumber);
    return emptyKit;
}

export const getArrayWithKits = async(kitType, kitLocation, tubeType, tubeNumber, kitsNum) => {
    let arrKit = [];
    for (let i = 0; i < kitsNum; i++) {
        const emptyKit = await createOneTube(kitType, kitLocation);
        const newTube = await getArrayWithTubes(tubeType, emptyKit, tubeNumber);
        // return newTube;
        console.log(`New kit: ${emptyKit}`, `New tubes: ${newTube}`);
        arrKit.push(emptyKit);
    };
    return arrKit;
}

// createOneTube('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS');
// createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', );
// createKitWithTubes('ALLIED_KIT', 'BALTIMORE_AVAILABLE_CONTAINERS', 'STRECK_CELL_FREE_DNA_BCT', 1); //1 P76NU3A
// createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1); //2 2UNS69A
// createKitWithTubes('ALLIED_LBGARD_KIT_V1', 'BALTIMORE_AVAILABLE_CONTAINERS', 'LBGARD_TUBE', 1); //3 9U38SFA

// {kitsNumber: 1, kitType: "ALLIED_LBGARD_KIT_V1",…}
// kitType: "ALLIED_LBGARD_KIT_V1"
// kitsNumber: 1
// parentContainerCode: "ALLIED"
// tubes: [{number: 1, showNumber: "1", type: "LBGARD_TUBE", name: "LBGard Tube v1.x"},…]
// 0: {number: 1, showNumber: "1", type: "LBGARD_TUBE", name: "LBGard Tube v1.x"}
// 1: {number: 1, showNumber: "1", type: "SST_TUBE", name: "SST Tube"}

// {
// “kitsNumber”: 1,
//     “kitType”: “ALLIED_KIT”,
// “tubes”: [
//     {
//             “type”: “STRECK_CELL_FREE_DNA_BCT”,
// “number”: 6,
//             “name”: “Streck Blood Tube”,
// “showNumber”: “6”
// }
// ],
// “parentContainerCode”: “ALLIED”
// }

export const createKitMixedTubes = async (tube1, tube2) => {
    try {
        await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/kit_orders', {
            kitType: "ALLIED_LBGARD_KIT_V1",
            kitsNumber: 1,
            parentContainerCode: "ALLIED",
            tubes: [{
                number: 1,
                showNumber: "1",
                type: "LBGARD_TUBE",
                name: "LBGard Tube v1.x"
            }, {
                number: 1,
                showNumber: "1",
                type: "SST_TUBE",
                name: "SST Tube"
            }]
        }, config);
    } catch (err) {
        console.error(err);
    }
}

// https://qa.lims.thrivedetect.com/core-services/container/api/v1/kit_orders
// {
//     "kitType": "ALLIED_LBGARD_KIT_V1",
//     "kitsNumber": 1,
//     "parentContainerCode": "ALLIED",
//     "tubes": [{"type": "LBGARD_TUBE", "number": 1, "name": "LBGard Tube v1.x", "showNumber": "1"}]
// }