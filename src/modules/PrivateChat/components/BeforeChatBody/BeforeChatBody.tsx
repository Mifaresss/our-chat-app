import s from './BeforeChatBody.module.css'
import { SubSubTitle } from '@/UI/SubSubTitle/SubSubTitle'
import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'

interface PropsType {}

export function BeforeChatBody({}: PropsType) {
	return (
		<div className={s.beforeChatBody}>
			<SubSubTitle className={s.beforeChatBodyTitle} label='Привіт, Олена!' />
			<div className={s.beforeChatBodyContent}>
				<p className={s.beforeChatBodyText}>
					Для початку нового чату додай самостійно користувачів або поділись посиланням на чат.
				</p>
				<div className={s.beforeChatBodyButtons}>
					<SvgIcon className={s.beforeChatBodyButton} src='icons/sprite.svg' name='add-user' />
					<SvgIcon className={s.beforeChatBodyButton} src='icons/sprite.svg' name='share' />
				</div>
			</div>
		</div>
	)
}