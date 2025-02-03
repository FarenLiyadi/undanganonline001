import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

export default function InvitationOverlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [qrData, setQrData] = useState("");

  // console.log(tamu);
  function showQr(id) {
    setQrData(id);
    setShowModal(true);
  }
  const tamu = [
    {
      id: "9dcd100a-b0f6-4efe-96a8-e99d000338de",
      user_id: "d68a47a6-c1da-11ef-82ed-00e04c360546",
      nomor_undian: "20101005",
      grup_tamu: "keluarga",
      nama: "nora",
      alamat: null,
      alias_tamu: "winda",
      meja: "mawar",
      pax: 7,
      kategori: "Pria",
      note: "-",
      gift: 0,
      hadir: 1,
      status: 0,
      is_skip: 0,
      is_deleted: 0,
      is_locked: 0,
      created_by: "3a85fdd6-8879-11ef-b0fc-00e04c360546",
      updated_by: "3be3401c-8879-11ef-bac9-00e04c360546",
      deleted_by: null,
      deleted_at: null,
      created_at: "2024-12-24T11:43:49.000000Z",
      updated_at: "2025-01-02T19:14:05.000000Z",
    },
  ];
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const recipientName = params.get("to") || "Tamu Undangan";

    const audioFile = new Audio(
      "/music/X2Download.com-Nothings-Gonna-Change-My-Love-For-You-Music-Travel-Love-ft.-Bugoy-Drilon-128-kbps.mp3  "
    );
    setAudio(audioFile);

    document.getElementById("recipientName").innerText = recipientName;
  }, []);

  const handleOpenInvitation = () => {
    setIsSlidingUp(true);
    showQr(tamu[0].id);

    setTimeout(() => {
      setIsOverlayVisible(false);
      audio.play();
      setIsPlaying(true);
    }, 500);
  };

  const handlePlayMusic = () => {
    audio.play();
    setIsPlaying(true);
  };

  const handleStopMusic = () => {
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div>
      {isOverlayVisible && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[100] transition-transform duration-500 ${
            isSlidingUp
              ? "transform -translate-y-full"
              : "transform translate-y-0"
          }`}
        >
          <div className="text-center text-white">
            <p className="font-arial text-lg text-[#a4a4a4]">DEAR</p>
            <h1
              id="recipientName"
              className="text-[70px] my-4 font-gardenia"
            ></h1>
            <button
              onClick={handleOpenInvitation}
              className="border border-slate-600 text-white px-6 py-1 rounded-full font-arial text-[11px]"
            >
              OPEN INVITATION
            </button>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 left-4 z-50 ">
        {isPlaying ? (
          <button
            onClick={handleStopMusic}
            className="border-4 border-[#7b7b7b] text-[#7b7b7b] p-1 rounded-full shadow-lg text-[24px] size-10 aspect-square flex items-center justify-center"
          >
            <i className="ri-play-fill"></i>
          </button>
        ) : (
          <button
            onClick={handlePlayMusic}
            className="border-4  border-[#7b7b7b] text-[#7b7b7b] p-1 rounded-full shadow-lg text-[24px] size-10 aspect-square flex items-center justify-center"
          >
            <i className="ri-pause-fill"></i>
          </button>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white mx-auto w-80 p-5 rounded shadow-lg text-center ">
            <div className="w-full flex justify-center">
              <QRCode size={150} value={qrData} />
            </div>
            <table className="w-full mt-4 uppercase font-medium text-2xl">
              <tr className=" align-top">
                <td className="text-left w-12">To</td>
                <td className="text-right w-8">:</td>
                <td className="w-72 text-start pl-2 italic">{tamu[0].nama}</td>
              </tr>
              <tr className="">
                <td className="text-left w-12">Meja</td>
                <td className="text-right w-8">:</td>
                <td className="w-72 text-start pl-2 italic">{tamu[0].meja}</td>
              </tr>
              <tr className="">
                <td className="text-left w-12">Pax</td>
                <td className="text-right w-8">:</td>
                <td className="w-72 text-start pl-2 italic">{tamu[0].pax}</td>
              </tr>
              <tr className="">
                <td className="text-left w-12">Pihak</td>
                <td className="text-right w-8">:</td>
                <td className="w-72 text-start pl-2 italic">
                  {tamu[0].kategori}
                </td>
              </tr>
            </table>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
