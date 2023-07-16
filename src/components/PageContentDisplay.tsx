import { Box } from '@mui/material';
import { PageHorizontalBoundary } from './layout/PageHorizontalBoundary';

interface PageContainerProps {
	page: JSX.Element;
	pageWidth?: string;
}

export default function PageContentDisplay(props: PageContainerProps): JSX.Element {
	return (
		<PageHorizontalBoundary pageWidth={props.pageWidth}>
			<Box className="Page-Content">
				{props.page}
			</Box>
		</PageHorizontalBoundary>
	);
}