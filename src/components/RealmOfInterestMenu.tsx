import { Box } from "@mui/material";
import { RealmOfInterestModel } from "../viewmodels/RealmOfOnterestModel";

interface Props {
	viewModel: RealmOfInterestModel
}

export default function RealmOfInterestMenu(props: Props): JSX.Element {
	return (
		<Box height={100} sx={{
			backgroundColor: 'brown'
		}}>
			Realm Of Interest
		</Box>
	);
}

export function RealmOfInterestMenuPlaceholder(): JSX.Element {
	return (
		<Box height={100} sx={{
			backgroundColor: 'gray'
		}}>
			Loading...
		</Box>
	);
}