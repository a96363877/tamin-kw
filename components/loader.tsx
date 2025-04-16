export default function Loader() {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
        <div className="relative">
          {/* Spinning border */}
          <div
            className="absolute inset-0 rounded-full border-4 border-t-[#c9a96e] border-r-[#c9a96e] border-b-transparent border-l-transparent animate-spin"
            style={{ width: "160px", height: "160px", margin: "-10px" }}
          ></div>
          {/* Logo image */}
          <div
            className="flex items-center justify-center bg-white rounded-full"
            style={{ width: "140px", height: "140px" }}
          >
            <img src="/loader.png" alt="Kuwait Insurance Company" title="Kuwait Insurance Company" width={100} />
          </div>
        </div>
      </div>
    )
  }
  