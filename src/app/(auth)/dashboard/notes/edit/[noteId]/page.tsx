export default function Page({ params }: { params: { noteId: string } }) {
    return <div>My Post: {params.noteId}</div>
}