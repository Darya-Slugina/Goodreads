import { useSelector } from "react-redux";

export default function BooksTable() {

    const books = useSelector((state) => state.books.books);

    return (
        <table>
            <thead>
                <tr>
                    <th>cover</th>
                    <th>title</th>
                    <th>author</th>
                    <th>shelves</th>
                </tr>
            </thead>
            <tbody>
                {/* {books.map(book => (
                    <tr>
                        <td><img src={book.img} alt={book.title}></img></td>
                        <td><p>{book.title}</p></td>
                        <td><p>{book.author}</p></td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    )
}