import Note from "./components/Note"

export default function Page() {
    const notes = [
        {
            "id":"232312",
            "title": "Title 1",
            "text": "sdasdasdasd",
            "createdAt": "2024-03-09T20:08:19.489Z"
        },
        {
            "id":"12312",
            "title": "Title 2",
            "text": "sdasd",
            "createdAt": "2024-03-09T20:08:19.489Z"
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {notes.map((note,index)=>(
                <Note 
                    id={note.id}
                    key={index}
                />
            ))}
        </div>
    )
}