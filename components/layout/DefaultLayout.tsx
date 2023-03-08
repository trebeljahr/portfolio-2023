import { ReactNode } from 'react';
import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';

type Props = {
	children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
	return (
		<>
			<PagesMetaHead />
			<AppHeader />
			<div>{children}</div>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
