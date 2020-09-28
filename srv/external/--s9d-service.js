module.exports = {
    getTBusinessObject: async function (req) {
        const srv = cds.connect.to("xJSSxTBUSINESSOBJECT")
        const { xJSSxTBUSINESSOBJECT } = srv.entities;

        // share request context with the external service
        // inside a custom handler
        const tx = srv.transaction(req);
        let response = null;

        // CSN entity input and fluent query API
        response = await tx.read(xJSSxTBUSINESSOBJECT);
        console.log(response)
        return response;
    }
}