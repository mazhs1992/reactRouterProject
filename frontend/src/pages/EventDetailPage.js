import { Link, useParams } from "react-router-dom"



function EventDetailPage(props) {
    const params = useParams()

    return (
        <>
            <h1>EventDetailPage</h1>
            <p> {params.eventsId}</p>
            <p><Link to='..' relative="path">Back</Link></p>
        </>
    )
}

export default EventDetailPage