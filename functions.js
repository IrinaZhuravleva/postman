import axios from 'axios';
import { token } from './token.js'
import {shipment} from "./collectionEvents.js";
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
export const tubes = [];
const specimenPlasma = 'plasma-test10';
const specimenSerum = 'blood-test01';
// {"initialKitBarcode": ""}



export const createOneTube = async (tubeType, location, initialKitBarcode) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_management/create',
            {type: tubeType, json: {initialKitBarcode: initialKitBarcode}, location: location}, config);
        // console.log(resp.data.storage.code);
        let tube = resp.data.storage.code;
        console.log(tube);
        return tube;
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const createOneTubeNew = async (tubeType, location) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_management/create',
            {type: tubeType, json: {}, location: location}, config);
        // console.log(resp.data.storage.code);
        let tube = resp.data.storage.code;
        return tube;
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const createSpecimenPlasma = async (specimenPlasma) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimens',
            {specimenTypeCode : "PLASMA",
                code : specimenPlasma}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};


// createSpecimenPlasma();

export const createSpecimenSerum = async () => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimens',
            {specimenTypeCode : "BLOOD",
                code : specimenSerum}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};


// createSpecimenSerum();
export const putPlasmaInTube = async (item) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
            { typeCode: "Transfer",
                specimenTransfers: [
                    {
                        destinationContainerCode: item,
                        volumesInfo: [
                            {
                                volume: 1000
                            }
                        ],
                        specimens: [specimenPlasma]
                    }
                ]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
// putPlasmaInTube('31AFHC2');

export const putSerumInTube = async (item) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
            { typeCode: "Transfer",
                specimenTransfers: [
                    {
                        destinationContainerCode: item,
                        volumesInfo: [
                            {
                                volume: 200
                            }
                        ],
                        specimens: [specimenSerum]
                    }
                ]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

// putSerumInTube('DESTTUBE_4');
// putSerumInTube('1PAN8K7');

export const putSpecimenInTube = async (item, volume) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
            { typeCode: "Transfer",
                specimenTransfers: [
                    {
                        destinationContainerCode: item,
                        volumesInfo: [
                            {
                                volume: volume
                            }
                        ],
                        specimens: [specimenPlasma]
                    }
                ]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

export const createSpecimen = async (specimenType, specimenName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimens',
            {specimenTypeCode : specimenType,
                code : specimenName}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const putAnySpecimenInTube = async (item, volume, specimenName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
            { typeCode: "Transfer",
                specimenTransfers: [
                    {
                        destinationContainerCode: item,
                        volumesInfo: [
                            {
                                "volume": volume
                            }
                        ],
                        specimens: [specimenName]
                    }
                ]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

export const putAnySpecimenInTubeWithMassConcentration = async (item, volume, specimenName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
            { typeCode: "Transfer",
                specimenTransfers: [{
                        destinationContainerCode: item,
                        massConcentration: 661,
                        molarConcentration: 0,
                        massConcentrationUnitCode: "pg_ul",
                        molarConcentrationUnitCode: "mmol_ul",
                        override: true,
                        volumesInfo: [{
                            volume: volume
                        }],
                        specimens: [specimenName]

                }]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

export const putAnySpecimenInTubeWithMassMolarConcentration = async (item, volume, specimenName, massConcentration, molarConcentration) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
            { typeCode: "Transfer",
                specimenTransfers: [{
                    destinationContainerCode: item,
                    massConcentration: massConcentration,
                    molarConcentration: molarConcentration,
                    massConcentrationUnitCode: "pg_ul",
                    molarConcentrationUnitCode: "mmol_ul",
                    override: true,
                    volumesInfo: [{
                        volume: volume
                    }],
                    specimens: [specimenName]

                }]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};


export const createReagent = async (reagentType, reagentName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/reagents',
            {reagentTypeCode : reagentType,
                code : reagentName}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const createReagentType = async (code, riskLevel) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/reagent_types',
            {code : code,
                riskLevel : riskLevel}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err.response.data.message);
    }
};

//Put into the queue queues/ELLA_RESULT_UPLOAD_QUEUE/containers?withLocations=true
export const queueEllaResultUpload = async (item) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/ELLA_RESULT_UPLOAD_QUEUE/containers?withLocations=true',
            {containers: [item]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

// arr.forEach(queueEllaResultUpload);

// // Put containers into the queue - EllaResultUpload run creation
export const putIntoQueueEllaResultUpload = async () => {
    try {
        const resp = await axios.get('https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/input_queues?site=BALTIMORE&runType=ELLA_RESULT_UPLOAD', config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const updateLocationWithPosition = async(item, newLocation, positionInNewLocation) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_location_management/move',
            {codes: [item], newParentCode: `${newLocation}_${positionInNewLocation}`}, config);
        // let tube = resp.data.storage.code;
        // console.log(resp);
    } catch (err) {
        console.error(err);
    }
};

export const updateLocation = async(item, newLocation) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_location_management/move',
            {codes: [item], newParentCode: newLocation}, config);
        // let tube = resp.data.storage.code;
        console.log(resp);
    } catch (err) {
        console.error(err);
    }
};

export const addExistingContainer = async (name, location, type) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/existing_container_management/create',
            {barcode: name, code: name, id: name, json: {}, location: location, type: type}, config);
        console.log(resp);
    } catch (err) {
        console.error(err);
    }
};

export const addExistingContainerWithInitialBarcode = async (name, location, type) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/existing_container_management/create',
            {barcode: name, code: name, id: name, json: {initialKitBarcode: location}, location: location, type: type}, config);
        console.log(resp);
    } catch (err) {
        console.error(err);
    }
};

export const createAnyRun = async (runName) => {
    try {
        const resp = await axios.get(`qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const createAnyRunNew = async (runCategoryCode, runTypeCode, runName, location) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs', {
            "runTypeCode": runTypeCode,
            "runCategoryCode": runCategoryCode,
            "runName": runName,
            "containersInQueues": [],
            "forceCreate": false,
            "location": location
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const startAnyBloodProcessingRunNew = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${runName}/start`, {}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const startAnyRunTypeStartID = async (runType, runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/${runType}/start/${runName}`, {}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const checkContainerInRunPooling = async(item, nameRun) => {
    try{
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${nameRun}/container_content_transfer/pooling`,
            {destinationContainerCode: item}, config);
        console.log(resp);
    }
    catch(err){
        console.error(err);
    }
}

export const putContainerInContainersToStoreQueue = async(item) => {
    try{
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/CONTAINERS_TO_STORE_QUEUE/containers?withLocations=true`,
            {containers: [item]}, config);
        console.log(resp);
        return resp;
    }
    catch(err){
        console.error(err);
    }
}


export const putContainerInAnyQueue = async(item, queueName) => {
    try{
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/${queueName}/containers?withLocations=true`,
            {containers: [item]}, config);
        console.log(resp);
        // return resp;
    }
    catch(err){
        console.error(err);
    }
}
// // Accessioning/Kit Receiving: scanning of shipment
export const scanShipmentKitReceivingRun = async (runName, shipment) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/shipment_receiving/${runName}/add_container/${shipment}`, {
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// POST /core-services/container/api/v1/run/kit_contents_accessioning/scan/:RunName  endpoint.
// Product Backlog Item 28845: Performance: Kit Contents Accessioning: Speed up container scan functionality

// дописать переменные

export const creatMaterialLot = async (dates, lotNumber, reagentType) => {
    try {
        await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management', {
            associatedRunsIds: [],
            containerBarcode: "",
            containers: [],
            expirationDate: "2022-08-08",
            externalId: "",
            externalLotId: lotNumber,
            files: [],
            formulated: false,
            formulationParentContainers: [],
            iqc: {},
            lotNumber: lotNumber,
            preparationDate: dates,
            qa: {},
            reagentType: reagentType,
            receivingDate: dates,
            status: 0,
            storageInstructions: 0,
            storageInstructionsName: "Not specified",
            type: reagentType,
            typeAbbreviation: "",
            typeName: 'WBC-DUAL9-K',
            typeRiskLevelName: "Level 3"
        }, config)
    } catch (err) {
        console.error(err);
    }
};
//дописать с формулейтид
export const creatFormulatedMaterialLot = async (dates, formulatedLotNumber, formulatedReagentType, parentTube) => {
    try {
        await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management', {
            associatedRunsIds: [],
            containerBarcode: "",
            containers: [],
            expirationDate: "2022-08-29",
            externalId: "",
            externalLotId: formulatedLotNumber,
            files: [],
            formulated: false,
            formulationParentContainers: [parentTube],
            0: parentTube,
            iqc: {},
            lotNumber: formulatedLotNumber,
            preparationDate: dates,
            qa: {},
            reagentType: formulatedReagentType,
            receivingDate: "",
            status: 0,
            storageInstructions: 0,
            storageInstructionsName: "Not specified",
            type: formulatedReagentType,
            typeAbbreviation: "",
            typeName: "WBC-DUAL9-K",
            typeRiskLevelName: "Level 3"
        }, config)
    } catch (err) {
        console.error(err);
    }
};


export const creatMaterialLotWithTube = async (dates, lotNumber, reagentType, tube) => {
    try {
        await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management', {
            associatedRunsIds: [],
            containerBarcode: "",
            containers: [
                {
                    code: tube,
                    isSpecimenProcessAvailable: true,
                    massConcentration: 0,
                    molarConcentration: 0,
                    parent: "BALTIMORE_AVAILABLE_CONTAINERS",
                    status: 1,
                    volume: 0,
                    volumeUnit: "ul"
                },],

            expirationDate: "2022-08-08",
            externalId: "",
            externalLotId: lotNumber,
            files: [],
            formulated: false,
            formulationParentContainers: [],
            iqc: {},
            lotNumber: lotNumber,
            preparationDate: dates,
            qa: {},
            reagentType: reagentType,
            receivingDate: dates,
            status: 0,
            storageInstructions: 0,
            storageInstructionsName: "Not specified",
            type: reagentType,
            typeAbbreviation: "",
            typeName: "WBC-DUAL9-K",
            typeRiskLevelName: "Level 3"
        }, config)
    } catch (err) {
        console.error(err);
    }
};

export const creatMaterialLotWith2Tubes = async (dates, lotNumber, reagentType, tube1, tube2) => {
    try {
        await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management', {
            associatedRunsIds: [],
            containerBarcode: "",
            containers: [
                {
                    code: tube1,
                    isSpecimenProcessAvailable: true,
                    massConcentration: 0,
                    molarConcentration: 0,
                    parent: "BALTIMORE_AVAILABLE_CONTAINERS",
                    status: 1,
                    volume: 0,
                    volumeUnit: "ul"
                },
                {
                    code: tube2,
                    isSpecimenProcessAvailable: true,
                    massConcentration: 0,
                    molarConcentration: 0,
                    parent: "BALTIMORE_AVAILABLE_CONTAINERS",
                    status: 1,
                    volume: 0,
                    volumeUnit: "ul"
                }
            ],

            expirationDate: "2022-08-08",
            externalId: "",
            externalLotId: lotNumber,
            files: [],
            formulated: false,
            formulationParentContainers: [],
            iqc: {},
            lotNumber: lotNumber,
            preparationDate: dates,
            qa: {},
            reagentType: reagentType,
            receivingDate: dates,
            status: 3,
            storageInstructions: 0,
            storageInstructionsName: "Not specified",
            type: reagentType,
            typeAbbreviation: "",
            typeName: "WBC-DUAL9-K",
            typeRiskLevelName: "Level 3"
        }, config)
    } catch (err) {
        console.error(err);
    }
};

export const createMaterialLotWithKit = async (dates, lotNumber, reagentType, typeName, kitID) => {
    try {
        await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management/validate', {
            associatedRunsIds: [],
            containerBarcode: "",
            containers: [
                {
                    code: kitID,
                    isSpecimenProcessAvailable: true,
                    massConcentration: 0,
                    molarConcentration: 0,
                    parent: "BALTIMORE_AVAILABLE_CONTAINERS",
                    status: 1,
                    volume: 0,
                    volumeUnit: "kit"
                },],

            expirationDate: "2022-08-08",
            externalId: "",
            externalLotId: lotNumber,
            files: [],
            formulated: false,
            formulationParentContainers: [],
            iqc: {},
            lotNumber: lotNumber,
            preparationDate: dates,
            qa: {},
            reagentType: reagentType,
            receivingDate: dates,
            status: 0,
            storageInstructions: 0,
            storageInstructionsName: "Not specified",
            type: reagentType,
            typeAbbreviation: "",
            typeName: typeName,
            typeRiskLevelName: "Level 3"
        }, config)
    } catch (err) {
        console.error(err);
    }
};
export const scanIntoBulkMatLot = async (item, runID) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/material_containers_bulk_update/${runID}/scan_containers`,
            {containerCodes: [item]}, config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}
//

export const getSpecimenStates = async (item) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes/states`,
            [item], config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}

//
export const getGeneralInfoFromStorage = async (item) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages/${item}`, config);
        console.log(resp.data);
        return resp.data;
    }
    catch (err) {
        console.log(err)
    }
}

export const getInfoAboutMatLot = async (item) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management/${item}`, config);
        console.log(resp.data);
        return resp.data;
    }
    catch (err) {
        console.log(err)
    }
}

export const putTubeIntoMatLot = async (dates, item, volume, lotNumber, lotType) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management/${item}`,
            {
            "lotNumber": lotNumber,
            "type": lotType,
            "expirationDate": "2022-08-08",
            "receivingDate": dates,
            "preparationDate": dates,
            // "typeName": "Picogreen dsDNA Kit",
            "typeRiskLevelName": "Level 3",
            // "storageInstructionsName": "-20 °C",
            "storageInstructions": 3,
            "approvedExternalIds": [],
            "files": [],
            "status": 1,
            "externalLotId": lotNumber,
            "externalId": "",
            "typeRiskLevel": 3,
            "iqc": {
            "isIqcComplete": null,
                "isIqcChanged": null
        },
            "qa": {
            "isQaSignoff": null
        },
            "createdAt": "2021-12-03T16:42:21.112Z",
            "createdBy": "izhuravlyova@thrivedetect.com",
            "associatedRunsIds": [],
            "formulationParentContainers": [],
            "containers": [
            {
                "code": item,
                "volume": volume,
                "massConcentration": 0,
                "molarConcentration": 0,
                "volumeUnit": "kit",
                "status": 1,
                "parent": "BALTIMORE_AVAILABLE_CONTAINERS",
                "isSpecimenProcessAvailable": true
            }
        ],
            "availableContainersCount": 1,
            "reagentType": "MAT000415"
            },
            config);
        console.log(resp.data);
        return resp.data;
    }
    catch (err) {
        console.log(err)
    }
}

// https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages/7C1CK0F_A.1/enumerate?limit=10&offset=0&useView=true&returnJson=true
export const getChildFromStorage = async (item, childPosition) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages/${item}_${childPosition}/enumerate?limit=10&offset=0&useView=true&returnJson=true`, config);
        // return resp.data[0].code;
        return resp;
    }
    catch (err) {
        console.log(err)
    }
}

export const getSpecimenFromStorage = async (item) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes/states?withInitialVolume=true&withInitialSpecimens=true',
            [item], config);
        console.log(resp.data);
        return resp.data[0].initialSpecimens;
    }
    catch (err) {
        console.log(err)
    }
}
export const getSpecimenMolarMassFromStorage = async (item) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes/states',
            [item], config);
        console.log(resp);
        return resp.data;
    }
    catch (err) {
        console.log(err)
    }
}

// lims.sat_container_content

// "F-0000080"
export const getParentFromStorage = async (item) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/storages/${item}`, config);
        console.log(resp.data.parent);
    }
    catch (err) {
        console.log(err)
    }
}

export const getQueueFromStorage = async (item) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/containers/placed',
            [item], config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}

export const putTubeIntoMaterialLot = async (dates, item, lotNumber, reagentType, volume, ml, status) => {
    try {
    const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management/${lotNumber}`,
            {
            "lotNumber": lotNumber,
            "type": reagentType,
            "expirationDate": "2022-08-08",
            "receivingDate": dates,
            "preparationDate": dates,
            "typeName": "DNase/RNase-Free Distilled Water",
            "typeRiskLevelName": "Level 3",
            "storageInstructionsName": "RT",
            "storageInstructions": 1,
            "approvedExternalIds": [
            "500610"
        ],
            "files": [],
            "status": 2,
            "externalLotId": lotNumber,
            "externalId": "",
            "typeRiskLevel": 3,
            "iqc": {
            "isIqcComplete": null,
                "isIqcChanged": null
        },
            "qa": {
            "isQaSignoff": null
        },
            "createdAt": "2021-11-22T12:36:31.949Z",
            "createdBy": "izhuravlyova@thrivedetect.com",
            "associatedRunsIds": [],
            "formulationParentContainers": [],
            "containers": [
            {
                "code": item,
                "volume": volume,
                "massConcentration": 0,
                "molarConcentration": 0,
                "volumeUnit": ml,
                "status": status,
                "parent": "BALTIMORE_AVAILABLE_CONTAINERS",
                "isSpecimenProcessAvailable": true
            }
        ],
            "availableContainersCount": 0,
            "reagentType": reagentType
            }, config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}
// {containers: ["7FFA11U"], lotNumber: "R-0001041"}

// export const putTubeIntoMaterialLot = async (item, lotNumber) => {
//     try {
//         const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management/R-0000028',
//             {associatedRunsIds: [],
//                 containerBarcode: "",
//                 containers: [
//                     {
//                         code: "190SUSN",
//                         isSpecimenProcessAvailable: true,
//                         massConcentration: 0,
//                         molarConcentration: 0,
//                         parent: "BALTIMORE_AVAILABLE_CONTAINERS",
//                         status: 1,
//                         volume: 0,
//                         volumeUnit: "ul"
//                     },
//                     createdAt: "2021-11-01T12:47:36.043Z",
//         createdBy: "izhuravlyova@thrivedetect.com",
//         expirationDate: "2021-11-06",
//         externalId: "",
//         externalLotId: "R-0000028",
//         files: [],
//         formulationParentContainers: [],
//         iqc: {isIqcComplete: null, isIqcChanged: null},
//         lotNumber: "R-0000028",
//         preparationDate: "2021-11-01",
//         qa: {isQaSignoff: null},
//         reagentType: "MAT000033",
//         status: 2,
//         storageInstructions: 0,
//         storageInstructionsName: "Not specified"
//         type: "MAT000033"
//         typeName: "WBC-FR8-C"
//         typeRiskLevel: 3
//         typeRiskLevelName: "Level 3"
//
//
//
//             }, config);
//         console.log(resp.data);
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

export const putLotIntoMatQCTesting = async (item, runName) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run_qc_testing/addLot/${runName}/${item}`, {}, config);
        // return resp.data[0].code;
        return resp;
    }
    catch (err) {
        console.log(err)
    }
}

export const creatMatLot = async () => {
    try {
        await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management', {
            associatedRunsIds: [],
            containerBarcode: "",
            containers: [
                {
                    code: "190SUSN",
                    isSpecimenProcessAvailable: true,
                    massConcentration: 0,
                    molarConcentration: 0,
                    parent: "BALTIMORE_AVAILABLE_CONTAINERS",
                    status: 1,
                    volume: 0,
                    volumeUnit: "ul"
                },
                {
                    code: "8HK25HF",
                    isSpecimenProcessAvailable: true,
                    massConcentration: 0,
                    molarConcentration: 0,
                    parent: "BALTIMORE_AVAILABLE_CONTAINERS",
                    status: 1,
                    volume: 0,
                    volumeUnit: "ul"
                }],
            expirationDate: "2022-08-08",
            externalId: "TEST_NLQY56B4BU",
            externalLotId: "R-0000012",
            files: [],
            formulated: false,
            formulationParentContainers: [],
            iqc: {},
            lotNumber: "R-0000012",
            preparationDate: "2021-07-28",
            qa: {},
            reagentType: "MAT000065",
            receivingDate: "2021-07-28",
            status: 0,
            storageInstructions: 0,
            storageInstructionsName: "Not specified",
            type: "MAT000065",
            typeAbbreviation: "",
            typeName: "WBC-DUAL9-J",
            typeRiskLevelName: "Level 3"
        })
    } catch (err) {
        console.error(err);
    }
}
// curl --location --request PUT 'https://qa.lims.thrivedetect.com/core-services/container/api/v1/reagents/R-0000100' \
// --data-raw '{
// "json": {
// {
//     "reagentTypeCode": "MAT000201",
//     "code": "<lot_id>",
//     "json": {
//     "files": [],
//         "containers": [
//         {
//             "code": "<tube>",
//             "json": {},
//             "status": 1,
//             "volume": 0,
//             "measures": [
//                 {
//                     "json": {},
//                     "value": 0,
//                     "unitCode": "ul",
//                     "unitTitle": "uL",
//                     "measureCode": "volume",
//                     "measureTitle": "volume",
//                     "measureTypeCode": "volume"
//                 }
//             ],
//             "reagents": [
//                 "<lot_id>"
//             ],
//             "specimens": [],
//             "volumeUnit": "ul",
//             "processDate": null,
//             "containerCode": "<tube>",
//             "massConcentration": 0,
//             "molarConcentration": 0,
//             "isSpecimenProcessAvailable": true
//         }
//     ],
//         "externalId": "",
//         "expiration_date": "2021-09-09",
//         "preparation_date": "2021-08-29",
//         "formulation_parent_containers": []
// }
// }

export const transfer = async (tube_source, tube_dest, specimenName, volume) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
            {
                "typeCode": "Aliquoting",
                "specimenTransfers": [
                    {
                        "destinationContainerCode": tube_dest,
                        "volumesInfo": [
                            {
                                "sourceContainerCode": tube_source,
                                "volume": volume,
                                "processDate": "08-08-2020 12:33:00"
                            }
                        ],
                        "specimens": [
                            specimenName
                        ]
                    }
                ]}, config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}

export const aliquoting = async (tube_dest, specimenName, volume, units) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
            {
                "typeCode": "Aliquoting",
                "specimenTransfers": [
                    {
                        "destinationContainerCode": tube_dest,
                        "volumesInfo": [
                            {
                                "volume": volume,
                                "volumeUnitCode": units
                            }
                        ],
                        "specimens": [
                            specimenName
                        ]
                    }
                ]}, config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}

//
//
// async function sendHTTPRequest(url) {
//     const response = await axios.get(url)
//     return response.data.url
// }

// var responses = []
//
// for(let i = 0; i < 10; i++) {
//     let response = sendHTTPRequest("https://api.github.com/repos/stedolan/jq/issues/2289")
//     responses.push(response)
// }
//
// Promise.all(responses).then(function(arr_with_data) {
//     console.log(arr_with_data)
//     console.log(arr_with_data.length)
// })



export const interTransfer = async (array, kit) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_processes',
            {
                "containerProcessType" : "InternalTransfer",
                "json" : {},
                "containers" : [
                    {"containerCode": array[0], "parentContainerCode": "BALTIMORE_PROCESSING_LABORATORY"},
                    {"containerCode": array[1], "parentContainerCode": "BALTIMORE_PROCESSING_LABORATORY"},
                    {"containerCode": array[2], "parentContainerCode": "BALTIMORE_PROCESSING_LABORATORY"},
                    {"containerCode": array[3], "parentContainerCode": "BALTIMORE_PROCESSING_LABORATORY"},
                    {"containerCode": array[4], "parentContainerCode": "BALTIMORE_PROCESSING_LABORATORY"},
                    {"containerCode": array[5], "parentContainerCode": "BALTIMORE_PROCESSING_LABORATORY"},
                    {"containerCode": kit, "parentContainerCode": "DISPOSAL"}
                ]
            }, config);
        // console.log(resp.data);
    }

    catch (err) {
        console.log(err)
    }
}

export const getRunContext = async (run) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${run}`, config);
        console.log(resp.data.json.context);
        return resp.data.json.context;
    }
    catch (err) {
        console.log(err)
    }
}
// data_entities/<run_context>

    export const checkRunContextGetServerStatus = async (runContext) => {
        try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/data_entities/${runContext}`, config);
        console.log(resp.status);
    }
        catch (err) {
        console.log(err)
    }
}

export const checkRunContextGetIndexPlatemap = async (runContext) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/data_entities/${runContext}`, config);
        console.log(resp.data.json.cfDnaSvGsp2.indexPlatemap);
    }
    catch (err) {
        console.log(err)
    }
}

// https://qa.lims.thrivedetect.com/core-services/container/api/v1/reagent_types?searchText=SPRIselect+beads+10+mL&offset=0&limit=5

    export const searchForMaterialTypeInfo = async (type) => {
        try {
            const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/reagent_types?searchText=${type}&offset=0&limit=5`, config);
            // console.log(resp.data);
            return resp.data;
        }
        catch (err) {
            console.log(err)
        }
    }

export const getMaterialTypeInfo = async (type) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/reagent_types/${type}`, config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}
export const getMaterialTypeInfoWithJSON = async (type) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/reagent_types/${type}`, config);
        return resp.data;
    }
    catch (err) {
        console.log(err)
    }
}

//создать пустой ран https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/types/BLOOD_CENTRIFUGATION/label

export const cryopakCheck = async (kit) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/error_codes/link/container/${kit}`, config);
        // console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};
export const changeMatLotStatus = async (lot, status, reagentType) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/lot_management/${lot}`,
        {
            "lotNumber": lot,
            "type": reagentType,
            "expirationDate": "2022-08-08",
            "receivingDate": "2021-11-19",
            "preparationDate": "2021-11-19",
            "typeName": "WBC-FR8-C",
            "typeRiskLevelName": "Level 3",
            "storageInstructionsName": "Not specified",
            "storageInstructions": 0,
            "approvedExternalIds": [],
            "files": [],
            "status": status,
            "externalLotId": lot,
            "externalId": "",
            "typeRiskLevel": 3,
            "iqc": {
            "isIqcComplete": null,
                "isIqcChanged": null
        },
            "qa": {
            "isQaSignoff": null
        },
            "createdAt": "2021-11-19T15:57:40.807Z",
            "createdBy": "izhuravlyova@thrivedetect.com",
            "associatedRunsIds": [],
            "formulationParentContainers": [],
            "containers": [],
            "availableContainersCount": 0,
            "reagentType": reagentType
        }, config);
        // console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const newLocationValueBulkUpdate = async (runName, newLocationValue) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/material_containers_bulk_update/${runName}/update_form`,

            {
                key: "newLocation",
                value: newLocationValue
            }, config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}

// https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/material_containers_bulk_update/MATERIAL_CONTAINERS_BULK_UPDATE_22NOV21_5/update_form

// SELECT * FROM lims.barcode_printer_log_view WHERE barcode = 'K91SS9K';

// https://stg.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes

export const changeMeasureValue = async (item, value, unitCode) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes`,

            {
                "typeCode": "Transfer",
                "specimenTransfers": [
                    {
                        "destinationContainerCode": item,
                        "measuresInfo": [
                            {
                                "measureCode": "molar_concentration",
                                "unitCode": unitCode,
                                "value": value,
                            }
                        ]
                    }]
            }, config);
        console.log(resp.data);
    }
    catch (err) {
        console.log(err)
    }
}
