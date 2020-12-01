const cds = require("@sap/cds");
const { response } = require("express");

module.exports = cds.service.impl(async function () {
  const cnt_NorthWind = await cds.connect.to("NorthWind")

  const { NorthWind } = this.entities;
  this.on("READ", NorthWind, async (request) => {
    let response = await cnt_NorthWind.tx(request).run(request.query);
    return response;
  });


});
