import { ErrorIcon, AddFileIcon, ReduceFileIcon, UnknownFileIcon, CloseCircleIcon } from '../components/icons';

export const ActivityConfigs = [
  {
    type: 'unknown',
    icon: UnknownFileIcon,
    color: '#9fb8ad',
    fill: '#c5d7bd',
  },
  {
    type: 'expired',
    icon: ErrorIcon,
    color: '#FEA4A6',
    fill: '#FFE1E2',
  },
  {
    type: 'added',
    icon: AddFileIcon,
    color: '#65E3A9',
    fill: '#DDFFF0',
  },
  {
    type: 'closed',
    icon: CloseCircleIcon,
    color: '#FFCB92',
    fill: '#FFF7E3',
  },
  {
    type: 'drafted',
    icon: ReduceFileIcon,
    color: '#F17C3E',
    fill: '#FFD2AE',
  },
  {
    type: 'unknown',
    icon: UnknownFileIcon,
    color: '#9fb8ad',
    fill: '#c5d7bd',
  },
];
