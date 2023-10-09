import { test } from '@yovolve/utils'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from "url"
import latestVersion from 'latest-version';
import { npmPublish, type Results } from "@jsdevtools/npm-publish"

const { NPM_SECRET } = process.env

const packagesDir = path.join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    "packages",
)

const packages: string[] = fs.readdirSync(packagesDir)

for (let dir of packages) {
    const packageName: string = dir === 'yovolve' ? dir : `@yovolve/${dir}`
    const packagePath: string = path.join(
        packagesDir,
        dir,
        "package.json",
    )
    const nowVersion = await latestVersion(packageName)
    const newVersion = JSON.parse(fs.readFileSync(packagePath, 'utf8'))?.version
    if (nowVersion == newVersion) {
        console.log(`Package ${packageName} Version ${nowVersion}`)
        continue
    }
    console.log(`Try publishing package: ${packageName} (${newVersion})`)
    const result: Results = await npmPublish({
        token: NPM_SECRET as string,
        access: 'public',
        package: packagePath,
    })
    const { version, oldVersion } = result
    if (result.id) console.log(`Succesfully published ${packageName} (${oldVersion} -> ${version})`)
    else console.log(`Failed publishing package: ${packageName}`)
}