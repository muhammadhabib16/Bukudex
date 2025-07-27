export default function SearchBook({ query, setQuery }) {
  return (
    <>
      <div>
        <div className="py-3 px-4 w-full shadow-indigo-950 shadow-2xs rounded-b-lg md:rounded-none mx-auto">
          <div className="flex justify-center mt-6 ">
            {" "}
            <input
              type="text"
              placeholder="pencarian"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 border-1 rounded-sm w-full md:w-2/3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
