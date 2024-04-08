import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <div>
        <HeaderPage />

        <div className="flex flex-row h-[calc(80vh-2rem)] mt-5">
          <Sidebar />
          <div className="flex flex-col flex-grow bg-gray-100 rounded-xl p-4 ml-4 overflow-auto mt-2  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;

const HeaderPage = () => {
  return (
    <header
      className="flex h-auto p-3.5 justify-between items-center"
      style={{ background: "#00FFFF" }}
    >
      <div className="flex mx-8">
        <img src="../../../img/logo1.svg" className="mr-4" />
        <p className="tracking-tighter py-2 text-white">
          Cam kết hoàn 150% nếu nhà xe không giữ vé
        </p>
      </div>

      <div className="flex items-center justify-center flex-grow">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="px-4 py-2 rounded-l-md focus:outline-none w-80"
        />
        <button className="bg-white px-4 py-2 rounded-r-md">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="flex">
        <nav className="flex">
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href=""
                className="text-white  hover:underline px-3 py-2 rounded transition-colors duration-300"
              >
                Account
              </a>
            </li>
            <li>
              <Link
                to="/"
                className="text-white hover:underline px-3 py-2 rounded transition-colors duration-300"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        <ul>
          <div
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none font-semibold"
          >
            <div className="grid place-items-center mr-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              ></svg>
            </div>
            <ul>
              <li>
                <Link to="/admin/dashboard">Trang chủ</Link>
              </li>
            </ul>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none font-semibold"
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              ></svg>
            </div>

            <li>
              <Link to="/admin/trips">Lịch sử</Link>
            </li>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none font-semibold"
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              ></svg>
            </div>
            <li>
              <Link to="/admin/trips">Chuyến xe</Link>
            </li>
            <div className="grid place-items-center ml-auto justify-self-end">
              <div
                className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full"
                style={{ opacity: 1 }}
              >
                <span>14</span>
              </div>
            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none font-semibold"
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              ></svg>
            </div>
            Nhà xe
          </div>
        </ul>
      </nav>
    </div>
  );
};

