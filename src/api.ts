import { EventBridge } from 'aws-sdk'

const EVENT_BUS_NAME = process.env.EVENT_BUS_NAME 
const eventBus = new EventBridge()

export const handler = async (event:any): Promise<any> => {

    const message = JSON.parse(event.body)
    console.log("the body", message)

    const params = {
        Entries: [
            {
                EventBusName: EVENT_BUS_NAME,
                Source: `service.api`,
                DetailType: `detail`,
                Detail: JSON.stringify(message)
            },
        ],
    }

    const sent = await eventBus.putEvents(params).promise()

    console.log(sent)
    console.log(event)

    return {
        
        statusCode: 200,
        body: JSON.stringify({
            message: "complete",
            event: event.body
        }, null, 2)
      }





}