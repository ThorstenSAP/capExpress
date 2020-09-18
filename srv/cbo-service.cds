using {tbusinessobject as external} from './external/tbusinessobject.csn';
using {db as dbtest} from '../db/schema';


@path: '/browse'
service browse {
    entity People as projection on dbtest.People;
    entity TBusinessObj as projection on external.xJSSxTBUSINESSOBJECT ;
}