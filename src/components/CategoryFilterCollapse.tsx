import React from 'react';
import { CheckBox, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Button, Card, Collapse, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import List from '@mui/material/List';

export default function CategoryFilterCollapse(props?: any): JSX.Element {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Card
			sx={{
				textAlign: 'left',
				minWidth: 200,
				width: 250,
			}}>
			<Button 
				onClick={handleClick} 
				sx={{ 
					width: '100%',
				}}>
				<Typography sx={{ flexGrow: 1 , textAlign: 'left' }}>
					{props.text}
				</Typography>
				{open ? <ExpandLess/> : <ExpandMore/>}
			</Button>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 2 }}>
						<ListItemIcon>
							<CheckBox></CheckBox>
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</ListItemButton>
				</List>
			</Collapse>
		</Card>
	);
}