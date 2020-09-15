/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilderV2, DeleteRequestBuilderV2, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, ODataBatchChangeSetV2, ODataBatchRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { XJsSxTbusinessobject } from './index';

/**
 * Batch builder for operations supported on the X Js Sx Tbusinessobject Cds Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadXJsSxTbusinessobjectCdsServiceRequestBuilder | ODataBatchChangeSetV2<WriteXJsSxTbusinessobjectCdsServiceRequestBuilder>>): ODataBatchRequestBuilderV2 {
  return new ODataBatchRequestBuilderV2(defaultXJsSxTbusinessobjectCdsServicePath, requests, map);
}

/**
 * Change set constructor consists of write operations supported on the X Js Sx Tbusinessobject Cds Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: WriteXJsSxTbusinessobjectCdsServiceRequestBuilder[]): ODataBatchChangeSetV2<WriteXJsSxTbusinessobjectCdsServiceRequestBuilder> {
  return new ODataBatchChangeSetV2(requests);
}

export const defaultXJsSxTbusinessobjectCdsServicePath = '/sap/opu/odata/sap/xJSSxTBUSINESSOBJECT_CDS';
const map = { 'xJSSxTBUSINESSOBJECT': XJsSxTbusinessobject };
export type ReadXJsSxTbusinessobjectCdsServiceRequestBuilder = GetAllRequestBuilderV2<XJsSxTbusinessobject> | GetByKeyRequestBuilderV2<XJsSxTbusinessobject>;
export type WriteXJsSxTbusinessobjectCdsServiceRequestBuilder = CreateRequestBuilderV2<XJsSxTbusinessobject> | UpdateRequestBuilderV2<XJsSxTbusinessobject> | DeleteRequestBuilderV2<XJsSxTbusinessobject>;
