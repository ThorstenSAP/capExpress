import { XJsSxTbusinessobjectRequestBuilder } from './XJsSxTbusinessobjectRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "xJSSxTBUSINESSOBJECT" of service "xJSSxTBUSINESSOBJECT_CDS".
 */
export declare class XJsSxTbusinessobject extends EntityV2 implements XJsSxTbusinessobjectType {
    /**
     * Technical entity name for XJsSxTbusinessobject.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for XJsSxTbusinessobject.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * 16 Byte UUID in 16 Bytes (Raw Format).
     */
    sapUuid: string;
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
    static builder(): EntityBuilderType<XJsSxTbusinessobject, XJsSxTbusinessobjectTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `XJsSxTbusinessobject` entity type.
     * @returns A `XJsSxTbusinessobject` request builder.
     */
    static requestBuilder(): XJsSxTbusinessobjectRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `XJsSxTbusinessobject`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `XJsSxTbusinessobject`.
     */
    static customField(fieldName: string): CustomFieldV2<XJsSxTbusinessobject>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace XJsSxTbusinessobject {
    /**
     * Static representation of the [[sapUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAP_UUID: StringField<XJsSxTbusinessobject>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<XJsSxTbusinessobject>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<XJsSxTbusinessobject>;
    /**
     * Static representation of the [[age]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGE: StringField<XJsSxTbusinessobject>;
    /**
     * Static representation of the [[birthday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIRTHDAY: StringField<XJsSxTbusinessobject>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<XJsSxTbusinessobject>;
    /**
     * Static representation of the [[sapDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAP_DESCRIPTION: StringField<XJsSxTbusinessobject>;
    /**
     * All fields of the XJsSxTbusinessobject entity.
     */
    const _allFields: Array<StringField<XJsSxTbusinessobject>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<XJsSxTbusinessobject>;
    /**
     * All key fields of the XJsSxTbusinessobject entity.
     */
    const _keyFields: Array<Field<XJsSxTbusinessobject>>;
    /**
     * Mapping of all key field names to the respective static field property XJsSxTbusinessobject.
     */
    const _keys: {
        [keys: string]: Field<XJsSxTbusinessobject>;
    };
}
//# sourceMappingURL=XJsSxTbusinessobject.d.ts.map