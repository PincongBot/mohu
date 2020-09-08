
const Backup = require("wecenter-backup-helper").default
const process = require("process")

const options = {
    siteUrl: process.env.SITE_URL,
    userAgent: process.env.UA,
    destDir: process.env.FILES_DIR,
    concurrency: +process.env.CONCURRENCY,
    bypassCloudflare: true,
    progress(item) {
        if (!item.parentType) { // root item
            console.log("📝", item.type, item.id)
        }
    }
}

const startId = +process.env.START_ID || undefined
const endId = +process.env.END_ID || undefined

Backup(process.env.BACKUP_TYPE, options, startId, endId)
    .then(() => process.exit(0))
