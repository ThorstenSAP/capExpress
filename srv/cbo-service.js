const cds = require('@sap/cds')

module.exports = cds.service.impl(async function() {
	const { TBusinessObj } = this.entities;
	const service = await cds.connect.to('tbusinessobject');
	this.on('READ', TBusinessObj, request => {
		return service.tx(request).run(request.query);
	});
});