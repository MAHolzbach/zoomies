export const sidebarLinks = [
  { imgUrl: "icons/Home.svg", route: "/", label: "Home" },
  { imgUrl: "icons/upcoming.svg", route: "/upcoming", label: "Upcoming" },
  { imgUrl: "icons/previous.svg", route: "/previous", label: "Previous" },
  { imgUrl: "icons/Video.svg", route: "/recordings", label: "Recordings" },
  { imgUrl: "icons/add-personal.svg", route: "/personal-room", label: "Personal Room" },
];

export type THomeCard = {
  imgUrl: string;
  header: string;
  subHeader: string;
  bgColor: string;
  clickHandlerType: string;
  meetingState?: "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting";
};

export const homeCards: Array<THomeCard> = [
  {
    imgUrl: "/icons/add-meeting.svg",
    header: "New Meeting",
    subHeader: "Start a new instant meeting",
    bgColor: "bg-orange-1",
    clickHandlerType: "state",
    meetingState: "isInstantMeeting",
  },
  {
    imgUrl: "/icons/schedule.svg",
    header: "Schedule Meeting",
    subHeader: "Plan your meeting",
    bgColor: "bg-purple-1",
    clickHandlerType: "state",
    meetingState: "isScheduleMeeting",
  },
  {
    imgUrl: "/icons/recordings.svg",
    header: "View Recordings",
    subHeader: "View Meeting Recordings",
    bgColor: "bg-yellow-1",
    clickHandlerType: "redirect",
  },
  {
    imgUrl: "/icons/add-meeting.svg",
    header: "Join Meeting",
    subHeader: "via invitation link",
    bgColor: "bg-blue-1",
    clickHandlerType: "state",
    meetingState: "isJoiningMeeting",
  },
];
