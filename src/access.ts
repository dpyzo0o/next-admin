import { InitialState } from './initialState';

export type Access = {
  [key: string]: boolean;
};

function getAccess(initialState: InitialState) {
  const { user } = initialState;
  return {
    canAdmin: user.role === 'admin',
    canUser: user.role === 'user',
  };
}

export { getAccess };
