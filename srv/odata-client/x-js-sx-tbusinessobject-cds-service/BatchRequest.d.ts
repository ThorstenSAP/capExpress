import { CreateRequestBuilderV2, DeleteRequestBuilderV2, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, ODataBatchChangeSetV2, ODataBatchRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { XJsSxTbusinessobject } from './index';
/**
 * Batch builder for operations supported on the X Js Sx Tbusinessobject Cds Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch(...requests: Array<ReadXJsSxTbusinessobjectCdsServiceRequestBuilder | ODataBatchChangeSetV2<WriteXJsSxTbusinessobjectCdsServiceRequestBuilder>>): ODataBatchRequestBuilderV2;
/**
 * Change set constructor consists of write operations supported on the X Js Sx Tbusinessobject Cds Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset(...requests: WriteXJsSxTbusinessobjectCdsServiceRequestBuilder[]): ODataBatchChangeSetV2<WriteXJsSxTbusinessobjectCdsServiceRequestBuilder>;
export declare const defaultXJsSxTbusinessobjectCdsServicePath = "/sap/opu/odata/sap/xJSSxTBUSINESSOBJECT_CDS";
export declare type ReadXJsSxTbusinessobjectCdsServiceRequestBuilder = GetAllRequestBuilderV2<XJsSxTbusinessobject> | GetByKeyRequestBuilderV2<XJsSxTbusinessobject>;
export declare type WriteXJsSxTbusinessobjectCdsServiceRequestBuilder = CreateRequestBuilderV2<XJsSxTbusinessobject> | UpdateRequestBuilderV2<XJsSxTbusinessobject> | DeleteRequestBuilderV2<XJsSxTbusinessobject>;
//# sourceMappingURL=BatchRequest.d.ts.map