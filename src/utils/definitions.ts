type Tilt = number & { readonly __brand: "Tilt" };

export const createTilt = (value: number): Tilt => {
  if (value < 0 || value > 180) {
    throw new Error("Tilt must be between 0 and 180");
  }
  return value as Tilt;
};

export interface Panel {
  id: number;
  isActive: boolean;
  tilt: Tilt;
  capacity: number;
  model: string;
}

export interface WeatherType {
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface WeatherResponse {
  city: {
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
  };
  list: WeatherType[];
}
