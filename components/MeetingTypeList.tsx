"use client";

import { homeCards } from "@/constants";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { useToast } from "./ui/use-toast";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const [values, setValues] = useState({ dateTime: new Date(), description: "", link: "" });
  const [callDetails, setCallDetails] = useState<Call>();

  const { toast } = useToast();

  const { user } = useUser();
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    if (!user || !client) return;

    try {
      if (!values.dateTime) {
        toast({
          variant: "destructive",
          title: "Please select a date and time.",
        });

        return;
      }

      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create a new call");

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      call.getOrCreate({ data: { starts_at: startsAt, custom: { description } } });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);

        toast({
          title: "New meeting created!",
          description: `${values.description} at ${values.dateTime}`,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to create the following meeting:",
        description: `${values.description} at ${values.dateTime}`,
      });
      console.log(error);
    }
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {homeCards.map((card) => (
        <HomeCard
          key={card.header}
          imgUrl={card.imgUrl}
          header={card.header}
          subHeader={card.subHeader}
          bgColor={card.bgColor}
          clickHandler={
            card.clickHandlerType === "state"
              ? () => setMeetingState(card.meetingState)
              : () => router.push("/recordings")
          }
        />
      ))}

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
