'use client'
import s from './Header.module.css'
import { LoginButton } from '@/UI/LoginButton/LoginButton'
import logo from '@images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { SocialMenu } from '@/UI/SocialMenu/SocialMenu'
import { BurgerButton } from '@/UI/BurgerButton/BurgerButton'
import { useRef } from 'react'
import { LoginPopup } from '../../components/LoginPopup/LoginPopup'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { Navigation } from './components/Navigation/Navigation'
import { AutorizedUser } from '@/components/AutorizedUser/AutorizedUser'
import { ThemeSwitcher } from '@/UI/ThemeSwitcher/ThemeSwitcher'
import { toggleNavMenu } from '@/redux/slices/toggleNavMenuSlice'
import { RootState } from '@/redux/store'
import { usePathname } from 'next/navigation'

export function Header() {
	const { userName, userMood } = useAppSelector(state => state.user)
	const isOpen = useAppSelector((state: RootState) => state.toggleNavMenu.isOpen)

	const path = usePathname()
	const isPrivateChatPage = path.includes('/private-chats/')

	const dispatch = useAppDispatch()

	const dialogRef = useRef<HTMLDialogElement>(null)
	function openPopupHandler() {
		dialogRef.current?.showModal()
	}

	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<div className={s.burgerButtonWrapper}>
					<BurgerButton
						isOpen={isOpen}
						onClick={() => {
							dispatch(toggleNavMenu(!isOpen))
						}}
					/>
				</div>
				<div className={s.navWrapper}>
					<Link href='/'>
						<Image priority className={s.logo} src={logo} alt='Логотип сайту' />
					</Link>
					<Navigation />
				</div>
				<div className={s.secondBlockWrapper}>
					<SocialMenu
						className={[s.socialBlock, isPrivateChatPage ? s.displayNone : ''].join(' ')}
					/>
					<ThemeSwitcher />
					{userName ? (
						<AutorizedUser
							className={s.headerAutorizedUser}
							name={userName}
							emoji={userMood}
						/>
					) : (
						<LoginButton label='Вхід' onClick={openPopupHandler} />
					)}
				</div>
			</div>
			<LoginPopup ref={dialogRef} />
		</header>
	)
}
