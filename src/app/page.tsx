"use client"

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { SaveFile, saveFileSchema } from './validation/save-file-schema'
import { formatFlags } from '@/format-flags'
import { UnlockablesList } from '@/components/unlockables'
import { ALL_SURVIVOR_SKILLS, SURVIVOR_UNLOCKS } from './flag-options'

export default function Home() {
  const [originalUserSaveFile, setOriginalUserSaveFile] = useState<SaveFile>()
  const [newSaveFile, setNewSaveFile] = useState<SaveFile>()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        try {
          const saveFile = saveFileSchema.parse(JSON.parse(e.target?.result as string))
          setOriginalUserSaveFile(saveFile)
        } catch (error) {
          console.error('Error parsing JSON file:', error)
        }
      }

      reader.readAsText(file)
    }
  }

  const handleUnlockAll = () => {
    if (originalUserSaveFile) {
      setNewSaveFile(formatFlags({
        abilityUnlocks: Object.values(ALL_SURVIVOR_SKILLS),
        survivorUnlocks: Object.values(SURVIVOR_UNLOCKS), 
      }, originalUserSaveFile) )
    }
  };

  const exportSaveFile = (saveFile: SaveFile) => () => {
    const moddedSaveFile = JSON.stringify(saveFile, null, 2);
      const blob = new Blob([moddedSaveFile], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'save.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {!originalUserSaveFile && <input className='flex my-8 rounded p-2 bg-gray-300 text-gray-800' type="file" onChange={handleFileChange} />}
        {originalUserSaveFile && <button className='flex my-8 rounded p-2 bg-gray-300 text-gray-800' onClick={exportSaveFile(originalUserSaveFile)}>Export original save file</button> }
        {newSaveFile && <button className='flex my-8 rounded p-2 bg-gray-300 text-gray-800' onClick={exportSaveFile(newSaveFile)}>Export modded save file</button> }

        {originalUserSaveFile && (
          <>
            <div className='my-8'>
              <label className="mr-4" htmlFor="unlock_all">Unlock all</label>
              <input type="checkbox" id="unlock_all" onChange={handleUnlockAll} />
            </div>
            <UnlockablesList saveFile={newSaveFile || originalUserSaveFile} />
          </>
        )}
      </div>
    </main>
  )
}
