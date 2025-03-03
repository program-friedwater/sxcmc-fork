'use client';

import { useState } from 'react';
import { Clipboard, ClipboardCheck, ClipboardX } from 'lucide-react';

export default function ClipboardInput( { text }: { text : string} ) {
	const [copyIcon, setCopyIcon] = useState(<Clipboard />);

	const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyIcon(<ClipboardCheck />);
    } catch (err) {
      setCopyIcon(<ClipboardX />);
    }
  };

	return (
		<div className="flex text-neutral-900">
			<input className="p-0.5 pl-2 bg-white rounded-s-md" aria-label="" type="text" value={text} readOnly />
			<div className="p-0.5 bg-neutral-300 rounded-e-md cursor-pointer" onClick={copyToClipboard}>
				{copyIcon}
			</div>
		</div>
	);
}
