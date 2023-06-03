import React from "react";

const defaultPageWidth = '90%';

interface PageBoundaryProps {
	children?: React.ReactNode;
	pageWidth?: string;
	suppressCenterAlign?: boolean;
}

export const PageBoundary: React.FC<PageBoundaryProps> = (
	props: PageBoundaryProps
): React.ReactElement<PageBoundaryProps, React.JSXElementConstructor<PageBoundaryProps>> => {
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