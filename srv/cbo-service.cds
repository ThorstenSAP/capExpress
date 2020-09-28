using {xJSSxTBUSINESSOBJECT as externalxJSSx} from './external/xJSSxTBUSINESSOBJECT.csn';
using {s9d_Z_PLT_SRV as s9dEmployee} from './external/s9d_Z_PLT_SRV';
using {NorthWind as externNorthwind} from './external/NorthWind';


@path: '/browse'
service browse {
    entity xJSSxTBUSINESSOBJECT as projection on externalxJSSx.xJSSxTBUSINESSOBJECT;
    // entity PeopleSet as select from s9dEmployee.PeopleSet;

}

