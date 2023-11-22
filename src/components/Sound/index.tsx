import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleMusic } from "../../redux/slices/audioSlice";
export default function Sound() {
  const bgAudioRef = useRef<HTMLAudioElement>(null!);
  const selectAudioRef = useRef<HTMLAudioElement>(null!);
  const successAudioRef = useRef<HTMLAudioElement>(null!);
  const drawAudioRef = useRef<HTMLAudioElement>(null!);
  const { playAudio, selectAudioTrigger } = useSelector(
    (state: RootState) => state.audioReducer
  );
  const { winner, draw } = useSelector((state: RootState) => state.gameReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    bgAudioRef.current.volume = 0.5;
    selectAudioRef.current.volume = 1;
  }, []);
  useEffect(() => {
    if (playAudio) {
      bgAudioRef.current?.play();
    } else {
      bgAudioRef.current?.pause();
    }
  }, [playAudio]);

  useEffect(() => {
    if (playAudio) {
      if (selectAudioRef.current.paused) {
        selectAudioRef.current.play();
      } else {
        selectAudioRef.current.currentTime = 0;
      }
    }
  }, [selectAudioTrigger]);
  useEffect(() => {
    if (playAudio && winner.player) {
      if (successAudioRef.current.paused) {
        successAudioRef.current.play();
      } else {
        successAudioRef.current.currentTime = 0;
      }
    }
  }, [winner]);
  useEffect(() => {
    if (playAudio && draw) {
      if (drawAudioRef.current.paused) {
        drawAudioRef.current.play();
      } else {
        drawAudioRef.current.currentTime = 0;
      }
    }
  }, [draw]);
  const toggleSound = () => {
    dispatch(toggleMusic());
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
        }}
        onClick={toggleSound}
      >
        <div style={{}}>
          <svg
            style={{
              cursor: "pointer",
            }}
            fill="white"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!playAudio ? (
              <path
                d="M1129.433 113v1694.15H903.547l-451.774-451.773V564.773L903.547 113h225.886ZM338.83 564.773v790.604H169.415c-92.806 0-167.9-74.166-169.392-166.609L0 1185.962V734.188c0-92.805 74.166-167.9 166.608-169.392l2.807-.023H338.83ZM1789.951 635 1920 764.926 1724.988 959.94 1920 1154.95 1789.951 1285l-194.89-195.012L1400.05 1285 1270 1154.951l195.012-195.012L1270 764.926 1400.049 635l195.012 195.012L1789.951 635Z"
                fillRule="evenodd"
              />
            ) : (
              <path
                d="M1129.432 113v1694.148H903.545l-451.772-451.773V564.773L903.545 113h225.887Zm542.545 248.057C1832.017 521.097 1920 733.882 1920 960.107c0 226.226-87.983 438.898-248.023 598.938l-79.851-79.85c138.694-138.582 214.93-323.018 214.93-519.087 0-196.183-76.236-380.506-214.93-519.2ZM338.83 564.773v790.602H169.415C75.672 1355.375 0 1279.703 0 1185.96V734.187c0-93.742 75.672-169.414 169.415-169.414H338.83Zm1093.922 36.085c95.776 97.018 148.407 224.644 148.407 359.16 0 134.628-52.631 262.253-148.407 359.272l-80.303-79.174c74.656-75.897 115.767-175.4 115.767-280.099 0-104.585-41.111-204.088-115.767-279.986Z"
                fillRule="evenodd"
              />
            )}
          </svg>
        </div>
      </div>
      <audio loop ref={bgAudioRef} src="/sounds/bg-music.mp3"></audio>
      <audio ref={selectAudioRef} src="/sounds/select.mp3"></audio>
      <audio ref={successAudioRef} src="/sounds/success.mp3"></audio>
      <audio ref={drawAudioRef} src="/sounds/draw.mp3"></audio>
    </>
  );
}
