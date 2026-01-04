import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";
import { MessagesContainer } from "./components/MessageContainer";
import { MainRouter } from "./router/MainRouter";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
