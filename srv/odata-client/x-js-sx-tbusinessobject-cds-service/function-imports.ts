/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForEntityV2, FunctionImportRequestBuilderV2, FunctionImportParameter } from '@sap-cloud-sdk/core';
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
export function xJsSxTbusinessobjectSapUpsert(parameters: XJsSxTbusinessobjectSapUpsertParameters): FunctionImportRequestBuilderV2<XJsSxTbusinessobjectSapUpsertParameters, XJsSxTbusinessobject> {
  const params = {
    lastName: new FunctionImportParameter('LastName', 'Edm.String', parameters.lastName),
    firstName: new FunctionImportParameter('FirstName', 'Edm.String', parameters.firstName),
    age: new FunctionImportParameter('Age', 'Edm.String', parameters.age),
    birthday: new FunctionImportParameter('Birthday', 'Edm.String', parameters.birthday),
    id: new FunctionImportParameter('ID', 'Edm.String', parameters.id),
    sapDescription: new FunctionImportParameter('SAP_Description', 'Edm.String', parameters.sapDescription)
  }

  return new FunctionImportRequestBuilderV2('post', '/sap/opu/odata/JSS/TBUSINESSOBJECT_CDS', 'xJSSxTBUSINESSOBJECTSap_upsert', (data) => transformReturnValueForEntityV2(data, XJsSxTbusinessobject), params);
}

export const functionImports = {
  xJsSxTbusinessobjectSapUpsert
};
