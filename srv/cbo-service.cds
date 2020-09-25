using {xJSSxTBUSINESSOBJECT as externalxJSSx} from './external/xJSSxTBUSINESSOBJECT.csn';
using {tbusinessobject as externalTbusinessObject} from './external/tbusinessobject';
using {s9d_Z_PLT_SRV as s9dEmployee} from './external/s9d_Z_PLT_SRV';
using {NorthWind as externNorthwind} from './external/NorthWind';
using {db as dbtest} from '../db/schema';


@path: '/browse'
service browse {
    // entity People as projection on dbtest.People;
    entity Products as projection on externNorthwind.Products {
        key ID, Name, Description, ReleaseDate, DiscontinuedDate, Rating, Price
    };
    entity xJSSxTBUSINESSOBJECT as projection on externalxJSSx.xJSSxTBUSINESSOBJECT {
        key SAP_UUID, LastName, FirstName, Age, Birthday, ID, SAP_Description
    } ;
    entity tbusinessobject as projection on externalTbusinessObject.xJSSxTBUSINESSOBJECT;
    entity PeopleSet as projection on s9dEmployee.PeopleSet {
        //does not make a difference if fields are provided or not
        key Pernr, Ename, Firstname, Lastname, Birthday, Subtype, Cname, Title
    };
}