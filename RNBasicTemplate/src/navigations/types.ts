import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  FirstScreen: undefined;
  SecondScreen: {title: string};
  ThirdScreen: {data: string[]} | undefined;
};

export type FirstScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'FirstScreen'
>;

export type SecondScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'SecondScreen'
>;

export type ThirdScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'ThirdScreen'
>;

// Alternative
// export type ThirdScreenProps = RouteProp<RootStackParamsList, 'ThirdScreen'>;
