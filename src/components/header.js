import React, { useState } from "react";
import { rating } from "../utility/constant";
import HeaderCardMini from "./headerCardMini";
import HeadPhoneCard from "./headPhoneCard";

const Header = ({ data }) => {
  return (
    <div className="container mx-auto ">
      <div className="flex ju gap-10">
        <HeadPhoneCard />
        <HeaderCardMini />
      </div>

      <div>
        <div className="pt-6 grid grid-cols-4 gap-4">
          {data.slice(1, 5).map((item, index) => (
            <div className="shadow-lg rounded-xl p-4 ">
              <div className="flex justify-center">
                <img src={item.picture} alt="" />
              </div>

              <h2 className=" text-[22px] font-semibold">{item.name}</h2>
              <h2 className="text-gray-500 text-[22px] font-semibold">
                Price: ${item.price}
              </h2>
              <h2 className="flex items-center text-[#38FF4C] text-[20px] font-semibold">
                <img
                  className="w-[20px] h-[21px]"
                  src={
                    "https://s3-alpha-sig.figma.com/img/ac0a/63e3/5a46d706a1ac890bb787301e5e6c7610?Expires=1677456000&Signature=j3dLMSr9AlncO4afdPRFbBjt6OG6W50mWOpRP5iBtRdHmIKcO2eSm1E~d9ET02QSOScyLbaNUuOpmTw5QKGSYqTU-sULAKAKViDd1tOgGyo08jGkgyYpdEPQxETJ2b34EoEXi9wlZrhPrlXsi-yIVCH6ydceO8XxS2q2ebZXx1ify0kXl~ndOyAjSY~aDVsS0ZEY6nQ~-YRv0xEVUu0z4SU8rHZJoVMGcBXlRqeIUatjbTBg5seaHgkFzMkivXjhaR7v25EozA5QcM-ny-h~as2Qzmn-OdTjc4ON4lGwtNYCTzRUIynUbfDzyK0rSBz2bhDtCP9~TaciUSw131NmAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
                  alt=""
                />{" "}
                {item.ratting}
              </h2>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Header;
