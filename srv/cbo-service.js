const cds = require('@sap/cds')

module.exports = cds.service.impl(async function() {
    const { TBusinessObj, Products } = this.entities;
    // console.log(this.entities)
    const s9d = await cds.connect.to('tbusinessobject');
    const northwind = await cds.connect.to('NorthWind')
    
    this.on('READ', TBusinessObj, request => {
		return s9d.tx(request).run(request.query);
    });
    
	this.on('READ', Products, request => {
		return northwind.tx(request).run(request.query);
    });
});