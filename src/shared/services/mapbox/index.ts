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

export const getCoordsByAdress = async (adress: string, city: string) => {
  try {
    if (!MAPBOX_KEY) { throw new Error('MapBox acess token is undefined'); }

    const { data } = await MapBox
      .get(`geocoding/v5/mapbox.places/${adress}
      .json?access_token=${MAPBOX_KEY}`);
    const { features } = data as IGeocodingResult;
    const pattern = `^${adress}.*${city}`;
    const regex = new RegExp(pattern, 'is');
    let match = null;

    features.forEach((result) => {
      const local = result.place_name;
      console.log(local);

      const localMatch = local.trim().match(regex);

      if (localMatch) {
        match = {
          local: result.place_name,
          coords: result.geometry.coordinates,
        };
      }

      console.log(localMatch);
    });

    return match;
  } catch (e) {
    console.error(e);
  }
  return null;
};
