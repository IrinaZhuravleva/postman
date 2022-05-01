import {createAndReturnKitWithTubes} from "./tube-types.js";
import {createShipment} from "./createShipments.js";
import {collectionDate, createCollectEventNew} from "./collectionEvents.js";
import {putAnySpecimenInTube, createSpecimen, createReagent, createReagentType, createOneTube} from "./functions.js";
import {createStorage, createTubeInStorage} from "./storage.js";
import {getArrayWithTubes, queueUpload } from "./tube-types.js";

const main2974 = async () => {

 // await createStorage('ALLIED_KIT', 'new_kit_1');
 // await createTubeInStorage('STRECK_CELL_FREE_DNA_BCT', 'tube_1', 'new_kit_1');
 // await createTubeInStorage('STRECK_CELL_FREE_DNA_BCT', 'tube_2', 'new_kit_1');
 // await createOneTube('STRECK_CELL_FREE_DNA_BCT', 'BALTIMORE_PROCESSING_LABORATORY', 'test');
 // await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY', 'test1');
 await createOneTube('50ML_EPPENDORF_CONICAL_TUBE', 'BALTIMORE_PROCESSING_LABORATORY', 'test1');
 // {
 //  "initialKitBarcode": "test"
 // }

 // await getArrayWithTubes('STRECK_CELL_FREE_DNA_BCT')

 // await createSpecimen('BLOOD', 'new_specimen_1');
 // await createReagentType('new_reagent',0)
 // await createReagent('new_reagent_type', 'new_reagent');
 await putAnySpecimenInTube('KK1NA70', 100, 'new_specimen_1');
 // KUS547K

 // await putAnySpecimenInTube('5FUS1N8', 1, 'new_specimen_1');

 // 5FUS1N8
 // {
 //  "containerTypeCode": "STRECK_CELL_FREE_DNA_BCT",
 //     "code": "tube_1",
 //     "json": {"initialKitBarcode": "kit_1"}
 // }

 // {
 //  "specimenTypeCode" : "BLOOD",
 //     "code" : "new_specimen_1"
 // }
 // POST {{URL}}/reagent_types
 //
 // {
 //
 //  "code": "random_newreagent_type",
 //    "riskLevel": 0
 // }
 //
 // POST {{URL}}/reagents
 // {
 //  "reagentTypeCode": "new_reagent_type",
 //     "code": "new_reagent"
 // }
};

main2974();