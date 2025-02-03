import { useState, useEffect } from 'react';

export default function InvitationOverlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isSlidingUp, setIsSlidingUp] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const recipientName = params.get('to') || 'Tamu Undangan';

    const audioFile = new Audio('/music/X2Download.com-Nothings-Gonna-Change-My-Love-For-You-Music-Travel-Love-ft.-Bugoy-Drilon-128-kbps.mp3  ');
    setAudio(audioFile);

    document.getElementById('recipientName').innerText = recipientName;
  }, []);

  const handleOpenInvitation = () => {
    setIsSlidingUp(true);

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
        <div className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[100] transition-transform duration-500 ${isSlidingUp ? 'transform -translate-y-full' : 'transform translate-y-0'}`}>
          <div className='text-center text-white'>
            <p className='font-arial text-lg text-[#a4a4a4]'>DEAR</p>
            <h1 id='recipientName' className='text-[70px] my-4 font-gardenia'></h1>
            <button onClick={handleOpenInvitation} className='border border-slate-600 text-white px-6 py-1 rounded-full font-arial text-[11px]'>
              OPEN INVITATION
            </button>
          </div>
        </div>
      )}

      <div className='fixed bottom-4 left-4 z-50 '>
        {isPlaying ? (
          <button onClick={handleStopMusic} className='border-4 border-[#7b7b7b] text-[#7b7b7b] p-1 rounded-full shadow-lg text-[24px] size-10 aspect-square flex items-center justify-center'>
            <i className='ri-play-fill'></i>
          </button>
        ) : (
          <button onClick={handlePlayMusic} className='border-4  border-[#7b7b7b] text-[#7b7b7b] p-1 rounded-full shadow-lg text-[24px] size-10 aspect-square flex items-center justify-center'>
            <i className='ri-pause-fill'></i>
          </button>
        )}
      </div>
    </div>
  );
}
