import { InitialState } from './initialState';

export type Access = ReturnType<typeof getAccess>;

function getAccess(initialState: InitialState) {
  const { user } = initialState;
  return {
    canAdmin: user.role === 'admin',
  };
}

export { getAccess };
