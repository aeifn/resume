import { promises as fs } from 'fs'
import * as theme from 'jsonresume-theme-even'
import puppeteer from 'puppeteer'
import { render } from 'resumed'
import yaml from 'yaml-js'

const resume = yaml.load(await fs.readFile('resume.yaml', 'utf-8'))
const html = await render(resume, theme)

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.setContent(html, { waitUntil: 'networkidle0' })
await page.pdf({ path: 'resume.pdf', format: 'a4', printBackground: true, margin: { top: '0.5in', right: '0.5in', bottom: '1in', left: '0.5in' } })
await browser.close()