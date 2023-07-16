import { Box } from '@mui/material';
import { PageHorizontalBoundary } from './styling/PageHorizontalBoundary';

interface PageContainerProps {
	page: JSX.Element;
	pageWidth?: string;
}

export default function PageContainer(props: PageContainerProps): JSX.Element {
	return (
		<PageHorizontalBoundary pageWidth={props.pageWidth}>
			<Box className="Page-Container">
				{props.page}
			</Box>
		</PageHorizontalBoundary>
	);
}