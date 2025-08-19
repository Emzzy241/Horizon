"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:px-4 xl:px-6 2xl:w-[355px] pr-8'>
      <nav className="flex flex-col gap-4">
        <Link href='/' className='mb-12 flex cursor-pointer items-center gap-2'>
          <Image 
            src='/icons/logo.svg' 
            alt='Horizon Banking Logo' 
            className='size-[24px] max-xl:size-14' 
            width={34} 
            height={34}
          />
          <h1 className='2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black max-xl:hidden'>Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link 
              href={item.route} 
              key={item.label} 
              className={cn('flex gap-3 text-black items-center py-2 md:p-3 2xl:p-4 rounded-lg justify-start', {'bg-bank-gradient text-white' : isActive})}
            > 
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({'brightness-[3] invert-0': isActive})}
                />
              </div>
              <p className={cn('text-16 font-semibold', {'text-white': isActive})}>{item.label}</p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}

export default Sidebar











// "use client"

// import { sidebarLinks } from '@/constants'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'

// const Sidebar = ({user}: SiderbarProps) => {
//     const pathname = usePathname();
//   return (
//     <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>
//         <nav className="flex flex-col gap-4">
//             <Link href='/' className='mb-12 cursor-pointer items-center gap-2'>
//                 <Image src='/icons/logo.svg' alt='Horizon Banking Logo' className='size-[24px] max-xl:size-14' width={34} height={34}/>
//                 <h1 className='2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black max-xl:hidd'>Horizon</h1>
//             </Link>

//             {sidebarLinks.map((item) => {
//                 const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
//                 return (
//                     <Link href={item.route} key={item.label} className={cn('flex gap-3 text-black items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start', {'bg-bank-gradient' : isActive})}> {item.label}</Link>
//                 )
//             })}
//         </nav>
//     </section>
//   )
// }

// export default Sidebar