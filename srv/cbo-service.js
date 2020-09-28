const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    // console.log(this.entities)
    const s9d_tbusobj = await cds.connect.to('xJSSxTBUSINESSOBJECT');
    const {xJSSxTBUSINESSOBJECT} = this.entities;
    // const {xJSSxTBUSINESSOBJECT} = s9d_tbusobj.entities

    

    this.on('READ', xJSSxTBUSINESSOBJECT, async (request) => {
      let response=  await s9d_tbusobj.tx(request).run(request.query);
      return response

    });

});
