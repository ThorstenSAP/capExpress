"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.XJsSxTbusinessobjectRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var XJsSxTbusinessobject_1 = require("./XJsSxTbusinessobject");
/**
 * Request builder class for operations supported on the [[XJsSxTbusinessobject]] entity.
 */
var XJsSxTbusinessobjectRequestBuilder = /** @class */ (function (_super) {
    __extends(XJsSxTbusinessobjectRequestBuilder, _super);
    function XJsSxTbusinessobjectRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `XJsSxTbusinessobject` entity based on its keys.
     * @param sapUuid Key property. See [[XJsSxTbusinessobject.sapUuid]].
     * @returns A request builder for creating requests to retrieve one `XJsSxTbusinessobject` entity based on its keys.
     */
    XJsSxTbusinessobjectRequestBuilder.prototype.getByKey = function (sapUuid) {
        return new core_1.GetByKeyRequestBuilderV2(XJsSxTbusinessobject_1.XJsSxTbusinessobject, { SAP_UUID: sapUuid });
    };
    /**
     * Returns a request builder for querying all `XJsSxTbusinessobject` entities.
     * @returns A request builder for creating requests to retrieve all `XJsSxTbusinessobject` entities.
     */
    XJsSxTbusinessobjectRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(XJsSxTbusinessobject_1.XJsSxTbusinessobject);
    };
    /**
     * Returns a request builder for creating a `XJsSxTbusinessobject` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `XJsSxTbusinessobject`.
     */
    XJsSxTbusinessobjectRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(XJsSxTbusinessobject_1.XJsSxTbusinessobject, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `XJsSxTbusinessobject`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `XJsSxTbusinessobject`.
     */
    XJsSxTbusinessobjectRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(XJsSxTbusinessobject_1.XJsSxTbusinessobject, entity);
    };
    XJsSxTbusinessobjectRequestBuilder.prototype.delete = function (sapUuidOrEntity) {
        return new core_1.DeleteRequestBuilderV2(XJsSxTbusinessobject_1.XJsSxTbusinessobject, sapUuidOrEntity instanceof XJsSxTbusinessobject_1.XJsSxTbusinessobject ? sapUuidOrEntity : { SAP_UUID: sapUuidOrEntity });
    };
    return XJsSxTbusinessobjectRequestBuilder;
}(core_1.RequestBuilder));
exports.XJsSxTbusinessobjectRequestBuilder = XJsSxTbusinessobjectRequestBuilder;
//# sourceMappingURL=XJsSxTbusinessobjectRequestBuilder.js.map