import axios from 'axios';
import { token } from './token.js'
import FormData from "form-data";
import {shipment} from "./collectionEvents.js";
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
import fs from "fs"

// putIntoBloodCentrifugationQueue()
// https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/BLOOD_CENTRIFUGATION_QUEUE/containers?withLocations=true
// {containers: ["19CSN0F"]}

export const putIntoBloodCentrifugationQueue = async (item1, item2, item3,item4,item5,item6,runName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs',
            {
                "containersInQueues": [
                    {
                        "containerCode": item1,
                        "queueCode": "BLOOD_CENTRIFUGATION_QUEUE"
                    },
                    {
                        "containerCode": item2,
                        "queueCode": "BLOOD_CENTRIFUGATION_QUEUE"
                    },
                    {
                        "containerCode": item3,
                        "queueCode": "BLOOD_CENTRIFUGATION_QUEUE"
                    },
                    {
                        "containerCode": item4,
                        "queueCode": "BLOOD_CENTRIFUGATION_QUEUE"
                    },
                    {
                        "containerCode": item5,
                        "queueCode": "BLOOD_CENTRIFUGATION_QUEUE"
                    },
                    {
                        "containerCode": item6,
                        "queueCode": "BLOOD_CENTRIFUGATION_QUEUE"
                    }
                ],
                "forceCreate": false,
                "runCategoryCode": "BLOOD_PROCESSING",
                "runName": runName,
                "runTypeCode": "BLOOD_CENTRIFUGATION",
                "site": "BALTIMORE"
            }, config);
        // console.log(resp.data.storage.code);
        console.log(resp);
        return resp;
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const putIntoPlasmaCentrifugationQueue = async (item, runName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs',
            {
                "containersInQueues": [
                    {
                        "containerCode": item,
                        "queueCode": "PLASMA_CENTRIFUGATION_QUEUE"
                    }
                ],
                "forceCreate": false,
                "runCategoryCode": "BLOOD_PROCESSING",
                "runName": runName,
                "runTypeCode": "PLASMA_CENTRIFUGATION",
                "site": "BALTIMORE"
            }, config);
        // console.log(resp.data.storage.code);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const putIntoPlasmaQueue = async (item1, item2, item3,item4,item5,item6,runName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs',
            {
                "containersInQueues": [
                    {
                        "containerCode": item1,
                        "queueCode": "POOLING_PLASMA_QUEUE"
                    },
                    {
                        "containerCode": item2,
                        "queueCode": "POOLING_PLASMA_QUEUE"
                    },
                    {
                        "containerCode": item3,
                        "queueCode": "POOLING_PLASMA_QUEUE"
                    },
                    {
                        "containerCode": item4,
                        "queueCode": "POOLING_PLASMA_QUEUE"
                    },
                    {
                        "containerCode": item5,
                        "queueCode": "POOLING_PLASMA_QUEUE"
                    },
                    {
                        "containerCode": item6,
                        "queueCode": "POOLING_PLASMA_QUEUE"
                    }
                ],
                "forceCreate": false,
                "runCategoryCode": "BLOOD_PROCESSING",
                "runName": runName,
                "runTypeCode": "POOLING_PLASMA",
                "site": "BALTIMORE"
            }, config);
        // console.log(resp.data.storage.code);
        console.log(resp);
        return resp;
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const getRunID = async (runType) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/types/${runType}/label`, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};
// https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/input_queues?site=CAMBRIDGE&runType=CRYOPAK_FILE_UPLOAD

// POST on THRIVE_API_URL/blood_processing/runs/CENTRIFUGATION_BLOOD_15OCT21_4/start
// with empty payload

export const startRunID = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${runName}/start`, {}, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};


export const startMatBulkUpdateRunID = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/material_containers_bulk_update/start/${runName}`, {}, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const startManualPouringRunID = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/manual_pouring_serum/start/${runName}/start`, {}, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const getInstructions = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/instruction/run/${runName}`, {
            "step": {
            "stepNo": 1,
                "createdAt": "2021-10-15T15:37:10.817Z",
                "createdBy": "undefined",
                "isFollowed": true,
                "description": "Spin the samples at RT at 1,900 × g for 25 minutes (without the brake applied; deceleration at 0)",
                "isDisabledComment": false,
                "isDisabledFollowed": false
        },
            "index": 0
        }, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const getInstructionsCentrifugationPlasma = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/instruction/run/${runName}`, {
            "step": {
            "stepNo": 1,
                "createdAt": "2021-10-18T14:17:01.922Z",
                "createdBy": "undefined",
                "isFollowed": true,
                "description": "Spin the plasma pools for 15 minutes at 4500 × g and 20 °C with full brakes applied (deceleration speed 9)",
                "isDisabledComment": false,
                "isDisabledFollowed": false
        },
            "index": 0

        }, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const getRequiredEquipment = async (runName) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/equipment_types/run/${runName}`, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};


export const getSpecificEquipment = async (runName) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/equipment_management/typeahead/${runName}?equipmentTypeId=SORVALL_X4&site=BALTIMORE&searchText=th&active=true`, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const getSpecificEquipmentWithType = async (runName,type) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/equipment_management/typeahead/${runName}?equipmentTypeId=${type}&site=BALTIMORE&searchText=th&active=true`, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const getSpecificEquipmentMicroLab = async (runName) => {
    try {
        const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/equipment_management/typeahead/${runName}?equipmentTypeId=MICROLAB_STAR_EASYBLOOD&site=BALTIMORE&searchText=th&active=true`, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const setRequiredEquipment = async (runName, equipmentID) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}/equipments`,
                [equipmentID],
            config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const finishRunID = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${runName}/finish/centrifuge`, {}, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};


export const finishManualPouringRunID = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${runName}/finish/manual_pouring`, {}, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const finishAnyRunID = async (runName, type) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${runName}/finish/${type}`, {}, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const finishSerumAliquotingRunID = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/serum_aliquoting/finish/${runName}`, {}, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const queuesInfoVerification = async (item) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/containers/placed`,
            [item], config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const putIntoBloodProcessingQueue = async (item,runName, runType, queueName) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs',
            {
                "containersInQueues": [
                    {
                        "containerCode": item,
                        "queueCode": queueName
                    }
                ],
                "forceCreate": false,
                "runCategoryCode": "BLOOD_PROCESSING",
                "runName": runName,
                "runTypeCode": runType,
                "site": "BALTIMORE"
            }, config);
        // console.log(resp.data.storage.code);
        console.log(resp);
        return resp;
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const startPoolingPlasmaRunID = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/pooling_plasma/start/${runName}`, {}, config);
        console.log(resp.data.json);
        return resp.data.json;
    } catch (err) {
        console.error(err);
    }
};

export const finishPoolingPlasmaRunID = async (runName) => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/pooling_plasma/finish/${runName}`, {}, config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const createDestTube50Epp = async () => {
    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_management/create`, {
            "type": "50ML_EPPENDORF_CONICAL_TUBE",
            "json": {},
            "location": "BALTIMORE_AVAILABLE_CONTAINERS",
            "amount": 1
        }, config);
        console.log(resp.data.storage.code);
        return resp.data.storage.code;
    } catch (err) {
        console.error(err);
    }
};

export const uploadFile = async (eppTube, originalKit, runName) => {
    const CSV_plasma = [
        'PLASMA_BARCODE,VOLUME_uL,KIT_ID',
        `${eppTube},29000,${originalKit}`,
    ].join('\n');

    const formData = new FormData()
    formData.append("file", CSV_plasma, `${runName}_output.csv`)

    let localConfig = {...config}
    localConfig.headers = {...localConfig.headers, ...formData.getHeaders()}

    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/run/pooling_plasma/upload/${runName}`,
            formData,
            localConfig)
        console.log(resp.status);
    } catch (e) {
        console.log(e)
    }
};

export const uploadAnyFile = async (CSV, runType, runName) => {
    // const CSV = [
    //     headers,
    //     tableContent
    // ].join('\n');

    const formData = new FormData()
    formData.append("file", CSV, `${runName}_output.csv`)

    let localConfig = {...config}
    localConfig.headers = {...localConfig.headers, ...formData.getHeaders()}

    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${runName}/upload/${runType}`,
            formData,
            localConfig)
        console.log(resp.status);
    } catch (e) {
        console.log(e)
    }
};

export const uploadFileLGAliquot = async (sourceTube, destTube, runName) => {
    const CSV = [
        'SourcePositionBC,VolumeTransferred,TargetCarrierBC,TargetPositionID,TargetPositionBC,RunDateTimeStamp,InitialSourceVolume',
        `${sourceTube},10000,123,456,${destTube},18_Oct_2021_091601,25000`,
    ].join('\n');

    const formData = new FormData()
    formData.append("file", CSV, `${runName}_output.csv`)

    let localConfig = {...config}
    localConfig.headers = {...localConfig.headers, ...formData.getHeaders()}

    try {
        const resp = await axios.post(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${runName}/upload/large_aliquoting`,
            formData,
            localConfig)
        console.log(resp.status);
    } catch (e) {
        console.log(e)
    }
};


export const setConsumables = async (runName, context) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {
            "json": {
            "site": "BALTIMORE",
            "files": {
            "50ML_EPPENDORF_CONICAL_TUBE": true
        },
            "context": context,
            "pooling": {
            "changedRunItems": {}
        },
            "consumables": [
            {
                "name": "50 mL Eppendorf Conical",
                "purchaseSpec": "302919",
                "thriveLotNumber": "100"
            }
        ],
            "assayVersions": [
            {
                "id": "POOLING_VERSION",
                "name": "Pooling SOP",
                "documentNumberOptions": [
                    {
                        "name": "WI-LAB-00001",
                        "value": "WI-LAB-00001",
                        "versionOptions": [
                            {
                                "name": "V3",
                                "value": "V3"
                            }
                        ]
                    }
                ]
            }
        ],
            "errorCodeTags": {
            "runLevel": [
                "RUN",
                "POOLING"
            ],
                "runItemLevel": [
                "RUN_ITEM",
                "POOLING"
            ],
                "equipmentLevel": [
                "EQUIPMENT"
            ]
        },
            "expectedFiles": {
            "50ML_EPPENDORF_CONICAL_TUBE": {
                "name": "Plasma Volumes"
            }
        },
            "labProcedureData": {
            "generalNotes": "",
                "assayVersions": [
                {
                    "id": "POOLING_VERSION",
                    "version": "V3",
                    "documentNumber": "WI-LAB-00001"
                }
            ],
                "defaultMethodId": "pooling",
                "workInstruction": [],
                "automationMethods": {
                "pooling": {
                    "id": "pooling",
                        "name": "Pooling",
                        "protocolOptions": [
                        {
                            "id": "BloodPooling_V25",
                            "name": "BloodPooling_V2.5"
                        }
                    ],
                        "defaultProtocolId": "BloodPooling_V25"
                }
            },
            "automationMethodName": "pooling",
                "automationProtocolName": "BloodPooling_V25"
        },
            "useContainerLevel": true,
            "equipmentCategories": [
            {
                "categoryName": "Microlab STAR (EasyBlood)",
                "equipmentTypes": [
                    "MICROLAB_STAR_EASYBLOOD"
                ]
            }
        ]}
    }, config);
        console.log(resp.data.json.consumables);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const setExpirationDate = async (runName, context) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {
            "json":{
            "site": "BALTIMORE",
            "files": {
            "50ML_EPPENDORF_CONICAL_TUBE": true
        },
            "context": context,
            "pooling": {
            "changedRunItems": {}
        },
            "consumables": [
            {
                "name": "50 mL Eppendorf Conical",
                "purchaseSpec": "302919",
                "thriveLotNumber": "100",
                "expirationDate": "2022-10-06"
            }
        ],
            "assayVersions": [
            {
                "id": "POOLING_VERSION",
                "name": "Pooling SOP",
                "documentNumberOptions": [
                    {
                        "name": "WI-LAB-00001",
                        "value": "WI-LAB-00001",
                        "versionOptions": [
                            {
                                "name": "V3",
                                "value": "V3"
                            }
                        ]
                    }
                ]
            }
        ],
            "errorCodeTags": {
            "runLevel": [
                "RUN",
                "POOLING"
            ],
                "runItemLevel": [
                "RUN_ITEM",
                "POOLING"
            ],
                "equipmentLevel": [
                "EQUIPMENT"
            ]
        },
            "expectedFiles": {
            "50ML_EPPENDORF_CONICAL_TUBE": {
                "name": "Plasma Volumes"
            }
        },
            "labProcedureData": {
            "generalNotes": "",
                "assayVersions": [
                {
                    "id": "POOLING_VERSION",
                    "version": "V3",
                    "documentNumber": "WI-LAB-00001"
                }
            ],
                "defaultMethodId": "pooling",
                "workInstruction": [],
                "automationMethods": {
                "pooling": {
                    "id": "pooling",
                        "name": "Pooling",
                        "protocolOptions": [
                        {
                            "id": "BloodPooling_V25",
                            "name": "BloodPooling_V2.5"
                        }
                    ],
                        "defaultProtocolId": "BloodPooling_V25"
                }
            },
            "automationMethodName": "pooling",
                "automationProtocolName": "BloodPooling_V25"
        },
            "useContainerLevel": true,
            "equipmentCategories": [
            {
                "categoryName": "Microlab STAR (EasyBlood)",
                "equipmentTypes": [
                    "MICROLAB_STAR_EASYBLOOD"
                ]
            }
        ]}}, config);
        console.log(resp.data.json.consumables);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const setConsumablesForManualPouring = async (runName, context) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {

            "json": {
                "site": "BALTIMORE",
                "context": context,
                "consumables": [{
                    "name": "50mL Eppendorf Conical",
                    "purchaseSpec": "302919",
                    "thriveLotNumber": "automationLotTC24299_pouring"}],
                "assayVersions": [{
                    "id": "MANUAL_POURING_VERSION",
                    "name": "Manual Pouring SOP",
                    "documentNumberOptions": [{
                        "name": "WI-LAB-00001",
                        "value": "WI-LAB-00001",
                        "versionOptions": [{"name": "V3","value": "V3"}]}]}],
                "errorCodeTags": {
                    "runLevel": ["RUN","MANUAL_POURING"],
                    "runItemLevel": ["RUN_ITEM","MANUAL_POURING"],
                    "equipmentLevel": ["EQUIPMENT"]},
                "labProcedureData": {
                    "generalNotes": "",
                    "assayVersions": [{
                        "id": "MANUAL_POURING_VERSION",
                        "version": "V3",
                        "documentNumber": "WI-LAB-00001"}],
                    "workInstruction": []
                },
                "useContainerLevel": true,
                "equipmentCategories": []
            }
        }, config);
        console.log(resp.data.json.consumables);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const setExpirationDateForManualPouring = async (runName, context) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {
            "json": {
                "site": "BALTIMORE",
                "context": context,
                "consumables": [{
                    "name": "50mL Eppendorf Conical",
                    "purchaseSpec": "302919",
                    "thriveLotNumber": "automationLotTC24299_pouring",
                    "expirationDate": "2022-10-30"
                }],
                "assayVersions": [{
                    "id": "MANUAL_POURING_VERSION",
                    "name": "Manual Pouring SOP",
                    "documentNumberOptions": [{
                        "name": "WI-LAB-00001",
                        "value": "WI-LAB-00001",
                        "versionOptions": [{"name": "V3","value": "V3"}]}]}],
                "errorCodeTags": {
                    "runLevel": ["RUN","MANUAL_POURING"],
                    "runItemLevel": ["RUN_ITEM","MANUAL_POURING"],
                    "equipmentLevel": ["EQUIPMENT"]},
                "labProcedureData": {
                    "generalNotes": "",
                    "assayVersions": [{
                        "id": "MANUAL_POURING_VERSION",
                        "version": "V3",
                        "documentNumber": "WI-LAB-00001"}],
                    "workInstruction": []
                },
                "useContainerLevel": true,
                "equipmentCategories": []
            }}, config);
        console.log(resp.data.json.consumables);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const setConsumablesIntoLGAliquot = async (runName, context) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {
            "json": {
            "site": "BALTIMORE",
                "files": {
                "50ML_EPPENDORF_CONICAL_TUBE": true
            },
            "context": context,
                "consumables": [{
                    "name": "50mL Eppendorf Conical",
                    "purchaseSpec": "302919",
                    "thriveLotNumber": "automationLotTC24299_aliquotLG"
                }],
                "assayVersions": [{
                    "id": "PLASMA_LG_ALIQUOT_VERSION",
                    "name": "Large Volume Plasma Aliquoting Work Instruction",
                    "documentNumberOptions": [{
                    "name": "WI-LAB-00008",
                    "value": "WI-LAB-00008",
                    "versionOptions": [{"name": "V1","value": "V1"}]}]}],
                "errorCodeTags": {
                    "runLevel": ["RUN","PLASMA_LG_ALIQUOT"],
                    "runItemLevel": ["RUN_ITEM","PLASMA_LG_ALIQUOT"],
                    "equipmentLevel": ["EQUIPMENT"]},
                "expectedFiles": {
                    "50ML_EPPENDORF_CONICAL_TUBE": {"name": "Plasma large aliquot transfer"}},
                "labProcedureData": {
                    "generalNotes": "",
                    "assayVersions": [{
                    "id": "PLASMA_LG_ALIQUOT_VERSION",
                    "version": "V1",
                    "documentNumber": "WI-LAB-00008"}],
                    "workInstruction": [],
                    "automationProtocolName": "LPA_V2.1.med"
                },
                "useOldFilesFormat": false,
                "equipmentCategories": [{
                    "categoryName": "Microlab STAR (EasyBlood)",
                    "equipmentTypes": ["MICROLAB_STAR_EASYBLOOD"]
                }
                ]}}, config);
        console.log(resp.data.json.consumables);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const setExpirationDateIntoLGAliquot = async (runName, context) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {

            "json": {
                "site": "BALTIMORE",
                "files": {
                    "50ML_EPPENDORF_CONICAL_TUBE": true
                },
                "context": context,
                    "consumables": [{
                        "name": "50mL Eppendorf Conical",
                        "purchaseSpec": "302919",
                        "expirationDate": "2022-10-20",
                        "thriveLotNumber": "automationLotTC24299_aliquotLG"
                    }],
                    "assayVersions": [{
                        "id": "PLASMA_LG_ALIQUOT_VERSION",
                        "name": "Large Volume Plasma Aliquoting Work Instruction",
                        "documentNumberOptions": [{
                        "name": "WI-LAB-00008",
                        "value": "WI-LAB-00008",
                        "versionOptions": [{"name": "V1","value": "V1"}]}]}],
                    "errorCodeTags": {
                        "runLevel": ["RUN","PLASMA_LG_ALIQUOT"],
                        "runItemLevel": ["RUN_ITEM","PLASMA_LG_ALIQUOT"],
                        "equipmentLevel": ["EQUIPMENT"]},
                    "expectedFiles": {
                        "50ML_EPPENDORF_CONICAL_TUBE": {"name": "Plasma large aliquot transfer"}},
                    "labProcedureData": {
                        "generalNotes": "",
                        "assayVersions": [{
                        "id": "PLASMA_LG_ALIQUOT_VERSION",
                        "version": "V1",
                        "documentNumber": "WI-LAB-00008"}],
                        "workInstruction": [],
                        "automationProtocolName": "LPA_V2.1.med"
                    },
                    "useOldFilesFormat": false,
                    "equipmentCategories": [{
                        "categoryName": "Microlab STAR (EasyBlood)",
                        "equipmentTypes": ["MICROLAB_STAR_EASYBLOOD"

    ]
    }
]}}, config);
console.log(resp.data.json.consumables);
return resp.data;
} catch (err) {
    console.error(err);
}
};

export const setConsumablesIntoManualPouringSerum = async (runName, context) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {

            "json": {
            "site": "BALTIMORE",
                "context": context,
                "consumables": [
                {
                    "name": "50mL Eppendorf Conical",
                    "purchaseSpec": "302919",
                    "thriveLotNumber": "automationLot"
                }
            ],
                "errorCodeTags": {
                "runItemLevel": [
                    "MANUAL_POURING_SERUM"
                ]
            },
            "labProcedureData": {
                "generalNotes": "",
                    "assayVersions": [],
                    "workInstruction": []
            }
        }
            }, config);
        console.log(resp.data.json.consumables);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const setExpirationDateManualPouringSerum = async (runName, context) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/${runName}`, {

            "json":
                {
                    "site": "BALTIMORE",
                    "context": context,
                    "consumables": [
                        {
                            "name": "50mL Eppendorf Conical",
                            "purchaseSpec": "302919",
                            "thriveLotNumber": "automationLot",
                            "expirationDate": "2022-11-28"
                        }
                    ],
                    "errorCodeTags": {
                        "runItemLevel": [
                            "MANUAL_POURING_SERUM"
                        ]
                    },
                    "labProcedureData": {
                        "generalNotes": "",
                        "assayVersions": [],
                        "workInstruction": []
                    }
                }

        }, config);
        console.log(resp.data.json.consumables);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

export const putIntoAnyBloodProcQueue = async (item1, item2, item3,item4,item5,item6,runName,queue,runTypeCode) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs',
            {
                "containersInQueues": [
                    {
                        "containerCode": item1,
                        "queueCode": queue
                    },
                    {
                        "containerCode": item2,
                        "queueCode": queue
                    },
                    {
                        "containerCode": item3,
                        "queueCode": queue
                    },
                    {
                        "containerCode": item4,
                        "queueCode": queue
                    },
                    {
                        "containerCode": item5,
                        "queueCode": queue
                    },
                    {
                        "containerCode": item6,
                        "queueCode": queue
                    }
                ],
                "forceCreate": false,
                "runCategoryCode": "BLOOD_PROCESSING",
                "runName": runName,
                "runTypeCode": runTypeCode,
                "site": "BALTIMORE"
            }, config);
        // console.log(resp.data.storage.code);
        console.log(resp);
        return resp;
    } catch (err) {
        console.error(err.response.data.message);
    }
};

export const putIntoAnyBloodProcQueue1 = async (item,runName,queue,runTypeCode) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs',
            {
                "containersInQueues": [
                    {
                        "containerCode": item,
                        "queueCode": queue
                    }
                ],
                "forceCreate": false,
                "runCategoryCode": "BLOOD_PROCESSING",
                "runName": runName,
                "runTypeCode": runTypeCode,
                "site": "BALTIMORE"
            }, config);
        // console.log(resp.data.storage.code);
        console.log(resp);
        return resp;
    } catch (err) {
        console.error(err.response.data.message);
    }
};



export const setDestEppTubeManualPouring = async (runName, sourceEppTube, destEppTube) => {
    try {
        const resp = await axios.put(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs/${runName}/containers/${sourceEppTube}/manualPouringDestinations`, [
            {
                "containerCode": destEppTube,
                "volume": 0
            }
        ], config);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

