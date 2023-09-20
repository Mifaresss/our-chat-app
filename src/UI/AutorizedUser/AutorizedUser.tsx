import { getEmojiFromResponse } from '@/utils/getEmojiFromResponse'
import { SubSubTitle } from '../SubSubTitle/SubSubTitle'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import s from './AutorizedUser.module.css'
import { useAppDispatch } from '@/hooks/redux'
import { logout } from '@/redux/slices/authSlice'

interface PropsType {
	name: string
	emoji: number
}

export function AutorizedUser({ name, emoji }: PropsType) {
	const dispatch = useAppDispatch()

	function handleLogout() {
		dispatch(logout())
	}

	return (
		<div className={s.wrapper}>
			<article className={s.user}>
				<SubSubTitle className={s.userName} label={name} color='--color-3' />
				<SvgIcon
					className={`${s.button} ${s.userMood}`}
					src='icons/sprite.svg'
					name={getEmojiFromResponse(emoji)}
				/>
			</article>
			<SvgIcon
				onClick={handleLogout}
				className={`${s.button} ${s.exitButton}`}
				src='icons/sprite.svg'
				name='exit'
			/>
		</div>
	)
}
