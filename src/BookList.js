import './styles/index.css';
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

export default BookList;
const Book = () => {
  return (
    <article className='book'>
      <h1>This is the Title</h1>
      <img src='' alt='Here will be the Book Image' />
      <p className='author-name'>Anand</p>
    </article>
  );
};
