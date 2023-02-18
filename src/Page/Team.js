import React from "react";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Team = () => {
  return (
    <>
      <div className="container mx-auto ">
        <h1 class="text-3xl font-bold flex justify-center mt-10 mb-10">
          Team Awesome
        </h1>
        <div className="mt-20 grid grid-cols-3 justify-items-center bg-[#F8F8F8] h-full">
          <div className="bg-[#FDDD3A] w-full h-full">
            <div className="flex justify-center mt-[-50px] h-[250px]">
              <img src={image1} className=" object-cover " />
            </div>

            <div className=" bg-[#F8F8F8] text-center pt-5  ">
              <p>ROBERT MCGRATH</p>
              <p>Founder</p>
              <div className="flex justify-center py-4">
                <hr class="border-2   border-yellow-500 w-10" />
              </div>

              <div className="flex justify-center gap-6 pb-4">
                <div className="border-2 p-2 rounded-full">
                  <FaFacebookF className="rounded-full bg-[#ffff] h-5 w-5 " />
                </div>
                <div className="border-2 p-2 rounded-full">
                  <FaTwitter className="rounded-full bg-[#ffff] h-5 w-5" />
                </div>
                <div className="border-2 p-2 rounded-full">
                  <FaPinterestP className="rounded-full bg-[#ffff] h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FDDD3A] w-full h-full">
            <div className="flex justify-center mt-[-50px] h-[250px]">
              <img src={image2} className=" object-cover " />
            </div>

            <div className=" bg-[#F8F8F8] text-center pt-5  ">
              <p>MICHELLE MAGER</p>
              <p>Marketing Head</p>
              <div className="flex justify-center py-4">
                <hr class="border-2   border-yellow-500 w-10" />
              </div>

              <div className="flex justify-center gap-6 pb-4">
                <div className="border-2 p-2 rounded-full">
                  <FaFacebookF className="rounded-full bg-[#ffff] h-5 w-5 " />
                </div>
                <div className="border-2 p-2 rounded-full">
                  <FaTwitter className="rounded-full bg-[#ffff] h-5 w-5" />
                </div>
                <div className="border-2 p-2 rounded-full">
                  <FaPinterestP className="rounded-full bg-[#ffff] h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FDDD3A] w-full h-full">
            <div className="flex justify-center mt-[-50px] h-[250px]">
              <img src={image3} className=" object-cover " />
            </div>

            <div className=" bg-[#F8F8F8] text-center pt-5  ">
              <p>PAUL CARTER</p>
              <p>Support Manager</p>
              <div className="flex justify-center py-4">
                <hr class="border-2   border-yellow-500 w-10" />
              </div>

              <div className="flex justify-center gap-6 pb-4">
                <div className="border-2 p-2 rounded-full">
                  <FaFacebookF className="rounded-full bg-[#ffff] h-5 w-5 " />
                </div>
                <div className="border-2 p-2 rounded-full">
                  <FaTwitter className="rounded-full bg-[#ffff] h-5 w-5" />
                </div>
                <div className="border-2 p-2 rounded-full">
                  <FaPinterestP className="rounded-full bg-[#ffff] h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
