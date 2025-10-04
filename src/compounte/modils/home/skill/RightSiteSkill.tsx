import { FaPhoneAlt } from "react-icons/fa";

function RightSiteSkill() {
    return (
        <div className="  items-center justify-center px-5 md:px-12 py-10 space-y-6 md:space-y-0 md:space-x-12">

            <div className="flex items-center space-x-4">
                <div className="border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center w-[120px] sm:w-[150px] md:w-[200px] h-[120px] sm:h-[150px] md:h-[160px]">
                    <span className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                        10
                    </span>
                </div>

                <div className="flex flex-col font-bold leading-tight text-lg sm:text-xl md:text-3xl bg-gradient-to-r from-pink-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                    <span>Years</span>
                    <span>Experience</span>
                    <span>Working</span>
                </div>
            </div>


            <div className="flex items-center space-x-3 pt-20">
                <span className="text-2xl sm:text-3xl text-blue-500"><FaPhoneAlt /></span>
                <div className="flex flex-col">
                    <p className="text-sm sm:text-base text-blue-500 font-semibold uppercase">CALL US NOW</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">(+1)-800-555-6789</p>
                </div>
            </div>
        </div>



    );
}

export default RightSiteSkill;