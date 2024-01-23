import { useAppSelector } from "../../../../state/hooks";
import ActivityItem from "./activityItem";

const ActivityList = () => {
  const defiActivities = useAppSelector(state => state.credpointsState.defiActivities);

  return (
    <div className="w-full py-5 flex flex-col items-center">
      <p className="text-center">Last 10 DeFi activities</p>
      <div className="mt-2 w-8 h-px border border-primary-default" />
      <div className="w-full md:pr-8">
        <div className="history-board w-full h-screen md:h-[380px] flex flex-col overflow-y-auto md:px-0 px-4">
          {defiActivities.slice(0, 9).map((history, index) => (
            <ActivityItem data={history} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
