import { Box } from '@mui/material';
import { PageBoundary } from './PageBoundary';

interface Props {
	page: JSX.Element;
	pageWidth?: string;
}

export default function PageContainer(props: Props): JSX.Element {
	return (
		<PageBoundary pageWidth={props.pageWidth}>
			<Box className="Page-Container">
				{props.page}
			</Box>
		</PageBoundary>
	);
}