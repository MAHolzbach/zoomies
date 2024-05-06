"use client";

import MeetingRoom from "@/components/MeetingRoom";
// import MeetingRoomTest from "@/components/MeetingRoomTest";
import MeetingSetup from "@/components/MeetingSetup";
import StreamLoader from "@/components/StreamLoader";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

import { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <StreamLoader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
            // <MeetingRoomTest />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
