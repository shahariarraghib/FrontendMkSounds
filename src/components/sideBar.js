import React from "react";
import { sideBarMenu } from "../utility/constant";

const SideBar = () => {
  return (
    <div className="bg-white col-span-2 h-full shadow-lg">
      <div className="flex justify-center items-center gap-4 mt-[32px]">
        <div className="h-[40px] w-[40px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/adb9/a582/19a62ec3edac4e238d7c5271b919e2b2?Expires=1677456000&Signature=RVUokzng0OLGBMmbFTuwzW5euzjKIew8WqbNXU1n1zA5hEHYlZIRfDZROkMRmdsvF9OOYGauRgMF~b7sey-cXQ6r7A2rYCski9x7mTcIzk7m11bJBm5N6xND0rWKQR5GvUq0yQH8YRgbGSf7jdzRp~7dCfoh78~T8ASkNngCtifbdu~NKqoedvjD4EGW03tr-Rq1oTKpCEU765Z6ne~ZzIFaCmaLt82E1lNbL-jmk9wwpbQMYTjNrBFasMvm~oH6yNriYdLyX~gQfS2lUrZe3psRmO5zzLoQ8Sk1K6YEqphizeB8j~7lqOAXKPPlt-E1fqSuG4LsVHjZhoTzlKwuGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="headphone"
          />
        </div>
        <h2 className="text-[28px]">MK Sounds</h2>
      </div>

      <div className="mt-[72px]">
        {sideBarMenu.map((item, index) => (
          <a href="#" key={index} className="flex">
            {item[2] === "active" ? (
              <div className="w-[20px] h-[42px] bg-[#09FB5B] rounded-r-lg mr-[24px]"></div>
            ) : (
              <div className="w-[20px] h-[42px] bg-[white] mr-[24px]"></div>
            )}
            <div className="flex  items-center gap-4 mb-[42px]  ">
              <img src={item[0]} alt="" className="w-[25px] h-[25px]" />
              <h1 className="text-[20px] font-semibold">{item[1]}</h1>
            </div>
          </a>
        ))}
      </div>

      <div className="bg-green-400 m-4 flex flex-col justify-center p-4 text-white  rounded-lg helpBg">
        <div className="flex justify-center">
          <button type="button" className="text-3xl font-extrabold ">
            <div className=" bg-white flex justify-center items-center  rounded-full p-1">
              <div className="bg-[#1240E2] rounded-full w-[38px] h-[38px]">
                <h2 className="">+</h2>
              </div>
            </div>
          </button>
        </div>

        <h2 className="text-[32px] font-semibold text-center">Need Help</h2>

        <p className="text-center text-[18px] py-1 leading-[19.4px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>

        <div className="flex justify-center">
          <button className="bg-[#21D111] text-[18px] font-bold py-1 rounded-lg w-[174px]">
            Customer Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
