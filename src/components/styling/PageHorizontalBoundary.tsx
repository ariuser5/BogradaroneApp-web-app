import React from "react";

const defaultPageWidth = '90%';

interface PageHorizontalBoundaryProps {
	children?: React.ReactNode;
	pageWidth?: string;
	suppressCenterAlign?: boolean;
}

export const PageHorizontalBoundary: React.FC<PageHorizontalBoundaryProps> = (
	props: PageHorizontalBoundaryProps
): React.ReactElement<PageHorizontalBoundaryProps, React.JSXElementConstructor<PageHorizontalBoundaryProps>> => {
	return (
		<div 
			style={{
				alignSelf: !props.suppressCenterAlign ? 'center' : undefined,
				width: props.pageWidth ?? defaultPageWidth,
			}}
		>{props.children}
		</div>
	);
}