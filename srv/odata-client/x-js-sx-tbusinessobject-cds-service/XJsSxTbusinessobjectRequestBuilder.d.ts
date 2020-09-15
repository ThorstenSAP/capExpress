import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { XJsSxTbusinessobject } from './XJsSxTbusinessobject';
/**
 * Request builder class for operations supported on the [[XJsSxTbusinessobject]] entity.
 */
export declare class XJsSxTbusinessobjectRequestBuilder extends RequestBuilder<XJsSxTbusinessobject> {
    /**
     * Returns a request builder for retrieving one `XJsSxTbusinessobject` entity based on its keys.
     * @param sapUuid Key property. See [[XJsSxTbusinessobject.sapUuid]].
     * @returns A request builder for creating requests to retrieve one `XJsSxTbusinessobject` entity based on its keys.
     */
    getByKey(sapUuid: string): GetByKeyRequestBuilderV2<XJsSxTbusinessobject>;
    /**
     * Returns a request builder for querying all `XJsSxTbusinessobject` entities.
     * @returns A request builder for creating requests to retrieve all `XJsSxTbusinessobject` entities.
     */
    getAll(): GetAllRequestBuilderV2<XJsSxTbusinessobject>;
    /**
     * Returns a request builder for creating a `XJsSxTbusinessobject` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `XJsSxTbusinessobject`.
     */
    create(entity: XJsSxTbusinessobject): CreateRequestBuilderV2<XJsSxTbusinessobject>;
    /**
     * Returns a request builder for updating an entity of type `XJsSxTbusinessobject`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `XJsSxTbusinessobject`.
     */
    update(entity: XJsSxTbusinessobject): UpdateRequestBuilderV2<XJsSxTbusinessobject>;
    /**
     * Returns a request builder for deleting an entity of type `XJsSxTbusinessobject`.
     * @param sapUuid Key property. See [[XJsSxTbusinessobject.sapUuid]].
     * @returns A request builder for creating requests that delete an entity of type `XJsSxTbusinessobject`.
     */
    delete(sapUuid: string): DeleteRequestBuilderV2<XJsSxTbusinessobject>;
    /**
     * Returns a request builder for deleting an entity of type `XJsSxTbusinessobject`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `XJsSxTbusinessobject` by taking the entity as a parameter.
     */
    delete(entity: XJsSxTbusinessobject): DeleteRequestBuilderV2<XJsSxTbusinessobject>;
}
//# sourceMappingURL=XJsSxTbusinessobjectRequestBuilder.d.ts.map