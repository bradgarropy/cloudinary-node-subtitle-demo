import "dotenv/config"

import os from "node:os"

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

// PART ONE - Adding existing subtitles

const video = cloudinary.url("cloudinary-node-subtitle-demo/first", {
    resource_type: "video",
    overlay: {
        resource_type: "subtitles",
        public_id: "cloudinary-node-subtitle-demo/first.transcript",
    },
})

console.log(video)

// PART TWO - Adding generated subtitles

const path = `${os.homedir()}/Desktop/cloudinary-node-subtitle-demo/second.mp4`

await cloudinary.uploader.upload(path, {
    public_id: "second",
    folder: "cloudinary-node-subtitle-demo",
    resource_type: "video",
    raw_convert: "google_speech:srt:vtt",
})

const uploadedVideo = cloudinary.url("cloudinary-node-subtitle-demo/second", {
    resource_type: "video",
    overlay: {
        resource_type: "subtitles",
        public_id: "cloudinary-node-subtitle-demo/second.transcript",
    },
})

console.log(uploadedVideo)
