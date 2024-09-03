import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from 'path'

export default buildConfig({
    serverURL: process.env.NEXT_PUBLLIC_SERVER_URL || '',
    collections: [],
    routes: {
        admin: '/admin'
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: 'Zephyr Collection admin',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg'
        }
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.DATABASE_URI!,
    }),
    rateLimit: {
        max: 2000,
    },
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    }
})