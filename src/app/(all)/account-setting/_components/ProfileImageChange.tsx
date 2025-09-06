import React from 'react'
import ImageCont from './ImageCont'
import { useTranslations } from 'next-intl'

const ProfileImageChange = () => {
    const t = useTranslations()
  return (
    <div className='bg-white rounded-xl box-shadow px-5 pt-20 pb-10 flex-c'>
        <div>
            <ImageCont />
            <p className='text-gray max-w-[208px] mx-auto mt-6 text-center text-xs'>{t("image type")}</p>
            <button type="button" className='px-3 py-1.5 bg-[#FE5D5D14] rounded block text-red font-bold text-sm mx-auto mt-6'>{t("Delete user")}</button>
        </div>
    </div>
  )
}

export default ProfileImageChange