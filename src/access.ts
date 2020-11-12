import { InitialState } from './init';

function getAccess(initialState: InitialState) {
  const { user } = initialState;
  return {
    canAdmin: user.role === 'admin',
  };
}

export { getAccess };
