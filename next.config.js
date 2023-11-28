/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_URL:"mongodb://localhost:27017/ProECommerce",
        API_URL:"http://localhost:3000"
    },
    images:{
        domains:['res.cloudinary.com'],
    }
}

module.exports = nextConfig
