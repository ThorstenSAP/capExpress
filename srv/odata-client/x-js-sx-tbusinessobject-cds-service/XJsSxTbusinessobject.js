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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XJsSxTbusinessobject = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var XJsSxTbusinessobjectRequestBuilder_1 = require("./XJsSxTbusinessobjectRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "xJSSxTBUSINESSOBJECT" of service "xJSSxTBUSINESSOBJECT_CDS".
 */
var XJsSxTbusinessobject = /** @class */ (function (_super) {
    __extends(XJsSxTbusinessobject, _super);
    function XJsSxTbusinessobject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `XJsSxTbusinessobject`.
     * @returns A builder that constructs instances of entity type `XJsSxTbusinessobject`.
     */
    XJsSxTbusinessobject.builder = function () {
        return core_1.EntityV2.entityBuilder(XJsSxTbusinessobject);
    };
    /**
     * Returns a request builder to construct requests for operations on the `XJsSxTbusinessobject` entity type.
     * @returns A `XJsSxTbusinessobject` request builder.
     */
    XJsSxTbusinessobject.requestBuilder = function () {
        return new XJsSxTbusinessobjectRequestBuilder_1.XJsSxTbusinessobjectRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `XJsSxTbusinessobject`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `XJsSxTbusinessobject`.
     */
    XJsSxTbusinessobject.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, XJsSxTbusinessobject);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    XJsSxTbusinessobject.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for XJsSxTbusinessobject.
     */
    XJsSxTbusinessobject._entityName = 'xJSSxTBUSINESSOBJECT';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for XJsSxTbusinessobject.
     */
    XJsSxTbusinessobject._serviceName = 'xJSSxTBUSINESSOBJECT_CDS';
    /**
     * Default url path for the according service.
     */
    XJsSxTbusinessobject._defaultServicePath = '/sap/opu/odata/JSS/TBUSINESSOBJECT_CDS';
    return XJsSxTbusinessobject;
}(core_1.EntityV2));
exports.XJsSxTbusinessobject = XJsSxTbusinessobject;
(function (XJsSxTbusinessobject) {
    /**
     * Static representation of the [[sapUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    XJsSxTbusinessobject.SAP_UUID = new core_1.StringField('SAP_UUID', XJsSxTbusinessobject, 'Edm.Guid');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    XJsSxTbusinessobject.LAST_NAME = new core_1.StringField('LastName', XJsSxTbusinessobject, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    XJsSxTbusinessobject.FIRST_NAME = new core_1.StringField('FirstName', XJsSxTbusinessobject, 'Edm.String');
    /**
     * Static representation of the [[age]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    XJsSxTbusinessobject.AGE = new core_1.StringField('Age', XJsSxTbusinessobject, 'Edm.String');
    /**
     * Static representation of the [[birthday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    XJsSxTbusinessobject.BIRTHDAY = new core_1.StringField('Birthday', XJsSxTbusinessobject, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    XJsSxTbusinessobject.ID = new core_1.StringField('ID', XJsSxTbusinessobject, 'Edm.String');
    /**
     * Static representation of the [[sapDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    XJsSxTbusinessobject.SAP_DESCRIPTION = new core_1.StringField('SAP_Description', XJsSxTbusinessobject, 'Edm.String');
    /**
     * All fields of the XJsSxTbusinessobject entity.
     */
    XJsSxTbusinessobject._allFields = [
        XJsSxTbusinessobject.SAP_UUID,
        XJsSxTbusinessobject.LAST_NAME,
        XJsSxTbusinessobject.FIRST_NAME,
        XJsSxTbusinessobject.AGE,
        XJsSxTbusinessobject.BIRTHDAY,
        XJsSxTbusinessobject.ID,
        XJsSxTbusinessobject.SAP_DESCRIPTION
    ];
    /**
     * All fields selector.
     */
    XJsSxTbusinessobject.ALL_FIELDS = new core_1.AllFields('*', XJsSxTbusinessobject);
    /**
     * All key fields of the XJsSxTbusinessobject entity.
     */
    XJsSxTbusinessobject._keyFields = [XJsSxTbusinessobject.SAP_UUID];
    /**
     * Mapping of all key field names to the respective static field property XJsSxTbusinessobject.
     */
    XJsSxTbusinessobject._keys = XJsSxTbusinessobject._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(XJsSxTbusinessobject = exports.XJsSxTbusinessobject || (exports.XJsSxTbusinessobject = {}));
exports.XJsSxTbusinessobject = XJsSxTbusinessobject;
//# sourceMappingURL=XJsSxTbusinessobject.js.map