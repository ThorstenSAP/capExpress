const s9dService = require('./external/s9d-service')

module.exports = async (srv) => {
    srv.on("browse", asnyc (req) => {
        const result = await s9dService.getTBusinessObject()
    })
}