import { createOneTubeNew } from "./functions.js";

const main24494 = async () => {

    const mat = await createOneTubeNew('1ML_THERMO_MATRIX_2D', 'CAMBRIDGE_AVAILABLE_CONTAINERS');
    const epp = await createOneTubeNew('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_AVAILABLE_CONTAINERS');


    console.log(mat,epp);

};
main24494();
