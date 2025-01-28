import { Panel } from "../utils/definitions";
import { createTilt } from "../utils/definitions";

const PanelItem = (panel: Panel) => {
  return (
    <li
      className={`grid grid-cols-3 gap-2 p-5 rounded-lg ${
        panel.isActive
          ? "bg-green-100 border border-green-300"
          : "bg-red-100 border border-red-300"
      }`}
    >
      <span className="uppercase">{`${
        panel.model ? panel.model : "Modèle sans nom"
      }`}</span>
      <span className="text-right">{`Capacité : ${
        panel.capacity ? panel.capacity : "[...]"
      } Wc`}</span>
      <span className="text-right">{`Inclinaison : ${
        createTilt(panel.tilt) ? panel.tilt : "[...]"
      }°`}</span>
    </li>
  );
};
export default PanelItem;
