function BookList() {
  return (
    <section>
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
    <article>
      <Title />
      <Image />
      <Author />
    </article>
  );
};

const Title = () => <h1>This is ethe Titile</h1>;
const Image = () => <img src='' alt='Here will the Book Image' />;
const Author = () => <p className='author-name'>Anand</p>;
