import { Subject } from '../types/quiz';

import { chapter1Questions } from './redes/chapter1Questions';
import { chapter2Questions } from './redes/chapter2Questions';
import { chapter3Questions } from './redes/chapter3Questions';
import { chapter4Questions } from './redes/chapter4Questions';
import { chapter5Questions } from './redes/chapter5Questions';
import { chapter6Questions } from './redes/chapter6Questions';
import { chapter8Questions } from './redes/chapter8Questions';
import { OperativeSystems } from './movil/OperativeSystems';
import { GenerationEvolution } from './movil/GenerationEvolution';

export const subjects: Subject[] = [
  {
    id: 'Criptogarfia',
    title: 'Criptografía',
    description: 'Cuestionarios de criptografía',
    icon: 'Key',
    color: 'red',
    categories: [

    ]
  },
  {
    id: 'Dispositivos Moviles',
    title: 'Dispositivos Móviles',
    description: 'Cuestionarios sobre dispositivos móviles',
    icon: 'Smartphone',
    color: 'green',
    categories: [
      OperativeSystems,
      GenerationEvolution,
    ]
  },
  {
    id: 'redes',
    title: 'Redes y Comunicaciones',
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
