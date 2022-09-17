import React from 'react';
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from "@mui/material/styles";

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	display: 'flex',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

 const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));
 
 const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	flexGrow: 1,
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}));

interface SearchFieldProps {
	placeHolder?: string;
}

export default function SearchField({placeHolder = "Search..."}: SearchFieldProps): JSX.Element {
	const [text, setText] = React.useState(placeHolder);
	
	return (
		<Search
			sx={{flexGrow: 1}}>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder={placeHolder}
				inputProps={{ 'aria-label': 'search' }}/>
		</Search>
	);
}