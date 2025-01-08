import Feed from "../components/Feed";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto min-h-[calc(100vh-100px)] px-10 mb-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">글 목록</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            글쓰기
          </button>
        </div>
        <Feed></Feed>
      </div>
    </>
  );
};

export default Home;
