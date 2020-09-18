using {tbusinessobject as external} from './external/tbusinessobject.csn';
using {NorthWind as externNorthwind} from './external/NorthWind';
using {db as dbtest} from '../db/schema';


@path: '/browse'
service browse {
    entity People as projection on dbtest.People;
    entity Products as projection on externNorthwind.Products {
        key ID, Name, Description, ReleaseDate, DiscontinuedDate, Rating, Price
    };
    entity TBusinessObj as projection on external.xJSSxTBUSINESSOBJECT ;
}