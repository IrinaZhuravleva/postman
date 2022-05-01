const axios = require('axios');
const token = "eyJraWQiOiJFUWpWRkpoQUdGZm5HT3J2aGppNjRMR1ZBazEyNGVSTktiZko3RzJKNW9BIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnhSVF9PckVRNGZ4cHZvc2ZQUzhwR291Y1dQc1RmMlNGZXpRRTYwS2hTMDgiLCJpc3MiOiJodHRwczovL3BsaWFuY3kub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjIyNTMxMjg1LCJleHAiOjE2MjI1MzQ4ODUsImNpZCI6IjBvYWM0azF3Y3pTeHFpcFF6MXQ3IiwidWlkIjoiMDB1aDFvNWlkNm45NHlvRTUxdDciLCJzY3AiOlsib3BlbmlkIiwiZW1haWwiLCJwcm9maWxlIl0sInN1YiI6Iml6aHVyYXZseW92YUB0aHJpdmVkZXRlY3QuY29tIn0.xNIl-qQ0tJThMJvJNjHbARwIxoAnz99UnJZpLh-HWPEDCON8OXAy_584eav34-gO_MnK88XPMvoRLD5ugODF-vCHfcrRPNgQjCukvMaKoKeP_DzHvj45yIw4sqnBdt7ej1Gh5JVjA2dP1wQfh9kat_KiF0q-yRR3Pzf_4dcPST8QlBGq2v_d-rh4TlCrcGxCYSttvha05T5yITZs9SpU9bpzjgKuypM81vEPvQuoKKhVAfPw8uaH0Qw0mrSCldQyLRyau2Cuvq1Lj30cAcdAOdtxuWVDz7-V4zMV8rPX5gz9wY0LTcoJjkyXsyWDPLJgYrZ5NZ4-ZLwZ0EcYUoJzew";
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const specimenPlasma = 'new_specimen_10';

const tubes = [];
const tubeArray = [ 'H80FXF3', 'FN23S6X', '94XUU5A', 'C12K4UP', 'F4A28KC' ];

// //Creation one tube
const createOneTube = async () => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/container_management/create',
            {type: "1ML_THERMO_MATRIX_2D", json: {initialKitBarcode: "test"}, location: "BALTIMORE_PROCESSING_LABORATORY"}, config)
        console.log(resp.data.storage.code);
        let tube = resp.data.storage.code;
        tubes.push(tube);
        console.log(tubes);
    } catch (err) {
        console.error(err);
    }
};

//Creation of a SpecimenPlasma
const createSpecimenPlasma = async () => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimens',
            {specimenTypeCode : "PLASMA",
                code : specimenPlasma}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

const putPlasmaInTube = async (item) => {
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
        // Handle Error Here
        console.error(err);
    }
};

const createArrayTubes = async () => {
    for (let i = 0; i < 2; i++) {
        createOneTube();
    }
}

function myFunction1(item, index) {
    putPlasmaInTube(item);
}
await createArrayTubes();
await tubes.forEach(myFunction1);

//Creation of a kit with one tube
// const putPlasmaInTube = async () => {
//     try {
//         const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/specimen_processes',
//             { typeCode: "Transfer",
//                 specimenTransfers: [
//                     {
//                         destinationContainerCode: '2CN6PK8',
//                         volumesInfo: [
//                             {
//                                 volume: 1000
//                             }
//                         ],
//                         specimens: [specimenPlasma]
//                     }
//                 ]}, config);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
// createOneTube();


//Put into the queue queues/ELLA_RESULT_UPLOAD_QUEUE/containers?withLocations=true
const queueEllaResultUpload = async (item) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/queues/ELLA_RESULT_UPLOAD_QUEUE/containers?withLocations=true',
            {containers: [item]}, config);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

//Put into the queue queues/ELLA_RESULT_UPLOAD_QUEUE/
function myFunction(item, index) {
    queueEllaResultUpload(item);
}
// tubeArray.forEach(myFunction);


// createSpecimenPlasma();
// putPlasmaInTube();

// queueEllaResultUpload();

// // Put containers into the queue - EllaResultUpload run creation
const createRunEllaResultUpload = async () => {
    try {
        const resp = await axios.get('https://qa.lims.thrivedetect.com/core-services/container/api/v1/runs/input_queues?site=BALTIMORE&runType=ELLA_RESULT_UPLOAD', {}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

// // ?? - EllaResultUpload run creation
const containersRunEllaResultUpload = async () => {
    try {
        const resp = await axios.post('blood_processing/queues/containers?showLocation=false&searchText=',
            {queues: [{queueCode: "ELLA_RESULT_UPLOAD_QUEUE"}]}, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};


// specimen-plasma.js