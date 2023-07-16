import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function EmptyContentMessage(): JSX.Element {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				zIndex: 1,
			}}
		>
			<Typography>
				No content to display
			</Typography>
		</Box>
	);
}
