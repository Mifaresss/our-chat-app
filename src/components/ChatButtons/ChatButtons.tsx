import { SvgIcon } from '@/UI/SvgIcon/SvgIcon'
import s from './ChatButtons.module.css'
import { HTMLAttributes, useRef } from 'react'
import { ExitChatPopup } from '../ExitChatPopup/ExitChatPopup'
import { useAppSelector } from '@/hooks/redux'
const baseAppUrl = 'https://our-chat-app-two.vercel.app/'

interface Props extends HTMLAttributes<HTMLDivElement> {
	chatId?: string
}

export function ChatButtons({ chatId, className, ...props }: Props) {
	const internalChatId = useAppSelector(state => state.privateChat.id)

	function handleCopyClick() {
		const textToCopy = baseAppUrl + 'private-chats/' + (chatId ?? internalChatId)
		navigator.clipboard.writeText(textToCopy).then(() => {
			alert('Посилання на чат вже у буфері обміну')
		})
	}

	const dialogRef = useRef<HTMLDialogElement>(null)
	function openPopupHandler() {
		dialogRef.current?.showModal()
	}

	return (
		<div className={[s.wrapperButtons, className].join(' ')} {...props}>
			<SvgIcon
				className={[s.button, s.shareButton].join(' ')}
				src='icons/sprite.svg'
				name='share'
				onClick={handleCopyClick}
			/>
			<SvgIcon
				className={[s.button, s.exitButton].join(' ')}
				src='icons/sprite.svg'
				name='exit'
				onClick={openPopupHandler}
			/>
			<ExitChatPopup ref={dialogRef} chatId={chatId ?? internalChatId} />
		</div>
	)
}
