/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  allowedDevOrigins: [
    "http://169.254.83.107:3000",
    "http://localhost:3000",
    "http://10.1.1.121:3000",
    "http://10.1.1.122:3000",
    "http://100.93.237.31:3000",
  ],
};

export default nextConfig;
