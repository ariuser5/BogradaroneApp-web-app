import { Pagination } from '@mui/material';
import { Box } from '@mui/system';

const defaultPage: number = 1;

type ContentPaginationProps = {
	page?: number;
	count: number;
	onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function ContentPagination(props: ContentPaginationProps): JSX.Element {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}>
			<Pagination 
				page={props.page ?? defaultPage} 
				count={props.count}
				onChange={props.onChange}
				color='standard' 
				shape='rounded'
			/>
		</Box>
	);
}
