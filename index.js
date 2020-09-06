
const Backup = require("wecenter-backup-helper").default
const process = require("process")

const options = {
    siteUrl: process.env.SITE_URL,
    userAgent: process.env.UA,
    destDir: process.env.FILES_DIR,
    concurrency: +process.env.CONCURRENCY,
    progress(item) {
        if (!item.parentType) { // root item
            console.log("📝", item.type, item.id)
        }
    }
}

Backup("user", options)
Backup("topic", options)
Backup("article", options)
Backup("question", options)
Backup("video", options)
