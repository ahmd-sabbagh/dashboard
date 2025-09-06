import { useTranslations } from 'next-intl'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const SortBy = () => {
    const t = useTranslations()
  return (
    <button type='button' className='title-color font-bold text-sm flex items-center gap-2 p-2'>
        <span>{t("sort by")}</span>
        <span><IoIosArrowDown /></span>
    </button>
  )
}

export default SortBy