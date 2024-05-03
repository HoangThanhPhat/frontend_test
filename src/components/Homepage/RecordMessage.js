import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

function RecordMessage({ handleStop }) {
  return (
    <ReactMediaRecorder 
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording }) => (
        <div className="mt-2 row">
          <button onMouseDown={startRecording} onMouseUp={stopRecording} className="bg-white p-3 rounded-circle">
            <RecordIcon 
              classText={
                status === "recording" 
                ? "animate-pulse text-danger" 
                : "custom-text-sky-500"
              } 
            />
          </button>
          <p className="mt-2 text-white font-weight-light">
            {status}
          </p>
        </div>
      )}
    />
  );
}

export default RecordMessage;
