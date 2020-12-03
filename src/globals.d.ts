import '@testing-library/jest-dom/extend-expect'
import { RootState } from './store/rootReducer'

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}
