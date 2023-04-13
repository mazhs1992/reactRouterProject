import { Link } from "react-router-dom"

const EVENTS = [
    { id: 'e1', title: "EVENTS 1" },
    { id: 'e2', title: "EVENTS 2" },
    { id: 'e3', title: "EVENTS 3" }
]

function EventsPage() {
    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {EVENTS.map(prod => <li key={prod.id}><Link to={`/events/${prod.id}`}>{prod.title}</Link> </li>)}

            </ul>
        </>
    )
}

export default EventsPage