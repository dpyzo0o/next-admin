import { useAccess } from 'src/context/access-context';

function AccountCenter() {
  const access = useAccess();
  return (
    <div>
      <code>{JSON.stringify(access)}</code>
    </div>
  );
}

export default AccountCenter;
