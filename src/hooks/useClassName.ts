export function useClassName(classComponent: string, className?: string, ...classes: string[]) {
	if (className) {
		return [className, ...classes, classComponent].join(' ');
	}
	return classComponent;
}
