import * as React from "react";
import { useState } from "react";
import { AudioVisualizer, LiveAudioVisualizer } from "react-audio-visualize";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function VoiceRecorderWithVisualizer() {
  const [blob, setBlob] = useState(null);
  const recorder = useAudioRecorder();

  const downloadAudio = () => {
    if (blob) {
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      // Create an invisible download link
      const link = document.createElement("a");
      link.href = url;
      link.download = "recorded-audio.wav"; // Set the default file name
      // Programmatically click the link to trigger the download
      link.click();
      // Optional: Revoke the URL after download
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={setBlob}
        recorderControls={recorder}
      />

      {recorder.mediaRecorder && (
        <LiveAudioVisualizer
          mediaRecorder={recorder.mediaRecorder}
          width={200}
          height={75}
        />
      )}

      {blob && (
        <AudioVisualizer
          blob={blob}
          width={500}
          height={75}
          barWidth={1}
          gap={0}
          barColor={"#f76565"}
        />
      )}

      {blob && (
        <AudioVisualizer
          blob={blob}
          width={500}
          height={75}
          barWidth={4}
          gap={4}
          barColor={"lightblue"}
        />
      )}
      {blob && <button onClick={downloadAudio}>Download Audio</button>}
    </div>
  );
}
