<script lang="ts">
	import { switch_variants } from '$lib/components/ui/switch/index.js';
	import { cn } from '$lib/utils.js';
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { get_switch_group_ctx, type SwitchVariants } from './index.js';

	type $$Props = ToggleGroupPrimitive.ItemProps & SwitchVariants;

	let className: string | undefined | null = undefined;

	export { className as class };
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let value: $$Props['value'];

	const ctx = get_switch_group_ctx();
</script>

<ToggleGroupPrimitive.Item
	class={cn(
		switch_variants({
			variant: ctx.variant || variant,
			size: ctx.size || size
		}),
		className
	)}
	{value}
	{...$$restProps}
>
	<slot />
</ToggleGroupPrimitive.Item>
