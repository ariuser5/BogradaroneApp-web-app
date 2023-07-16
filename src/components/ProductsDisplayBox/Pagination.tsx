import { Pagination as MuiPagination } from '@mui/material';
import { Box } from '@mui/system';

const defaultPage: number = 1;

type ContentPaginationProps = {
	page?: number;
	count: number;
	onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function Pagination(props: ContentPaginationProps): JSX.Element {
	return (
		<Box className="Pagination">
			<MuiPagination
				page={props.page ?? defaultPage} 
				count={props.count}
				onChange={props.onChange}
				color='standard' 
				shape='rounded'
			/>
		</Box>
	);
}
