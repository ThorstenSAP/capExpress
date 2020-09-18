namespace db;


using {cuid, managed} from '@sap/cds/common';

entity People: managed,cuid {
    name: String;
    surname: String;
}