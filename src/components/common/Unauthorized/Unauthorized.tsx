import React from "react";
import { Button, Result } from "antd";

function Unauthorized() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Unauthorized."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
}

export default Unauthorized;
