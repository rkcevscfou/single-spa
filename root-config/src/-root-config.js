import { registerApplication, start } from "single-spa";

registerApplication({
  name: "app",
  app: () => System.import("@/app"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
