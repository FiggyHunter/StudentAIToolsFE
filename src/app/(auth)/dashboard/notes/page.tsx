import Note from "./components/Note"

export default function Page() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <Note/>
        </div>
    )
}