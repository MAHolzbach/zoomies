"use client";

import { homeCards } from "@/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

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
    </section>
  );
};

export default MeetingTypeList;
