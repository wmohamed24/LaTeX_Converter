import { Flex } from "antd";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <Flex
      style={{ height: "100vh", width: "100vw" }}
      justify="center"
      align="center"
    >
      <UploadForm></UploadForm>
    </Flex>
  );
}

export default App;
