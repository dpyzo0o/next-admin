import { Result, Button } from 'antd';

function ResultPage() {
  return (
    <div>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
      <Result
        title="Your operation has been executed"
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    </div>
  );
}

export default ResultPage;
