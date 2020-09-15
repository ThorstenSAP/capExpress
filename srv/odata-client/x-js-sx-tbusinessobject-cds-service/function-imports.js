"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionImports = exports.xJsSxTbusinessobjectSapUpsert = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var XJsSxTbusinessobject_1 = require("./XJsSxTbusinessobject");
/**
 * X Js Sx Tbusinessobject Sap Upsert.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function xJsSxTbusinessobjectSapUpsert(parameters) {
    var params = {
        lastName: new core_1.FunctionImportParameter('LastName', 'Edm.String', parameters.lastName),
        firstName: new core_1.FunctionImportParameter('FirstName', 'Edm.String', parameters.firstName),
        age: new core_1.FunctionImportParameter('Age', 'Edm.String', parameters.age),
        birthday: new core_1.FunctionImportParameter('Birthday', 'Edm.String', parameters.birthday),
        id: new core_1.FunctionImportParameter('ID', 'Edm.String', parameters.id),
        sapDescription: new core_1.FunctionImportParameter('SAP_Description', 'Edm.String', parameters.sapDescription)
    };
    return new core_1.FunctionImportRequestBuilderV2('post', '/sap/opu/odata/JSS/TBUSINESSOBJECT_CDS', 'xJSSxTBUSINESSOBJECTSap_upsert', function (data) { return core_1.transformReturnValueForEntityV2(data, XJsSxTbusinessobject_1.XJsSxTbusinessobject); }, params);
}
exports.xJsSxTbusinessobjectSapUpsert = xJsSxTbusinessobjectSapUpsert;
exports.functionImports = {
    xJsSxTbusinessobjectSapUpsert: xJsSxTbusinessobjectSapUpsert
};
//# sourceMappingURL=function-imports.js.map