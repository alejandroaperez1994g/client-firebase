import logo from './logo.svg'
import { UserContext } from './contexts/UserContext'
import { useContext, useState } from 'react'
import { Avatar, Button, Image } from '@nextui-org/react'
import useAuth from './hooks/useAuth'

import './App.css'

function App () {
  const [books, setBooks] = useState({})
  const { userData } = useContext(UserContext)
  const { getBooks } = useAuth()

  const retrieveBooks = async () => {
    const books = await getBooks()
    setBooks(books)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Welcome {userData.displayName}
        </a>
        <Avatar
          size='lg'
          src={userData.photoURL}
          color='gradient'
          bordered
        />
      </header>
      <Button
        onPress={retrieveBooks}
        className='get_book_icon' icon={<Image
          width={35}
          height={35}
          src={require('./assets/images/book.png')}
          alt='Default Image'
                                        />}
      >
        Get Books
      </Button>
      {books.data
        ? books.data.map(book => {
          return (
            <h3 className='book_item' key={book._id}>📕 {book.title}</h3>
          )
        })
        : <h1>No Books</h1>}
    </div>
  )
}

export default App
