using browse as service from '../../srv/cbo-service.cds';

annotate service.xJSSxTBUSINESSOBJECT with @(UI : { 
    HeaderInfo : {
    $Type:'UI.HeaderInfoType',
    TypeName : '{i18n>Employee}',
    TypeNamePlural : '{i18n>Employees}',
},
LineItem : [
    {
        $Type:'UI.DataField',
        Value : FirstName,
    },
    {
        $Type:'UI.DataField',
        Value : LastName,
    },
    {
        $Type:'UI.DataField',
        Value : Age,
    },
    {
        $Type:'UI.DataField',
        Value : Birthday,
    },
    {
        $Type:'UI.DataField',
        Value : SAP_Description,
    },
    
]

 });
