import prettify from 'https://dev.jspm.io/prettify-xml';

import { readTXT, writeTXT, removeFile } from 'https://deno.land/x/flat@0.0.11/mod.ts'

const xml = await readTXT('sitemap.xml');

const processedXML = prettify(xml);

await writeTXT('sitemap-postprocessed.xml', processedXML);
