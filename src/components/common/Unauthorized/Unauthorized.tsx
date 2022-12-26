import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Unauthorized."
      extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
    />
  );
}

export default Unauthorized;
