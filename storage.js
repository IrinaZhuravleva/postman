import axios from 'axios';
import { token } from './token.js'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export const getStorage = async (itemNumber) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages/${itemNumber}`, config);
        return resp;
    } catch (err) {
        console.error(err);
    }
};

export const createStorage = async (typeCode, nameCode) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages`,{
            "containerTypeCode": typeCode,
            "code": nameCode
        }, config);
        return resp;
    } catch (err) {
        console.error(err);
    }
};



export const createTubeInStorage = async (typeCode, nameCode, kitName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages`,{
            "containerTypeCode": typeCode,
            "code": nameCode,
            "json": {"initialKitBarcode": kitName}
        }, config);
        return resp;
    } catch (err) {
        console.error(err);
    }
};

export const getStorageSpecimenVolume = async (itemNumber) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes/states?withInitialVolume=true&withInitialSpecimens=true', [itemNumber], config);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};


export const getStoragePrintParent = async (itemNumber) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages/${itemNumber}`, config);
        console.log(resp);
    } catch (err) {
        console.error(err);
    }
};
// getStorage('2H7H7HA');

// https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages/2FXC18C

// {
//     "id": "86badd53c121164616e719d385fd3525",
//     "createdAt": "2021-06-10T14:28:32.064Z",
//     "createdBy": "izhuravlyova@thrivedetect.com",
//     "containerTypeCode": "ALLIED_LBGARD_KIT_V1",
//     "containerTypeName": "Allied LBGard Kit v1",
//     "code": "2FXC18C",
//     "json": {
//     "site": "unknown",
//         "contexts": [
//         {
//             "context": "ce310a29-f4f6-4510-bcce-fb612f579caf",
//             "category": "ACCESSIONING"
//         }
//     ],
//         "containerClass": "Kit",
//         "current_number": 1,
//         "initialKitBarcode": ""
// },
//     "lastUpdatedAt": "2021-06-10T14:47:06.443Z",
//     "lastUpdatedBy": "izhuravlyova@thrivedetect.com",
//     "parent": "ORPHANS",
//     "labels": [
//     "2FXC18C"
// ]
// }

// const get = async () => {
//     try {
//         const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_types`, config);
//         const answer = JSON.parse(resp);
//         console.log(resp);
//     } catch (err) {
//         console.error(err);
//     }
// };
// get();