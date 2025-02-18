import "dotenv/config"

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({cloud_name: process.env.CLOUD_NAME})

// PART ONE - Adding existing subtitles

const video = cloudinary.url("cloudinary-node-subtitle-demo/test", {
    resource_type: "video",
    overlay: {
        resource_type: "subtitles",
        public_id: "cloudinary-node-subtitle-demo/test.srt",
    },
})

console.log(video)

// PART TWO - Adding generated subtitles
