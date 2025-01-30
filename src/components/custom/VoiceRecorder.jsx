import { useState } from "react";
import { VoiceVisualizer, useVoiceVisualizer } from "react-voice-visualizer";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mic, Pause, Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResetDialog } from "./ResetDialog";

const VoiceRecorder = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const recorderControls = useVoiceVisualizer();

  const {
    recordedBlob,
    formattedRecordingTime,
    formattedDuration,
    isPausedRecording,
    togglePauseResume,
    isRecordingInProgress,
    startRecording,
    stopRecording,
    clearCanvas,
  } = recorderControls;

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-4 flex flex-col items-center justify-center gap-4 min-h-[250px]">
        {!isStarted && (
          <>
            <div className="font-semibold">
              Tekan tombol di bawah ini untuk mulai merekam jawaban anda.
            </div>
            <div className="rounded-full shadow h-20 w-20 flex items-center justify-center">
              <Button
                variant="outlinePrimary"
                size="iconRounded"
                className="[&_svg]:size-6 border-2"
                onClick={() => {
                  startRecording();
                  setIsStarted(true);
                }}
              >
                <Mic />
              </Button>
            </div>
          </>
        )}
        {isStarted && (
          <div className="w-full flex flex-col gap-2">
            <VoiceVisualizer
              controls={recorderControls}
              isRecording={isRecordingInProgress}
              mainBarColor="blue"
              secondaryBarColor="lightblue"
              isDefaultUIShown={false}
              isControlPanelShown={false}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center h-6 w-6 border-destructive border-2 rounded-full justify-center">
                  <div className="rounded-full h-4 w-4 bg-destructive" />
                </div>
                {isRecordingInProgress
                  ? formattedRecordingTime
                  : formattedDuration}{" "}
                / 10:00
              </div>
              {isStopped && (
                <div className="rounded-full shadow h-20 w-20 flex items-center justify-center">
                  <Button
                    variant="outlinePrimary"
                    size="iconRounded"
                    className="[&_svg]:size-6 border-2"
                    onClick={() => {
                      togglePauseResume();
                      setIsPlayed((prev) => !prev);
                    }}
                  >
                    {isPlayed ? <Pause /> : <Play />}
                  </Button>
                </div>
              )}
              <div className="flex gap-2">
                {isStopped ? (
                  <ResetDialog
                    reset={() => {
                      clearCanvas();
                      setIsStarted(false);
                      setIsStopped(false);
                    }}
                  />
                ) : (
                  <>
                    <Button
                      onClick={togglePauseResume}
                      variant="outlinePrimary"
                      disabled={!isRecordingInProgress}
                    >
                      {isPausedRecording ? (
                        <>
                          <Play /> Resume
                        </>
                      ) : (
                        <>
                          <Pause /> Pause
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={() => {
                        stopRecording();
                        setIsStopped(true);
                      }}
                    >
                      <Square fill="white" /> Stop
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </Card>
      {isStarted && (
        <Button className="ml-auto" disabled={!isStopped}>
          Selanjutnya <ArrowRight />
        </Button>
      )}
    </div>
  );
};

export default VoiceRecorder;
