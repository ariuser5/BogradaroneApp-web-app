import { Stack } from '@mui/material';
import CategoryFilterCollapse from './CategoryFilterCollapse';

export interface FilterGroup {
	text: string
}

interface Props {
	filters: FilterGroup[];
}

export default function FilterMenu(props: Props): JSX.Element {
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