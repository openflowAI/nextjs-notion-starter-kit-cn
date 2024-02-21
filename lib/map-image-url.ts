import { Block } from 'notion-types'
import { defaultMapImageUrl } from 'react-notion-x'

import { defaultPageCover, defaultPageIcon } from './config'

export const mapImageUrl = (url: string, block: Block) => {
	if (url === defaultPageCover || url === defaultPageIcon) {
		return url
	}

	if (!url.startsWith('https://file.notion.so')) {
		url = defaultMapImageUrl(url, block)
	}
	const p = new URL('https://proxy.openflowai.loan/proxy')
	p.searchParams.set('proxyUrl', url)

	return p.toString()
}
