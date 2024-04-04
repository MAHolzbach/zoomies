import MeetingTypeList from "@/components/MeetingTypeList";
import TimeDisplay from "@/components/TimeDisplay";

const Home = () => {
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="w-full rounded=[20px] bg-hero bg-cover h-[300px] ">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at 12:30PM
          </h2>
          <div className="flex flex-col gap-2">
            <TimeDisplay />
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
