'use client';

import React, { useState } from 'react'
import {
  AlertDialog ,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog"


const CheatAlertDialog = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-black font-bold'>Upozornění pro zákazníky</AlertDialogTitle>
          <div className='space-y-2'>
            <p>
              Z důvodu výskytu podvodných praktik Vás žádáme, abyste pro online poptávky palivového dřeva využívali 
              <span className='font-bold'> výhradně kontaktní formulář na našich oficiálních stránkách</span>.
            </p>
            <p>
              Objednávky je možné provést také telefonicky nebo osobně v našem výrobním areálu Čápka u pana Sedláčka nebo pana Ing. Berčíka.
            </p>
            <p className='mt-6'>
              Děkujeme za pochopení.
            </p>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Pokračovat</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CheatAlertDialog
