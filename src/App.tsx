import Authentication from "./features/Authentication/Authentication";
import { useGetNotification } from "./utils/hooks/useGetNotification";

function App() {
  const {openNotification, contextHolder} = useGetNotification();
  return (
    <div className="App">
      {contextHolder}
      <Authentication />
    </div>
  );
}

export default App;
