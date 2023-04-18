import { Link, useRouteLoaderData, useLoaderData, json } from "react-router-dom"
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