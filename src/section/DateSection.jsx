import CountdownTimer from "../component/Countdown";

export default function DateSection() {
  // Contoh countdown ke tanggal 31 Desember 2024 pukul 23:59:59
  const targetDate = new Date("2025-05-31T23:59:59").getTime();

  return (
    <section className="bg-[#1e1e1e]  text-white py-14 relative overflow-hidden">
      <div className="bg-date"></div>
      <div className="absolute top-0 left-0 bg-black/75 w-full h-full z-[1]"></div>
      <div className="container relative z-[2]">
        <h2 className="font-meath text-[35px] md:text-[45px] text-center ">
          Save The Date
        </h2>
        <CountdownTimer targetDate={targetDate} />
        <div className="flex flex-col md:grid md:grid-cols-2 mt-8">
          <div className="px-4 py-10 flex flex-col items-center rounded-xl border border-white/50 text-center gap-4">
            <h3 className="font-ballet text-[35px] md:text-[40px]">
              Pemberkatan Nikah
            </h3>
            <img src="/img/8.jpg" className="w-full md:w-3/5 mx-auto" />
            <p className="font-bold font-roboto text-[15px] md:text-[25px] uppercase">
              SABTU, 23 03 2024
            </p>
            <hr className="h-px w-full border-t border-white" />
            <p className="font-roboto text-[10px] md:text-[15px] uppercase">
              PUKUL : 11.00 WITA - SELESAI
            </p>
            <p className="font-roboto text-[11px] md:text-[15px] uppercase font-semibold">
              ARTHAMA HOTEL MAKASSAR
            </p>
            <p className="font-roboto text-[10px] md:text-[15px] uppercase leading-none">
              Jalan Haji Bau No.5 Mangkura, Losari, Kec. Ujung Pandang, Kota
              Makassar, Sulawesi Selatan
            </p>
            <a
              href="https://maps.app.goo.gl/Lz9QojBusGTzyQv77"
              className="flex items-center gap-3 px-6 md:py-2 bg-[#1e1e1e] border border-white/50 rounded-full text-[11px] md:text-sm font-roboto hover:text-[#1e1e1e] hover:bg-white transition-all duration-300 ease"
              target="_blank"
            >
              <i className="ri-map-pin-2-fill text-sm md:text-xl"></i>Map
              Location
            </a>
          </div>
          <div className="px-4 py-10 flex flex-col items-center rounded-xl border border-white/50 text-center gap-4">
            <h3 className="font-ballet text-[35px] md:text-[40px]">Resepsi</h3>
            <img src="/img/9.jpg" className="w-full md:w-3/5 mx-auto" />
            <p className="font-bold font-roboto text-[15px] md:text-[25px] uppercase">
              SABTU, 23 03 2024
            </p>
            <hr className="h-px w-full border-t border-white" />
            <p className="font-roboto text-[10px] md:text-[15px] uppercase">
              PUKUL : 19.00 WITA - SELESAI
            </p>
            <p className="font-roboto text-[11px] md:text-[15px] uppercase font-semibold">
              ARTHAMA HOTEL MAKASSAR
            </p>
            <p className="font-roboto text-[10px] md:text-[15px] uppercase leading-none">
              Jalan Haji Bau No.5 Mangkura, Losari, Kec. Ujung Pandang, Kota
              Makassar, Sulawesi Selatan
            </p>
            <a
              href="https://maps.app.goo.gl/Lz9QojBusGTzyQv77"
              className="flex items-center gap-3 px-6 md:py-2 bg-[#1e1e1e] border border-white/50 rounded-full text-[11px] md:text-sm font-roboto hover:text-[#1e1e1e] hover:bg-white transition-all duration-300 ease"
              target="_blank"
            >
              <i className="ri-map-pin-2-fill text-sm md:text-xl"></i>Map
              Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
