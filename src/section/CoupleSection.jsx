import { useState, useEffect } from "react";
import Slider from "../component/Slider";

export default function CoupleSection() {
  const sliderData = ["4.jpg", "5.jpg", "6.jpg", "7.jpg"];
  const [perPage, setPerPage] = useState(5);

  const updatePerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setPerPage(10);
    } else if (width >= 768) {
      setPerPage(6);
    } else {
      setPerPage(3);
    }
  };

  useEffect(() => {
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  return (
    <section className="py-10">
      <div className="container">
        <p className="font-cormorant text-center text-[17px] md:text-base">
          The honor of your presence is requested. <br />
          At the marriage of
        </p>
        <div className="flex flex-col items-center md:grid md:grid-cols-3">
          <div className="flex flex-col items-center text-center mt-4 md:mt-0">
            <img
              src="img/couple1.jpg"
              alt="Couple Man"
              className="w-1/2 mx-auto rounded-t-full custom-shadow1"
            />
            <p className="font-gardenia text-[99px] md:text-[111px] leading-none text-shadow1">
              Hizkia
            </p>
            <p className="font-cormorant text-[30px] leading-none tracking-tighter">
              Hizkia Gerson Edianto
            </p>
            <hr className="h-px bg-[#333333] w-2/3 md:w-full my-6 " />
            <div className="flex flex-col gap-4 items-center">
              <p className="font-arial text-[12px] md:text-[13px] font-bold">
                Putra Ketiga dari
              </p>
              <p className="font-arial text-[12px] md:text-[13px]">
                Bapak Bambang Edianto & Ibu Sherly Lisapaly
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center text-center md:mt-36">
            <span className="text-[20px] md:text-[50px] font-cormorant my-10 md:my-0">
              &
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="img/couple2.jpg"
              alt="Couple Woman"
              className="w-1/2 mx-auto rounded-t-full custom-shadow1"
            />
            <p className="font-gardenia text-[99px] md:text-[111px] leading-none text-shadow1">
              Lysa
            </p>
            <p className="font-cormorant text-[30px] leading-none tracking-tighter">
              Melysa Ruru
            </p>
            <hr className="h-px bg-[#333333] w-2/3 md:w-full my-6 " />
            <div className="flex flex-col gap-4 items-center">
              <p className="font-arial text-[12px] md:text-[13px] font-bold">
                Putri Kelima dari
              </p>
              <p className="font-arial text-[12px] md:text-[13px]">
                Bapak Thamrin Y. Ruru & Ibu Mely Palit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="my-8 md:my-16 mx-2">
          <Slider sliderData={sliderData} perPage={perPage} />
        </div>
        <div className="flex  mx-auto text-center flex-col items-center">
          <p className="font-cormorant text-[45px] md:text-[60px] tracking-tighter">
            We Found A Love
          </p>
          <p className="font-cormorant text-[12px] md:text-[15px] mt-2 md:mt-8 text-[#383838] leading-tight">
            What counts in making a happy marriage is not so much how <br />
            compatible you are, but how you deal with incompatibility. <br />
            A great marriage is not when the perfect couple comes together.{" "}
            <br />
            It is when an imperfect couple learns to enjoy their differences.
          </p>
        </div>
      </div>
    </section>
  );
}
