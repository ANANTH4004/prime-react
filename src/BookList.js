import './styles/index.css';
function BookList() {
  return (
    <section className='booklist'>
      <Book
        author='Anand'
        title='Catch me If You Can'
        imgPath='../public/logo192.png'
      />
      <Book
        author='Varun'
        title='Ninaivellam Nithya'
        imgPath='../public/logo152.png'
      />
    </section>
  );
}

export default BookList;
const Book = (props) => {
  return (
    <article className='book'>
      <h1>{props.title}</h1>
      <img src={props.imgPath} alt='Here will be the Book Image' />
      <p className='author-name'>{props.author}</p>
    </article>
  );
};
