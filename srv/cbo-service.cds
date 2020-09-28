using {xJSSxTBUSINESSOBJECT as externalxJSSx} from './external/xJSSxTBUSINESSOBJECT.csn';
using {s9d_Z_PLT_SRV as s9dEmployee} from './external/s9d_Z_PLT_SRV';
using {NorthWind as externNorthwind} from './external/NorthWind';


@path: '/browse'
service browse {
    entity xJSSxTBUSINESSOBJECT as select from externalxJSSx.xJSSxTBUSINESSOBJECT;


// function getJSSTBUSINESSOBJECT() returns {
//     SAP_UUID : String;
//     LastName: String;
//     FirstName: String;
//     Age: String;
//     Birthday: String;
//     ID: String;
//     SAP_Description: String;
// };

}

