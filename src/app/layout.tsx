'use client'

import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

type LayoutType = {
	children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: LayoutType) => {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<link rel='shortcut icon' type='image/ico' href='/favicon.ico' />
			</head>

			<body className={`${inter} bg-white text-black px-4`}>{children}</body>
		</html>
	)
}

export default RootLayout
