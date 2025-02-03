import { useState } from "react";

export default function ConfirmGiftModal({ isOpen, onClose }) {
  const [nama, setNama] = useState("");
  const [nominal, setNominal] = useState("");
  const [pesan, setPesan] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");

  const generateWhatsAppLink = () => {
    const phoneNumber = "62895338540487";
    const baseUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    let text = `Hai,%20saya%20*${encodeURIComponent(
      nama
    )}*%20ingin%20konfirmasi%0A`;

    if (konfirmasi === "Kirim Hadiah") {
      text += `Memberikan%20Amplop%20Digital%0ABerupa%20Kirim%20Hadiah%20${encodeURIComponent(
        nominal
      )}%0A%0A_${encodeURIComponent(pesan)}_.%0ATerima%20kasih.`;
    } else {
      text += `Memberikan%20${encodeURIComponent(
        konfirmasi
      )}%0ABerupa%20Transfer%20Uang%20${encodeURIComponent(
        nominal
      )}%0A%0A_${encodeURIComponent(pesan)}_.%0ATerima%20kasih.`;
    }

    return `${baseUrl}&text=${text}`;
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-[999] ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-[#F6F6F6] p-12 absolute shadow-lg transform transition-all duration-500 ease-in-out -right-full confirmModal ${
          isOpen ? "right-0" : "-right-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-[30px] text-[#585858] text-center">
          Konfirmasi Hadiah
        </h2>
        <p className="font-arial text-[12px] text-center">
          Konfirmasi kiriman anda untuk memudahkan <br />
          mempelai dalam melakukan pendataan
        </p>
        <div className="p-4 border-slate-300 border rounded-[12px] mt-8 flex flex-col gap-2">
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Nama"
            className="font-roboto text-[12px] p-2 text-[#333333]"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="text"
            name="nominal"
            id="nominal"
            placeholder="Nominal/Hadiah"
            className="font-roboto text-[12px] p-2"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
          <textarea
            name="pesan"
            id="pesan"
            className="resize-none text-[12px] p-2 font-roboto"
            placeholder="Pesan"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
          ></textarea>
          <div className="flex flex-col">
            <p className="font-roboto text-[12px]">Konfirmasi</p>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="confirm"
                id="confirm-transfer"
                value="Transfer Uang"
                checked={konfirmasi === "Transfer Uang"}
                onChange={(e) => setKonfirmasi(e.target.value)}
              />
              <label
                htmlFor="confirm-transfer"
                className="text-[12px] font-roboto"
              >
                Transfer Uang
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="confirm"
                id="confirm-hadiah"
                value="Kirim Hadiah"
                checked={konfirmasi === "Kirim Hadiah"}
                onChange={(e) => setKonfirmasi(e.target.value)}
              />
              <label
                htmlFor="confirm-hadiah"
                className="text-[12px] font-roboto"
              >
                Kirim Hadiah
              </label>
            </div>
            <a
              href={generateWhatsAppLink()}
              className="bg-[#6F8C70] text-[12px] font-roboto text-white text-center rounded-full mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Confirmation
            </a>
          </div>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4">
          <i className="ri-close-line text-2xl"></i>
        </button>
      </div>
    </div>
  );
}
