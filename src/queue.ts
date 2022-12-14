export const handler = async (event:any): Promise<any> => {

    console.log("Queue here")
    console.log(event)

    event.Records.forEach(record => {

        //do some business logic with the data

        const body = JSON.parse(record.body)
        console.log(body)
        console.log(body.detail)
        
    });


}