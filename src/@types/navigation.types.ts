import {IconProp} from '@fortawesome/fontawesome-svg-core';

export interface Screen {
  name: string;
  component: React.ReactNode;
}

export interface TabItem {
  name: string;
  label: string;
  component: React.ReactNode;
  icon: IconProp;
}

export type RootStackParamList = {
  // Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
};
