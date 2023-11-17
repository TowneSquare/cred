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
            className="fixed top-20 bottom-px left-px right-px flex justify-center border border-gray-light-1 rounded-md"
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, -2.263) 1%, rgba(255, 255, 255, 0.32) 100%), linear-gradient(91.58deg, rgba(255, 255, 255, -1.86) 0%, rgba(255, 255, 255, 0) 38.54%), black",
            }}
          >
            <ActivityList />
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityModal;
