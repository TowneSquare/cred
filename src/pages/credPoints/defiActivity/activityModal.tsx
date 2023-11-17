import { toggleActivityList } from "../../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import ActivityList from "./activityList";

const ActivityModal = () => {
  const isOpen = useAppSelector(state => state.dialogState.bActivityList);
  const dispatch = useAppDispatch();

  return (
    <>
      {isOpen && (
        <div
          className="absolute inset-0 z-50"
          onClick={(e) => dispatch(toggleActivityList(false))}
        >
          <div
            className="container fixed top-20 bottom-px left-px right-px flex justify-center border border-gray-light-1 rounded-md"
          >
            <ActivityList />
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityModal;
