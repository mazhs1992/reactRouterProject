import { Link, useRouteLoaderData, useLoaderData, json, redirect } from "react-router-dom"
import EventItem from '../components/EventItem'


function EventDetailPage(props) {
    const data = useRouteLoaderData('event-detail')
    console.log(data)

    return (
        <>
            <EventItem event={data.event} />
            <p><Link to='..' relative="path">Back</Link></p>
        </>
    )
}

export default EventDetailPage

export async function loader({ request, params }) {

    const id = params.eventsId;
    const response = await fetch('http://localhost:8080/events/' + id)

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch details for selected events.' },
            { status: 500 }
        )
    } else {
        return response;
    }
}

export async function action({ request, params }) {


    const eventId = params.eventsId
    const responce = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method
    })

    if (!responce.ok) {
        throw json(
            { message: 'Could not delete event.' },
            { status: 500 }
        )
    }

    return redirect('/events')
}