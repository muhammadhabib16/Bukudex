export default function Header() {
  return (
    <>
      <div className=" bg-white/50 backdrop-blur-lg  md:bg-transparent md:py-6 py-3 px-4 w-xs md:w-full shadow-indigo-950 shadow-2xs rounded-b-lg md:rounded-none mx-auto ">
        <div className="flex justify-between flex-row">
          <h1 className="ml-15 hidden md:flex font-semibold text-3xl">
            Selamat Datang di Perpustakaan
          </h1>

          <ul className="flex gap-6 mx-auto items-center md:mr-15">
            <li className="font-medium text-white text-2xl">
              <a href="#">Home</a>
            </li>
            <li className="font-medium text-white text-2xl">
              <a href="#">Library</a>
            </li>
            <li className="font-medium text-white text-2xl">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>

      <h1 className=" ml-5 mt-10 flex md:hidden font-medium text-4xl">
        Selamat Datang di Perpustakaan
      </h1>
    </>
  );
}
