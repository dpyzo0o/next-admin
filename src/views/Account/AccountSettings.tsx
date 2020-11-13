import { Select } from 'antd';
import { useInitialState } from 'src/context/InitialStateContext';

function AccountSettings() {
  const { initialState, setInitialState } = useInitialState();
  const { user } = initialState;

  return (
    <div>
      <Select
        value={user.role}
        onChange={val => {
          const newUser = { ...user, role: val };
          setInitialState({
            ...initialState,
            user: newUser,
          });
        }}
      >
        <Select.Option value="admin">Admin</Select.Option>
        <Select.Option value="user">User</Select.Option>
      </Select>
    </div>
  );
}

export default AccountSettings;
