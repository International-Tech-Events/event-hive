import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-[3rem] mb-[2rem] mx-[5rem] flex justify-between items-center">

      <div className="flex items-center gap-2">

        <p className="font-bold text-[25pt]">Event</p>

        <p className="text-[#7848F4] font-bold text-[25pt]">Hive</p>

      </div>


      <div className="flex items-center gap-6">

        <Link to={'/signin'} className="font-semibold">Login</Link>

        <Link to={'/signup'} className="bg-[#7848F4] text-white rounded px-[2rem] py-[0.6rem]">Signup</Link>
        
      </div>

    </div>
  );
};

export default Header;