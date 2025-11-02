import { Subject } from '../types/quiz';
import { odontoPart1 } from './odontoPart1';
import { odontoPart2 } from './odontoPart2';
import { odontoPart3 } from './odontoPart3';
import { odontoPart4 } from './odontoPart4';
import { odontoTotal } from './odontoTotal';
import { chapter1Questions } from './chapter1Questions';
import { chapter2Questions } from './chapter2Questions';
import { chapter3Questions } from './chapter3Questions';
import { chapter4Questions } from './chapter4Questions';
import { chapter5Questions } from './chapter5Questions';
import { chapter6Questions } from './chapter6Questions';
import { chapter8Questions } from './chapter8Questions';

export const subjects: Subject[] = [
  {
    id: 'odontologia',
    title: 'Odontología',
    description: 'Cuestionarios de metodología y conceptos odontológicos',
    icon: 'Microscope',
    color: 'blue',
    categories: [
      odontoTotal,
      odontoPart1,
      odontoPart2,
      odontoPart3,
      odontoPart4
    ]
  },
  {
    id: 'redes',
    title: 'Redes de Computadoras',
    description: 'Cuestionarios sobre conceptos de redes y networking',
    icon: 'Network',
    color: 'indigo',
    categories: [
      chapter1Questions,
      chapter2Questions,
      chapter3Questions,
      chapter4Questions,
      chapter5Questions,
      chapter6Questions,
      chapter8Questions
    ]
  }
];
