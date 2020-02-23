import {
  FilmsBackground,
  CharactersBackground,
  PlanetsBackground,
  StarshipsBackground,
  SpeciesBackground,
} from 'assets/images';

export default [
  {
    id: '67eb4876-1805-4cf7-b48c-d873a8c1cf30',
    name: 'People',
    apiName: 'people',
    image: CharactersBackground,
    listProperties: ['birth_year', 'gender'],
    detailProperties: ['birth_year', 'gender', 'eye_color', 'height', 'mass', 'skin_color'],
  },
  {
    id: 'e54fe588-c7c5-4c70-913e-231d6370d35c',
    name: 'Planets',
    apiName: 'planets',
    image: PlanetsBackground,
    listProperties: ['director'],
    detailProperties: ['director', 'episode_id', 'opening_crawl', 'producer', 'title'],
  },
  {
    id: '6a40c895-54a1-4482-a4ff-78b9cecac9a1',
    name: 'Films',
    apiName: 'films',
    image: FilmsBackground,
    listProperties: [],
    detailProperties: [],
  },
  {
    id: 'a5763b4f-bddd-42bf-9108-cf937e88f698',
    name: 'Species',
    apiName: 'species',
    image: SpeciesBackground,
    listProperties: [],
    detailProperties: [],
  },
  {
    id: 'd2da2705-59da-44dd-bf48-1334547f5f92',
    name: 'Starships',
    apiName: 'starships',
    image: StarshipsBackground,
    listProperties: [],
    detailProperties: [],
  },
];
