import { ArtLocation } from '../types/artHistory';
import { ajantaEllora } from './locations/ajantaEllora';
import { mumbai } from './locations/mumbai';
import { delhi } from './locations/delhi';
import { jaipur } from './locations/jaipur';
import { varanasi } from './locations/varanasi';
import { kolkata } from './locations/kolkata';
import { santiniketan } from './locations/santiniketan';
import { khajuraho } from './locations/khajuraho';
import { hampi } from './locations/hampi';
import { chennai } from './locations/chennai';
import { thanjavur } from './locations/thanjavur';
import { kochi } from './locations/kochi';
import { hyderabad } from './locations/hyderabad';
import { kashmir } from './locations/kashmir';
import { odisha } from './locations/odisha';
import { gujarat } from './locations/gujarat';
import { bihar } from './locations/bihar';
import { northeastIndia } from './locations/northeast';

export const ART_LOCATIONS: ArtLocation[] = [
  ajantaEllora,
  mumbai,
  delhi,
  jaipur,
  varanasi,
  kolkata,
  santiniketan,
  khajuraho,
  hampi,
  chennai,
  thanjavur,
  kochi,
  hyderabad,
  kashmir,
  odisha,
  gujarat,
  bihar,
  northeastIndia
];

export const ART_LOCATIONS_MAP: Record<string, ArtLocation> = ART_LOCATIONS.reduce((acc, loc) => {
  acc[loc.id] = loc;
  return acc;
}, {} as Record<string, ArtLocation>);
