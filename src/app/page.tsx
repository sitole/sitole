import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Sitole.cz - Personal Website',
}

const LandingPage = () => (
	<div className={'flex flex-col h-screen justify-center items-center'}>
		Sitole.cz
	</div>
)

export default LandingPage
