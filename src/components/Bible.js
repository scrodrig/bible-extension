import React, { Component } from 'react'
import logo from '../cover.jpg'
import './bible.css'
import BibleUtils from '../utils/BibleUtils'
import BooksUtils from '../utils/BooksUtils'

class Bible extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verse: '',
            books: [],
            book: {},
            chapter: null
        }
    }

    componentDidMount() {
        const books = BooksUtils.getBooks()
        this.setState({ books: books })
        this.getVerse()
    }

    onBookChange = event => {
        this.setState({ book: this.getBook(event.target.value), chapter: null })
    }

    onChapterChange = event => {
        const { book } = this.state
        this.setState({ chapter: event.target.value })
        this.getVerse(`${book.key}${event.target.value}`)
    }

    getBook(key) {
        const { books } = this.state
        return books.find(book => book.key === key)
    }

    getVerse(passage) {
        BibleUtils.getVerse(passage).then(verse => {
            this.setState({ verse: verse })
        })
    }

    loadChapters(book) {
        const options = []
        for (let index = 1; index <= book.chapters; index++) {
            options.push(<option value={index}>{index}</option>)
        }
        return options
    }

    render() {
        const { verse, books, book, chapter } = this.state
        return (
            <div className="bible">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Biblia RVA</h1>

                <div className="book">
                    <div className="book-search">
                        <select id="books" onChange={this.onBookChange} value={book.key}>
                            <option value="">Seleccione...</option>
                            {books.map(book => {
                                return <option value={book.key}>{book.value}</option>
                            })}
                        </select>

                        <select id="chapters" onChange={this.onChapterChange} value={chapter || 'Seleccione...'}>
                            <option value="">Seleccione...</option>
                            {this.loadChapters(book)}
                        </select>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: verse }} />
                </div>
            </div>
        )
    }
}

export default Bible
