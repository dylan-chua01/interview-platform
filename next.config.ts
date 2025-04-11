import type { NextConfig } from "next";
import autoCert from "anchor-pki/auto-cert/integrations/next";

// const nextConfig: NextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   }
// };

const withAutoCert = autoCert({
  enabledEnv: "development"
})

const nextConfig = {};

export default withAutoCert(nextConfig);
