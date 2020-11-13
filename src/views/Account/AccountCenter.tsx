import { useAccess } from 'src/context/AccessContext';

function AccountCenter() {
  const access = useAccess();
  return (
    <div>
      <code>{JSON.stringify(access)}</code>
    </div>
  );
}

export default AccountCenter;
