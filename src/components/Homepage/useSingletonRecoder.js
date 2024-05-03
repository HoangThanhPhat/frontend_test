import { useState, useEffect } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

let recorderInstance = null;

export const useSingletonRecorder = (handleStop) => {
    const [recorder, setRecorder] = useState(recorderInstance);

    useEffect(() => {
        if (!recorderInstance) {
            recorderInstance = (
                <ReactMediaRecorder
                    audio
                    onStop={handleStop}
                    render={({ status, startRecording, stopRecording }) => (
                        <div className="recorder-controls">
                            <button onMouseDown={startRecording} onMouseUp={stopRecording}>
                                Start/Stop Recording
                            </button>
                            <p>Status: {status}</p>
                        </div>
                    )}
                />
            );
            setRecorder(recorderInstance);
        }
    }, [handleStop]);

    return recorder;
};
