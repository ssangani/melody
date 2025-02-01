import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("/health", "routes/health.tsx"),
] satisfies RouteConfig;
