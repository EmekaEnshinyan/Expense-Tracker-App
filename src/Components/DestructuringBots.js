const dBots = ["1", "2", "3"];
const [cleaner, driver, cooker] = dBots;

const cleanTasks = {
  one: "floor",
  two: "kitchen",
  three: "windows",
};
function doTask(one, two, three) {
  return "First clean " + one + ", then " + two + ", then " + three;
}

const DestructuringBots = ({ one, two, three }) => {
  return (
    <div>
      Destructuring: First clean {cleanTasks.one}, then {cleanTasks.two}, then{" "}
      {cleanTasks.three}
    </div>
  );
};

export default DestructuringBots;
