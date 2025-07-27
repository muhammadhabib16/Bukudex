export default function Hero() {
  return (
    <>
      <div className="flex w-10/12 md:w-4xl h-60 md:h-96 bg-indigo-950/50 mx-auto my-6 rounded-sm justify-center items-center gap-2">
        <div className="text-center p-4">
          <h1 className="text-2xl font-medium">
            Buku adalah jendela ilmu pengetahuan
          </h1>
          <p className="text-base/loose font-light ">
            Membacalah, karena dengan membaca maka kamu dapat menggenggam dunia
          </p>
        </div>
        <div>
          <img
            src="/img/book1.jpg"
            className="hidden md:flex w-96 h-60 justify-start rounded-2xl p-2"
          ></img>
        </div>
      </div>
    </>
  );
}
