using browse as service from '../../srv/cbo-service.cds';

annotate service.PeopleSet with @(UI : { 
    HeaderInfo : {
    $Type:'UI.HeaderInfoType',
    TypeName : '{i18n>Employee}',
    TypeNamePlural : '{i18n>Employees}',
},
LineItem : [
    {
        $Type:'UI.DataField',
        Value : Firstname,
        Label : 'Vorname',
    },
    {
        $Type:'UI.DataField',
        Value : Lastname,
        Label : 'Nachname',
    },
    {
        $Type:'UI.DataField',
        Value : Pernr,
        Label : 'Personalnummer',
    },
    {
        $Type:'UI.DataField',
        Value : Birthday,
        Label                     : 'Birthday',
    },
    
    
]

 });
annotate service.xJSSxTBUSINESSOBJECT with @( UI : {
    LineItem : [
            {
        $Type:'UI.DataField',
        Value : FirstName,
        Label : 'Vorname',
    },
    {
        $Type:'UI.DataField',
        Value : LastName,
        Label : 'Nachname',
    },
    {
        $Type:'UI.DataField',
        Value : Age,
        Label : 'Alter',
    },
    {
        $Type:'UI.DataField',
        Value : Birthday,
        Label                     : 'Birthday',
    },
    {
        $Type:'UI.DataField',
        Value : SAP_Description,
    },
]});
