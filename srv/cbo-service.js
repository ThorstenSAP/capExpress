const cds = require('@sap/cds')

module.exports = cds.service.impl(async function() {
    const { xJSSxTBUSINESSOBJECT, tbusinessobject, Products, PeopleSet } = this.entities;
    // console.log(this.entities)
    const s9d_tbusobj = await cds.connect.to('xJSSxTBUSINESSOBJECT');
    const s9d_pltSrv = await cds.connect.to('s9d_Z_PLT_SRV')
    const northwind = await cds.connect.to('NorthWind')
    
    this.on('READ', tbusinessobject, request => {
      return s9d_tbusobj.tx(request).run(request.query);
      });

    this.on('READ', xJSSxTBUSINESSOBJECT, request => {
		  return s9d_tbusobj.tx(request).run(request.query);
    });
    this.on('READ', PeopleSet, request => {
		  return s9d_pltSrv.tx(request).run(request.query);
    });
	  this.on('READ', Products, request => {
		  return northwind.tx(request).run(request.query);
    });
});