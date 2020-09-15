/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { XJsSxTbusinessobjectRequestBuilder } from './XJsSxTbusinessobjectRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "xJSSxTBUSINESSOBJECT" of service "xJSSxTBUSINESSOBJECT_CDS".
 */
export class XJsSxTbusinessobject extends EntityV2 implements XJsSxTbusinessobjectType {
  /**
   * Technical entity name for XJsSxTbusinessobject.
   */
  static _entityName = 'xJSSxTBUSINESSOBJECT';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for XJsSxTbusinessobject.
   */
  static _serviceName = 'xJSSxTBUSINESSOBJECT_CDS';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/JSS/TBUSINESSOBJECT_CDS';
  /**
   * 16 Byte UUID in 16 Bytes (Raw Format).
   */
  sapUuid!: string;
  /**
   * LastName.
   * Maximum length: 20.
   * @nullable
   */
  lastName?: string;
  /**
   * FirstName.
   * Maximum length: 20.
   * @nullable
   */
  firstName?: string;
  /**
   * Age.
   * Maximum length: 20.
   * @nullable
   */
  age?: string;
  /**
   * Birthday.
   * Maximum length: 20.
   * @nullable
   */
  birthday?: string;
  /**
   * ID.
   * Maximum length: 10.
   * @nullable
   */
  id?: string;
  /**
   * Description.
   * Maximum length: 80.
   * @nullable
   */
  sapDescription?: string;

  /**
   * Returns an entity builder to construct instances `XJsSxTbusinessobject`.
   * @returns A builder that constructs instances of entity type `XJsSxTbusinessobject`.
   */
  static builder(): EntityBuilderType<XJsSxTbusinessobject, XJsSxTbusinessobjectTypeForceMandatory> {
    return EntityV2.entityBuilder(XJsSxTbusinessobject);
  }

  /**
   * Returns a request builder to construct requests for operations on the `XJsSxTbusinessobject` entity type.
   * @returns A `XJsSxTbusinessobject` request builder.
   */
  static requestBuilder(): XJsSxTbusinessobjectRequestBuilder {
    return new XJsSxTbusinessobjectRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `XJsSxTbusinessobject`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `XJsSxTbusinessobject`.
   */
  static customField(fieldName: string): CustomFieldV2<XJsSxTbusinessobject> {
    return EntityV2.customFieldSelector(fieldName, XJsSxTbusinessobject);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface XJsSxTbusinessobjectType {
  sapUuid: string;
  lastName?: string;
  firstName?: string;
  age?: string;
  birthday?: string;
  id?: string;
  sapDescription?: string;
}

export interface XJsSxTbusinessobjectTypeForceMandatory {
  sapUuid: string;
  lastName: string;
  firstName: string;
  age: string;
  birthday: string;
  id: string;
  sapDescription: string;
}

export namespace XJsSxTbusinessobject {
  /**
   * Static representation of the [[sapUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_UUID: StringField<XJsSxTbusinessobject> = new StringField('SAP_UUID', XJsSxTbusinessobject, 'Edm.Guid');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<XJsSxTbusinessobject> = new StringField('LastName', XJsSxTbusinessobject, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<XJsSxTbusinessobject> = new StringField('FirstName', XJsSxTbusinessobject, 'Edm.String');
  /**
   * Static representation of the [[age]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGE: StringField<XJsSxTbusinessobject> = new StringField('Age', XJsSxTbusinessobject, 'Edm.String');
  /**
   * Static representation of the [[birthday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIRTHDAY: StringField<XJsSxTbusinessobject> = new StringField('Birthday', XJsSxTbusinessobject, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<XJsSxTbusinessobject> = new StringField('ID', XJsSxTbusinessobject, 'Edm.String');
  /**
   * Static representation of the [[sapDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_DESCRIPTION: StringField<XJsSxTbusinessobject> = new StringField('SAP_Description', XJsSxTbusinessobject, 'Edm.String');
  /**
   * All fields of the XJsSxTbusinessobject entity.
   */
  export const _allFields: Array<StringField<XJsSxTbusinessobject>> = [
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
  export const ALL_FIELDS: AllFields<XJsSxTbusinessobject> = new AllFields('*', XJsSxTbusinessobject);
  /**
   * All key fields of the XJsSxTbusinessobject entity.
   */
  export const _keyFields: Array<Field<XJsSxTbusinessobject>> = [XJsSxTbusinessobject.SAP_UUID];
  /**
   * Mapping of all key field names to the respective static field property XJsSxTbusinessobject.
   */
  export const _keys: { [keys: string]: Field<XJsSxTbusinessobject> } = XJsSxTbusinessobject._keyFields.reduce((acc: { [keys: string]: Field<XJsSxTbusinessobject> }, field: Field<XJsSxTbusinessobject>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
