interface SubApp {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
}
export const subApps: SubApp[] = [
  {
    name: "react app", // app name registered
    entry: "//localhost:10001",
    container: "#container",
    activeRule: "#/basesub/sub-react",
  },
  {
    name: "react app2", // app name registered
    entry: "//localhost:10003",
    container: "#container",
    activeRule: "#/basesub/sub-react2",
  },
];
export default {
  webPackConfig: {},
  devServerConfig: {},
};
