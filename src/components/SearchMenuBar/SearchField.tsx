import React from 'react';
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from "@mui/material/styles";

export const defaultPlaceHolder = "Search...";
const searchOverlayOpacity = 0.75;
const searchOverlayOpacityHoverDelta = 0.1;

export default function SearchField({
	placeHolder = defaultPlaceHolder
}: {
	placeHolder?: string
}): JSX.Element {
	const [text, setText] = React.useState(placeHolder);
	
	return (
		<Search
			sx={{flexGrow: 1}}
		>
			<SearchIconWrapper>
				<SearchIcon className='Search-Icon'/>
			</SearchIconWrapper>
			<StyledInputBase
				className='Search-Input'
				placeholder={placeHolder}
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	);
}

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, searchOverlayOpacity),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, searchOverlayOpacity - searchOverlayOpacityHoverDelta),
		// backgroundColor: "darkred",
		// 'caret-color': 'red'
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
	// color: 'inherit',
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));
 
 const StyledInputBase = styled(InputBase)(({ theme }) => ({
	flexGrow: 1,
	// caretColor: 'darkred',
	// 'caret-color': "darkred",
	'& :hover': {
		// backgroundColor: 'white'
	},
	'& .MuiInputBase-input': {
		color: 'inherit',
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}));