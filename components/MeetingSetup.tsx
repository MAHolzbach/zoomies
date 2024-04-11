import { DeviceSettings, VideoPreview, useCall } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const MeetingSetup = () => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("useCall must be used within a StreamCall component.");
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">
        <VideoPreview />
        <div className="flex h-16 items-center justify-center gap-3">
          <label htmlFor="cameraCheckbox" className="flex items-center justify-center gap-2 font-mediun">
            <input
              type="checkbox"
              name="cameraCheckbox"
              id="cameraCheckbox"
              checked={isMicCamToggledOn}
              onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
            />
            Join with mic and camera off.
          </label>
          <DeviceSettings />
        </div>
      </h1>
    </div>
  );
};

export default MeetingSetup;
