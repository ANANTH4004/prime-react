import './styles/index.css';
const bookList = [
  {
    author: 'Anand',
    title: 'Catch me If You Can',
    imgPath: '../public/logo192.png',
  },
  {
    author: 'varun',
    title: 'Ninaivellam Nithya',
    imgPath: '../public/logo152.png',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {bookList.map((book, index) => {
        return <Book {...book} key={index} />;
      })}
    </section>
  );
}

export default BookList;
const Book = (book) => {
  console.log(book);
  const { title, author, imgPath } = book;
  return (
    <article className='book'>
      <h1>{title}</h1>
      <img src={imgPath} alt='Here will be the Book Image' />
      <p className='author-name'>{author}</p>
    </article>
  );
};
