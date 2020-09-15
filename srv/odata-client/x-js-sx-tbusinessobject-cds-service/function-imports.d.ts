import { FunctionImportRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { XJsSxTbusinessobject } from './XJsSxTbusinessobject';
/**
 * Type of the parameters to be passed to [[xJsSxTbusinessobjectSapUpsert]].
 */
export interface XJsSxTbusinessobjectSapUpsertParameters {
    /**
     * Last Name.
     */
    lastName: string;
    /**
     * First Name.
     */
    firstName: string;
    /**
     * Age.
     */
    age: string;
    /**
     * Birthday.
     */
    birthday: string;
    /**
     * Id.
     */
    id: string;
    /**
     * Sap Description.
     */
    sapDescription: string;
}
/**
 * X Js Sx Tbusinessobject Sap Upsert.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export declare function xJsSxTbusinessobjectSapUpsert(parameters: XJsSxTbusinessobjectSapUpsertParameters): FunctionImportRequestBuilderV2<XJsSxTbusinessobjectSapUpsertParameters, XJsSxTbusinessobject>;
export declare const functionImports: {
    xJsSxTbusinessobjectSapUpsert: typeof xJsSxTbusinessobjectSapUpsert;
};
//# sourceMappingURL=function-imports.d.ts.map