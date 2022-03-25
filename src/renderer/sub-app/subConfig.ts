interface SubApp {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  props?:any
}
export const subApps: SubApp[] = [
  {
    name: "react app", // app name registered
    entry: "//localhost:10001",
    container: "#container",
    activeRule: "#/qiankun/sub-react",
    props: {
      name: '哈哈',
    },
  },
  {
    name: "react app2", // app name registered
    entry: "//localhost:10003",
    container: "#container",
    activeRule: "#/qiankun/sub-react2",
    props: {
      name: '9999999999',
    },
  },
];
export default {
  webPackConfig: {},
  devServerConfig: {},
};
