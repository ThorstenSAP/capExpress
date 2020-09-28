const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const s9d_tbusobj = await cds.connect.to('xJSSxTBUSINESSOBJECT');
    const s9d_peopleSet = await cds.connect.to('s9d_Z_PLT_SRV');
    const {xJSSxTBUSINESSOBJECT, PeopleSet} = this.entities;
    

    this.on('READ', xJSSxTBUSINESSOBJECT, async (request) => {
      let response=  await s9d_tbusobj.tx(request).run(request.query);
      return response
    });
    this.on('READ', PeopleSet, async (request) => {
      let response=  await s9d_peopleSet.tx(request).run(request.query);
      return response
    });
});
