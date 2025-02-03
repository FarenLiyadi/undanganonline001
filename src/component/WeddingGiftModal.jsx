export default function WeddingGiftModal({ isOpen, onClose }) {
  const accountNumber = "7685444020";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-[999]  ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-[#F6F6F6] p-12 absolute shadow-lg transform transition-transform duration-500 ease-in-out -right-full ${
          isOpen ? "right-0" : "-right-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className=" mb-4 uppercase text-[50px] text-[#585858] tracking-tighter">
          Wedding Gift
        </h2>
        <p className="font-arial text-[15px] text-center">
          <em>
            Silahkan transfer hadiah melalui <br />
            nomor rekening maupun dompet digital berikut
          </em>
        </p>
        <div className="p-4 border-slate-300 bg-white border rounded-[12px] mt-8">
          <img src="/img/bank-logo.png " className="w-[100px] ml-auto" />
          <hr className="h-px bg-slate-300  my-6 border-t border-slate-300 " />
          <div className="flex flex-col mt-20">
            <button
              onClick={handleCopy}
              className="text-2xl flex items-center gap-2 justify-end"
            >
              <i className="ri-file-copy-line leading-none"></i>
              <p className="text-[15px] font-barlow tracking-[.3em] mb-0">
                {accountNumber}
              </p>
            </button>
            <p className="text-[12px] font-arial font-bold text-right">
              Faren Liyadi
            </p>
          </div>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4">
          <i className="ri-close-line text-2xl"></i>
        </button>
      </div>
    </div>
  );
}
