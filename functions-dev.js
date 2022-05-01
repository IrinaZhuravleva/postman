import axios from 'axios';


export const tubes = [];
const specimenPlasma = 'new_specimen_110';
export const createOneTube = async (tubeType, location) => {
    try {
        const resp = await axios.post('https://dev.lims.thrivedetect.com/core-services/container/api/v1/container_management/create',
            {type: tubeType, json: {}, location: location});
        let tube = resp.data.storage.code;
        // tubes.push(tube);
        console.log(tube);
    } catch (err) {
        console.error(err);
    }
};
// const tube1 = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY');
// const tube2 = await createOneTube('0.5_ML_FLUIDX', 'BALTIMORE_PROCESSING_LABORATORY');
// const rack = await createOneTube('0.5_ML_FLUIDX_RACK', 'BALTIMORE_PROCESSING_LABORATORY');
//
// console.log(tube1, tube2, rack);

// createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY');PCS97C7
// createOneTube('50_ML_4X4_BOX', 'BALTIMORE_PROCESSING_LABORATORY');P897SKH
// createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');7SXPF54
// createOneTube('SHELF_RACK3x7', 'BALTIMORE_PROCESSING_LABORATORY');8K4UF0H

// createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS');
// createOneTube('50_ML_4X4_BOX', 'CAMBRIDGE_AVAILABLE_CONTAINERS');
// createOneTube('50_ML_4X4_BOX', 'THRIVE'); //CPC333N
// createOneTube('50_ML_4X4_BOX', '');
// createOneTube('50_ML_4X4_BOX', 'ORPHANS'); //3FHU0U5



export const createSpecimenPlasma = async (specimenName) => {
    try {
        const resp = await axios.post('https://dev.lims.thrivedetect.com/core-services/container/api/v1/specimens',
            {specimenTypeCode : "PLASMA",
                code : specimenName});
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
// await createSpecimenPlasma();
export const putPlasmaInTube = async (item, volume, specimenPlasma) => {
    try {
        const resp = await axios.post('https://dev.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
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
                ]});
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
await putPlasmaInTube('S4S8A8K', 109);
// 3NAUX71
// S4S8A8K
// PX361PU
const queueUploadDev = async (item, nameQueue) => {
    try {
        const resp = await axios.post(`https://dev.lims.thrivedetect.com/core-services/container/api/v1/queues/${nameQueue}/containers?withLocations=true`,
            {containers: [item]});
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};


// await queueUploadDev(rack, 'COBAS_SAMPLE_SETUP_QUEUE');
// 4K6SPK3
// queueUploadDev('1AU0P9H','PLASMA_SM_ALIQOUT_QUEUE')
// queueUploadDev('1AU0P9H','GENERIC_CFDNA_EXTRACTION_QUEUE')
//Put into the queue queues/ELLA_RESULT_UPLOAD_QUEUE/containers?withLocations=true
export const queueEllaResultUpload = async (item) => {
    try {
        const resp = await axios.post('https://dev.lims.thrivedetect.com/core-services/container/api/v1/queues/ELLA_RESULT_UPLOAD_QUEUE/containers?withLocations=true',
            {containers: [item]});
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

// // Put containers into the queue - EllaResultUpload run creation
export const createRunEllaResultUpload = async () => {
    try {
        const resp = await axios.get('https://dev.lims.thrivedetect.com/core-services/container/api/v1/runs/input_queues?site=BALTIMORE&runType=ELLA_RESULT_UPLOAD', {});
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// // ?? - EllaResultUpload run creation
export const containersRunEllaResultUpload = async () => {
    try {
        const resp = await axios.post('https://dev.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/queues/containers?showLocation=false&searchText=',
            {queues: [{queueCode: "ELLA_RESULT_UPLOAD_QUEUE"}]});
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};