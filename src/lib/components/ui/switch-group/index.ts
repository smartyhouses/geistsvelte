import type { switch_variants } from '$lib/components/ui/switch/index.js';
import { getContext, setContext } from 'svelte';
import type { VariantProps } from 'tailwind-variants';
import Item from './switch-group-item.svelte';
import Root from './switch-group.svelte';

export type SwitchVariants = VariantProps<typeof switch_variants>;

export function set_switch_group_ctx(props: SwitchVariants) {
	setContext('switch_group', props);
}

export function get_switch_group_ctx() {
	return getContext<SwitchVariants>('switch_group');
}

export {
	Item,
	Root,
	//
	Root as SwitchGroup,
	Item as SwitchGroupItem
};
