import React, {memo} from 'react';
import * as LucideIcons from 'lucide-react';

interface LucideIconProps extends React.SVGProps<SVGSVGElement> {
	iconName: string;
	size?: number;
	color?: string;
	fallback?: React.ReactNode;
}

export const LucideIcon = memo(function LucideIconFn({
	                                                     iconName,
	                                                     fallback = null,
	                                                     size = 24,
	                                                     color = 'currentColor',
	                                                     ...props
                                                     }: LucideIconProps) {

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const IconComponent = LucideIcons[iconName];

	if (!IconComponent) {
		console.warn(`Иконка "${iconName}" не найдена в lucide-react`);
		return <>{fallback}</>;
	}

	return <IconComponent size={size} color={color} {...props} />;
});