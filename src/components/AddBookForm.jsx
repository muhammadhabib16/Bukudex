import { use, useState } from "react";

export default function AddBook({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || author.trim() === "" || cover.trim() === "")
      return alert("Semua field harus diisi");
    onAdd({ title, author, cover });
    setTitle("");
    setAuthor("");
    setCover("");
  };
  return (
    <>
      <div className=" flex">
        <div className="mx-auto">
          <form
            onSubmit={handleSubmit}
            className="m-2 flex-wrap flex items-center justify-center"
          >
            <input
              type="text"
              placeholder="judul buku"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-1 m-2 text-center p-2 rounded-sm w-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            ></input>
            <input
              type="text"
              placeholder="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-1 m-2 text-center p-2 rounded-sm w-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            ></input>
            <input
              type="text"
              placeholder="cover buku"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              className="border-1 m-2 text-center p-2 rounded-sm w-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            ></input>
            <button
              type="submit"
              className="border-1 m-2 p-2 rounded-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg hover:cursor-pointer"
            >
              tambah buku
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
