import { type VariantProps, tv } from 'tailwind-variants';
import Root from './switch.svelte';

export const switch_variants = tv({
	base: 'inline-flex items-center justify-center rounded-sm text-sm font-medium text-gray-900 ring-offset-background-200 transition-colors hover:text-gray-1000 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-gray-800 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-1000 data-[state=on]:disabled:text-gray-800',
	variants: {
		variant: {
			default: 'bg-transparent',
			outline: 'bg-transparent shadow-shadow-border hover:bg-gray-100 hover:text-gray-1000'
		},
		size: {
			default: 'h-8 px-3',
			sm: 'h-6 px-2.5',
			lg: 'h-9 px-4 text-base'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

export type Variant = VariantProps<typeof switch_variants>['variant'];
export type Size = VariantProps<typeof switch_variants>['size'];

export { Root, Root as Toggle };
