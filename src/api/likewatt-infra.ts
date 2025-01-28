import { Panel } from "../utils/definitions";

interface PanelApiResponse {
  message: string;
  data: Panel[];
}

export const getPanels = async (): Promise<PanelApiResponse> => {
  const response = await fetch(
    "https://apitest.likewatt-infra.com/entry-test/2"
  );
  const data: PanelApiResponse = await response.json();
  return data;
};
