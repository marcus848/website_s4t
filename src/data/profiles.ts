
import { Profile } from '../models/Profile';

export const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Sofia',
    age: 28,
    bio: 'Adoro viajar e experimentar novas culinárias. Vamos conversar sobre seus lugares favoritos?',
    distance: 3,
    photos: [
      'https://source.unsplash.com/random/600x800?woman,portrait',
      'https://source.unsplash.com/random/600x800?travel,woman'
    ],
    interests: ['Viagem', 'Gastronomia', 'Fotografia']
  },
  {
    id: '2',
    name: 'Lucas',
    age: 31,
    bio: 'Músico nas horas vagas, apaixonado por café e caminhadas ao ar livre.',
    distance: 5,
    photos: [
      'https://source.unsplash.com/random/600x800?man,portrait',
      'https://source.unsplash.com/random/600x800?guitar,man'
    ],
    interests: ['Música', 'Café', 'Natureza']
  },
  {
    id: '3',
    name: 'Isabela',
    age: 26,
    bio: 'Designer, criativa e sempre buscando inspiração. Amo animais e tenho dois gatos.',
    distance: 7,
    photos: [
      'https://source.unsplash.com/random/600x800?woman,smiling',
      'https://source.unsplash.com/random/600x800?cat,pets'
    ],
    interests: ['Design', 'Arte', 'Animais']
  },
  {
    id: '4',
    name: 'Mateus',
    age: 29,
    bio: 'Engenheiro e entusiasta de tecnologia. Nas horas vagas gosto de cozinhar e assistir séries.',
    distance: 2,
    photos: [
      'https://source.unsplash.com/random/600x800?man,casual',
      'https://source.unsplash.com/random/600x800?cooking,chef'
    ],
    interests: ['Tecnologia', 'Culinária', 'Séries']
  },
  {
    id: '5',
    name: 'Amanda',
    age: 27,
    bio: 'Professora de yoga e amante da natureza. Buscando conexões autênticas.',
    distance: 6,
    photos: [
      'https://source.unsplash.com/random/600x800?woman,yoga',
      'https://source.unsplash.com/random/600x800?meditation,nature'
    ],
    interests: ['Yoga', 'Meditação', 'Sustentabilidade']
  }
];
