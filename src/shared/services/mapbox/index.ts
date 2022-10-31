import axios from 'axios';
import { StringSchema } from 'yup';

export const MapBox = axios.create({
  baseURL: 'https://api.mapbox.com/',
});

interface ICoordsByAdress {
  features: {
    place_name: string
    geometry: { coordinates: [] }
  }[]
}

export const getCoordsByAdress = async (adress: string) => {
  const { data } = await MapBox.get(`geocoding/v5/mapbox.places/${adress}.json?access_token=pk.eyJ1Ijoiam9zZXRlc3Rlam9zZSIsImEiOiJjbDhuMzd0NWYxNmtkM3VsNTY4bmVrZjh1In0.pOERz7gSUmusaFHhhMMAwA`);
  const { features } = data as ICoordsByAdress;
  let match = null;

  const pattern = `${adress}(?=[\\s]*[\\-]*)`;
  const regex = new RegExp(pattern, 'is');

  features.forEach((result) => {
    const local = result.place_name.split(',');
    console.log(local);
    if (local[0].trim().match(regex)) {
      match = {
        local: result.place_name,
        coords: result.geometry.coordinates,
      };
    }
    console.log(local[0].trim().match(regex));
  });

  if (match) { return match; }
  return null;
};
