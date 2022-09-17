import { Stack } from '@mui/material';
import CategoryFilterCollapse from './CategoryFilterCollapse';

export interface FilterGroup {
	text: string
}

export interface FilterMenuProps {
	filters: FilterGroup[];
}

export default function FilterMenu(props: FilterMenuProps): JSX.Element {
	let count = 0;
	const filterGroupCards = props.filters.map((filterGroup) => 
		<CategoryFilterCollapse key={count++} text={filterGroup.text}/>
	);
	
	return (
		<Stack
			spacing='5px'
			sx={{ paddingTop: '16px'}}>
			{filterGroupCards}
		</Stack>
	);
}