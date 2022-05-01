import {createOneTube, createSpecimen, putAnySpecimenInTube, queueEllaResultUpload} from "./functions.js";
import axios from "axios";
import {config} from "./creationContainers.js";
import {date, upperCaseMonth} from "./index.js";

const arr = ['U586ANF', '4UA2XX2' ];
const ellaRunName = `ELLA_RESULT_UPLOAD_${date}${upperCaseMonth}21_199`;

export const putIntoEllaResultUploadRun = async (item) => {
    try {
        const resp = await axios.post('https://qa.lims.thrivedetect.com/core-services/container/api/v1/blood_processing/runs', {
            containersInQueues: [
                {
                    containerCode: item,
                    queueCode: "ELLA_RESULT_UPLOAD_QUEUE"
                }],
            forceCreate: false,
            runCategoryCode: "ELLA_PROTEIN_QUANTIFICATION",
            runName: ellaRunName,
            runTypeCode: "ELLA_RESULT_UPLOAD",
            site: "BALTIMORE"
        }, config);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err.response.data.message); //Invalid specimen type inside container, expected 'PLASMA' for container(s) 'FC19HP3'
    }
};
const main13694 = async () => {
    await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');
    // await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');
    // await createOneTube('1ML_THERMO_MATRIX_2D', 'BALTIMORE_PROCESSING_LABORATORY');
    // //
    // await createSpecimen("PLASMA", "new_specimen_1");
    // await createSpecimen("BLOOD", "new_specimen_blood");
    // await createSpecimen("SERUM", "new_specimen_2");
    //
    // await putAnySpecimenInTube("X8S91KK", 1000, "new_specimen_1");
    // await putAnySpecimenInTube("NK6S52A", 1000, "new_specimen_2");
    // await putAnySpecimenInTube("C9CS5A2", 1000, "new_specimen_blood");

    // await putAnySpecimenInTube(arr[0], 1000, "new_specimen_1");
    // await putAnySpecimenInTube(arr[1], 1000, "new_specimen_2");
    // await putAnySpecimenInTube(arr[2], 1000, "new_specimen_blood");
    // arr.forEach(queueEllaResultUpload);
    // await queueEllaResultUpload("X8S91KK");

    // await putIntoEllaResultUploadRun();
    // arr.forEach(putIntoEllaResultUploadRun);
};

// main13694();

// export const createEllaResultUploadRun = async () => {
//     try {
//         const resp = await axios.get(`https://qa.lims.thrivedetect.com/core-services/container/api/v1/error_codes/link/run/${ellaRunName}`, config);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
// createEllaResultUploadRun('ELLA_RESULT_UPLOAD_24JUN21_4');

// 13694.js