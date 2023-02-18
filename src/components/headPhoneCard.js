import React, { useState } from "react";
import { rating } from "../utility/constant";

const HeadPhoneCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(2);

  const handleQuantityPlus = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityMinus = () => {
    if (quantity >= 1) setQuantity(quantity - 1);
  };

  const handleColor = (event) => {
    console.log(event.target.id);
    setColor(event.target.id);
  };
  return (
    <div className="flex w-[70%]  shadow-lg p-4 rounded-xl">
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/7e1d/bb3d/5a42ec6a97cf5053ea7b3beaca6e26c2?Expires=1677456000&Signature=BIQVDLhVhiDkuLVaVOqYb72VTaAJCmRFSRA2YFklK3cFBnmNYLHChsq7vjUYS18VvEFHpVEKHwH9G~P~EKaDKcxCxrK0ZSpDMzRxzSHJca8~VzEjGVropUmy-qsJ1ep~1~iGdoXD1AKLyjbU~cbypcLt5vKfg8wtm0VbhXFeP~B9hc8lEoqbO9KTU9INbqxYLnKIowwfmFbhdr0l6emQK3iHo7mDkP2n7Y0fqREvhnhx1gfyVlZMPMh3EcSF7Sp7WT6Iwm7Mz8NXDAm0SnvjvbxF6PMpH2JXACpigRyWJfogP8YZRIQ7Nk1WmUrEj1sBdIX6LyIOxjR7br8vXdJcFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
      <div className="flex flex-col ">
        <h2 className="text-[22px] font-bold">
          Beats Studio3 Wireless Headphone
        </h2>
        <div className="flex gap-3 items-center ">
          <img src={rating} alt="" />
          <img src={rating} alt="" />
          <img src={rating} alt="" />
          <img src={rating} alt="" />
          <img src={rating} alt="" />
          <h2>( 200+ Reviews )</h2>
        </div>
        <p className="text-[16px] font-semibold py-3">
          Ergonomic or cupe with on-oor controls up to 22 hours of tening time.
          Apple Wi crip & Closs{" "}
        </p>

        <p className="text-[18px] text-[#07FFD2] font-semibold">
          Price $ 450.55
        </p>

        <div className="">
          <div className="text-[18px] font-bold flex items-center gap-4">
            <h2>Color: </h2>

            <div className="flex gap-4">
              <button
                type="button"
                id="1"
                onClick={handleColor}
                className={
                  color == 1
                    ? "w-[30px] h-[30px] border-2 border-[#66FF1E] rounded-full px-[2px] flex justify-center items-center"
                    : "w-[30px] h-[30px] border-2 border-white rounded-full px-[2px] flex justify-center items-center"
                }
              >
                <div
                  id="1"
                  className="w-[20px] h-[20px] rounded-full bg-[#66FF1E]"
                ></div>
              </button>

              <button
                type="button"
                id="2"
                onClick={handleColor}
                className={
                  color == 2
                    ? "w-[30px] h-[30px] border-2 border-[#07FFD2] rounded-full px-[2px] flex justify-center items-center"
                    : "w-[30px] h-[30px] border-2 border-white rounded-full px-[2px] flex justify-center items-center"
                }
              >
                <div
                  id="2"
                  className="p-2 w-[20px] h-[20px] rounded-full bg-[#07FFD2]"
                ></div>
              </button>

              <button
                type="button"
                id="3"
                onClick={handleColor}
                className={
                  color == 3
                    ? "w-[30px] h-[30px] border-2 border-[#1E78FF] rounded-full px-[2px] flex justify-center items-center"
                    : "w-[30px] h-[30px] border-2 border-white rounded-full px-[2px] flex justify-center items-center"
                }
              >
                <div
                  id="3"
                  className="w-[20px] h-[20px] rounded-full bg-[#1E78FF]"
                ></div>
              </button>

              <button
                type="button"
                id="4"
                onClick={handleColor}
                className={
                  color == 4
                    ? "w-[30px] h-[30px] border-2 border-[#8E3785] rounded-full px-[2px] flex justify-center items-center"
                    : "w-[30px] h-[30px] border-2 border-white rounded-full px-[2px] flex justify-center items-center"
                }
              >
                <div
                  id="4"
                  className="w-[20px] h-[20px] rounded-full bg-[#8E3785]"
                ></div>
              </button>
            </div>

            <div className=" flex items-center gap-4 bg-[#F5F4F4] p-2 rounded-2xl">
              <button
                onClick={handleQuantityMinus}
                className="w-[20px] h-[20px] bg-[#D9D9D9] rounded-full font-bold text-3xl flex items-center justify-center  "
              >
                <h2 className="mt-[-5px]">-</h2>
              </button>
              <h2 className="text-[23px] font-bold">{quantity}</h2>
              <button
                onClick={handleQuantityPlus}
                className="w-[20px] h-[20px] bg-[#D9D9D9] rounded-full font-bold text-3xl flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-5">
          <button className="border-2 border-[#38FF4C] rounded-lg">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/8494/6241/ce5cb0a0f1265f2f3d6facfadd8a8d96?Expires=1677456000&Signature=ZLT8l8Frp6tYoj8wVSvEi4ouPfxCPL0iOT9~ECdcqRHZd9TomZOgXio6obkTQBdrJ4JMw1xHL6MvgoQSl5dMIGWqWU~7rHr5wFOF6TOvDnbwc7LH6IssZ-skfrToE-3o2fOC2HHzWHqecSnkLOGpQ7N3KXQDhP50kffCtelynF1OIGrRa4iPZ0Ol1mVRTV~n8W87Nq70tL7tLNoXwPKs~rDiLwt42gLqnndz1cNOrEPS6F6h2hzleXLf0Nt2PAxkGE76fmChTcr7rqUi-wYpKxZNnyXMSc5YMBDkPHGmrX8qGJOvXgltmeHELaYuSTGJUqA0rjuO5xw1G4VvB6q2uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </button>

          <button className="border-2 border-[#38FF4C] rounded-lg px-2">
            <div>
              <h2 className="text-[20px] font-semibold">Add to Card</h2>
            </div>
          </button>
          <button className="border-2 bg-[#38FF4C] border-[#38FF4C] rounded-lg px-2">
            <div>
              <h2 className="text-[20px] font-semibold">Buy Now</h2>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadPhoneCard;
