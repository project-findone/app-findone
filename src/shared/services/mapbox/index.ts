import axios from 'axios';

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
  const { data } = await MapBox.get(`geocoding/v5/mapbox.places/${adress}.json?access_token=${process.env.MAPBOX_KEY}`);
  const { features } = data as IGeocodingResult;
  let match = null;

  const pattern = `^${adress}.*${city}`;
  const regex = new RegExp(pattern, 'is');

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
};
