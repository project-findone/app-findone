import axios from 'axios';
import { MAPBOX_KEY } from 'react-native-dotenv';

export const MapBox = axios.create({
  baseURL: 'https://api.mapbox.com/',
});

type IGeocodingResult = {
  features: {
    place_name: string
    geometry: { coordinates: [] }
  }[]
};

export const getCoordsByAdress = async (adress: string, city: string): Promise<{ local: string
  geometry: { coordinates: [] } } | null> => {
  try {
    if (!MAPBOX_KEY) { throw new Error('MapBox acess token is undefined'); }

    const { data } = await MapBox
      .get(`geocoding/v5/mapbox.places/${adress}
      .json?access_token=${MAPBOX_KEY}`);
    const { features } = data as IGeocodingResult;
    const pattern = `^${adress}.*${city}.*Brazil`;
    const regex = new RegExp(pattern, 'is');
    let match = null;

    features.every((result) => {
      const local = result.place_name;
      console.log(local);

      const localMatch = local.trim().match(regex);

      if (localMatch) {
        match = {
          local: result.place_name,
          coords: result.geometry.coordinates,
        };
        return false;
      }
      return true;
    });

    return match;
  } catch (e) {
    console.error(e);
  }
  return null;
};
