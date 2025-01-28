import CreatePanel from "./CreatePanel";
import PanelsList from "./PanelsList";
import Weather from "./Weather";
import { useEffect, useState } from "react";
import { getPanels } from "../api/likewatt-infra";
import { Panel } from "../utils/definitions";

const Dashboard = () => {
  const [panels, setPanels] = useState<Panel[]>([]);

  // Récupérer les panneaux solaires
  const fetchPanels = async () => {
    const panels = await getPanels();
    setPanels(panels.data);
  };

  // Ajouter un panneau solaire
  const addPanel = (panel: Panel) => {
    setPanels([...panels, panel]);
  };

  useEffect(() => {
    fetchPanels();
  }, []);

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-5">
        <PanelsList panels={panels} />
        <CreatePanel addPanel={addPanel} />
      </div>
      <Weather />
    </div>
  );
};
export default Dashboard;
