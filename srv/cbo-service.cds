using {xJSSxTBUSINESSOBJECT as externalxJSSx} from './external/xJSSxTBUSINESSOBJECT.csn';
using {tbusinessobject as externalTbusinessObject} from './external/tbusinessobject';
using {NorthWind as externNorthwind} from './external/NorthWind';
using {db as dbtest} from '../db/schema';


@path: '/browse'
service browse {
    entity People as projection on dbtest.People;
    entity Products as projection on externNorthwind.Products {
        key ID, Name, Description, ReleaseDate, DiscontinuedDate, Rating, Price
    };
    entity xJSSxTBUSINESSOBJECT as projection on externalxJSSx.xJSSxTBUSINESSOBJECT ;
    entity tbusinessobject as projection on externalTbusinessObject.xJSSxTBUSINESSOBJECT;
}