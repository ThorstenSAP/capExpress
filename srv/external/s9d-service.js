module.exports = {
    getTBusinessObject: async function () {
        try{
            const srv = await cds.connect.to("s9d_cbo_tbusiness")
            return srv
        } catch(error){
            console.log(error)
        }
        return "something went wrong"
    }
}