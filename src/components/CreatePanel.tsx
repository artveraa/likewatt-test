import { useState } from "react";
import { Panel, createTilt } from "../utils/definitions";

interface CreatePanelProps {
  addPanel: (panel: Panel) => void;
}

const CreatePanel = ({ addPanel }: CreatePanelProps) => {
  const [panel, setPanel] = useState<Omit<Panel, "id">>({
    model: "",
    capacity: 0,
    tilt: createTilt(0),
    isActive: false,
  });

  // Gestion des changements dans les inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPanel((prevPanel) => ({
      ...prevPanel,
      [name]: name === "tilt" ? createTilt(Number(value)) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPanel: Panel = { ...panel, id: Date.now() };
    addPanel(newPanel);
    setPanel({
      model: "",
      capacity: 0,
      tilt: createTilt(0),
      isActive: false,
    });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md ">
      <h2 className="text-xl font-semibold text-center pb-4">
        🌞 Ajouter un panneau solaire
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Modèle */}
        <div className="flex flex-col">
          <label htmlFor="model" className="font-medium">
            Modèle
          </label>
          <input
            type="text"
            name="model"
            value={panel.model}
            onChange={handleChange}
            className="bg-white border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-300"
            placeholder="Ex: SOLAR-X"
          />
        </div>

        {/* Capacité */}
        <div className="flex flex-col">
          <label htmlFor="capacity" className="font-medium">
            Capacité (Wc)
          </label>
          <input
            type="number"
            name="capacity"
            value={panel.capacity}
            onChange={handleChange}
            className="bg-white border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-300"
            min={1}
          />
        </div>

        {/* Inclinaison */}
        <div className="flex flex-col">
          <label htmlFor="tilt" className="font-medium">
            Inclinaison (°)
          </label>
          <input
            type="number"
            name="tilt"
            value={panel.tilt}
            onChange={handleChange}
            className={`bg-white border rounded-lg p-2 focus:ring-2 `}
            min={1}
            max={180}
          />
        </div>

        {/* Checkbox Actif */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isActive"
            id="isActive"
            checked={panel.isActive}
            onChange={handleChange}
            className="w-5 h-5 text-blue-500 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300"
          />
          <label htmlFor="isActive" className="text-gray-700 font-medium">
            Panneau actif
          </label>
        </div>

        {/* Bouton Ajouter */}
        <button
          type="submit"
          className={`bg-main text-white hover:bg-dark rounded-lg p-3 font-semibold transition-all `}
        >
          Ajouter le panneau
        </button>
      </form>
    </div>
  );
};

export default CreatePanel;
