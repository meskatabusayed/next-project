/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
           {
              protocol: "https",
              hostname: "*",
              port: "",
              pathname: "/**",
           },
        ],
     },
     redirects : async () => {
      return [
         {
            source : "/gallery",
            destination : "/posts",
            permanent : true
         }
        ]
     }
};

export default nextConfig;
