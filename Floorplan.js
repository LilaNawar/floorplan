import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";

function Floorplan(props) {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} />
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
      <Bath size={"half"} />
      <Bath size={"full"} />
    </div>
  );
}
