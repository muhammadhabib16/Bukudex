export default function BookList({ books }) {
  return (
    <>
      <div className="container mx-auto py-6">
        <div className="justify-center items-center flex flex-wrap gap-4">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded h-full text-center flex flex-col justify-between p-4 hover:shadow-md hover:bg-slate-700 transition w-full sm:w-1/2 md:w-1/3 lg:w-[23%] group [perspective:1000px] m-10"
            >
              <div
                className="bg-slate-800 rounded h-full text-center flex flex-col justify-between p-4 
                     transition duration-500 ease-in-out origin-left
                     [transform-style:preserve-3d] rotate-y-[-25deg] 
                     group-hover:rotate-y-0 group-hover:scale-105 group-hover:shadow-2xl"
              >
                <div>
                  <h3 className="text-2xl">{book.title}</h3>
                </div>
                <div>
                  <p>{book.author}</p>
                </div>
                <div>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full aspect-[3/4] object-cover rounded mt-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
