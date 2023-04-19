import { Suspense } from "react"
import { Link, useRouteLoaderData, useLoaderData, json, redirect, defer, Await } from "react-router-dom"
import EventItem from '../components/EventItem'
import EventsList from "../components/EventsList"

function EventDetailPage() {
    const { events, event } = useRouteLoaderData('event-detail')


    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading ...</p>}>
                <Await resolve={event}>
                    {loadedEvent => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>

            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading ...</p>}>
                <Await resolve={events}>
                    {loadedEvents => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>

            <p><Link to='..' relative="path">Back</Link></p>
        </>
    )
}

export default EventDetailPage

async function loadEvent(id) {
    // const id = params.eventsId;
    const response = await fetch('http://localhost:8080/events/' + id)

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch details for selected events.' },
            { status: 500 }
        )
    } else {
        const resData = await response.json()
        return resData.event
    }
}


async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        //return { isError: true, message: 'Could not fetch events.' }
        //throw { message: 'Could not fetch events.' }
        //throw new Response(JSON.stringify({ message: 'Could not fetch events.' }, { status: 500 }))
        throw json(
            { message: 'Could not fetch events.' },
            { status: 500 }
        )
    } else {
        const resData = await response.json()
        console.log(resData.events)
        return resData.events
    }
}

export async function loader({ request, params }) {
    const id = params.eventsId;

    return defer({
        event: await loadEvent(id),
        events: loadEvents(),

    })


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