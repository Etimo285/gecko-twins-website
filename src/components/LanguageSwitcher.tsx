import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo, useState } from 'react'

export const LanguageSwitcher: React.FC<{
    onChange?: (locale: string) => unknown
}> = ({ onChange }) => {

    const { i18n } = useTranslation()
    const { language: currentLanguage } = i18n
    const router = useRouter()
    const locales = router.locales ?? [currentLanguage]

    const languageNames = useMemo(() => {
        return new Intl.DisplayNames([currentLanguage], {
            type: 'language',
        })
    }, [currentLanguage])

    const [value, setValue] = useState({
        value: i18n.language,
        label: "Test"
    })

    const switchToLocale = useCallback(
        (locale: string) => {
            const path = router.asPath

            return router.push(path, path, { locale })
        },
        [router]
    )

    const languageChanged = useCallback(
        async (option: ListBoxOptionModel<string>) => {
            setValue(option)

            const locale = option.value

            if (onChange) {
                onChange(locale)
            }
        },
        [switchToLocale, onChange]
    )

    return (
      <div>LanguageSwitcher</div>
    )
}
