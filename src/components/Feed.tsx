import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Link
          to="/"
          className="flex justify-between bg-white shadow-md p-6 rounded-lg"
        >
          <div>
            <button className="p-3 bg-gray-100 rounded-lg text-sm flex flex-col items-center gap-1 text-blue-950">
              👍
              <div className="font-bold">2</div>
            </button>
          </div>
          <div className="flex-1 px-10 min-w-0 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-blue-950 text-xl font-bold">
                첫 번째 게시물
              </h2>
              <p className="text-gray-600 truncate text-md">123</p>
            </div>
            <p className="text-right text-xs text-gray-600">
              작성일: 2024. 11. 11.
            </p>
          </div>
          <div className="flex items-center gap-1 p-3 text-gray-600">
            🗨️
            <div className="font-bold">4</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Feed;
