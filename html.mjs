import { promises as fs } from 'fs'
import * as theme from 'jsonresume-theme-even'
import { render } from 'resumed'
import yaml from 'yaml-js'

const resume = yaml.load(await fs.readFile('resume.yaml', 'utf-8'))
const html = await render(resume, theme)

fs.writeFile('resume.html', html)
