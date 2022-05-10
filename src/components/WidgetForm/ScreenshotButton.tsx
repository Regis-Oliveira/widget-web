import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot, 
  onScreenshotTook
 }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  } 

  if(screenshot) {
    return (
      <button
        type='button'
        onClick={() => onScreenshotTook(null)}
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 dark:hover:text-zinc-100 hover:text-zinc-300 transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100
        }}
      >
        <Trash weight='fill' />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 dark:bg-zinc-800 bg-backgroundLightTheme-100 rounded-md border-transparent dark:hover:bg-zinc-700 hover:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 dark:text-backgroundLightTheme-100 text-lightTheme-600" />}
    </button>
  )
}
 