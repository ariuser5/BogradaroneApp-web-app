import { Box } from '@mui/material';

interface Props {
	page: JSX.Element;
}

export default function PageContainer({page}: Props): JSX.Element {
	return (
		<Box className="Page-Container">
			{page}
		</Box>
	);
}