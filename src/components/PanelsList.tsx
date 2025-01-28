import PanelItem from "./PanelItem";
import { Panel } from "../utils/definitions";

interface PanelsListProps {
  panels: Panel[];
}

const PanelsList = ({ panels }: PanelsListProps) => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg max-h-[50vh] overflow-y-hidden shadow-md">
      <h2 className="pb-3 text-xl font-semibold">
        🔋 Liste des panneaux solaires :
      </h2>

      <div className="flex justify-start gap-6 pb-3 sticky top-0 bg-gray-100 z-10">
        <div className="flex items-center gap-2">
          <span className="block bg-green-100 border border-green-300 w-4 h-4 rounded"></span>
          <span className="text-sm text-gray-700">Actif</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block bg-red-100 border border-red-300 w-4 h-4 rounded"></span>
          <span className="text-sm text-gray-700">Inactif</span>
        </div>
      </div>

      {panels.length > 0 ? (
        <ul className="grid gap-3 overflow-y-auto h-[85%] pr-2">
          {panels.map((panel) => (
            <PanelItem key={panel.id} {...panel} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center italic mt-5">
          Aucun panneau solaire disponible. 🌥
        </p>
      )}
    </div>
  );
};

export default PanelsList;
