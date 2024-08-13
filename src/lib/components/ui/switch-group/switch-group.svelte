<script lang="ts">
	import type { switch_variants } from '$lib/components/ui/switch/index.js';
	import { cn } from '$lib/utils.js';
	import { ToggleGroup as SwitchGroupPrimitive } from 'bits-ui';
	import type { VariantProps } from 'tailwind-variants';
	import { set_switch_group_ctx } from './index.js';

	type T = $$Generic<'single' | 'multiple'>;
	type $$Props = SwitchGroupPrimitive.Props<T> & VariantProps<typeof switch_variants>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let value: $$Props['value'] = undefined;

	set_switch_group_ctx({
		variant,
		size
	});
</script>

<SwitchGroupPrimitive.Root
	class={cn(
		'flex h-fit items-center justify-center gap-1 rounded-md p-1 shadow-shadow-border',
		className
	)}
	bind:value
	{...$$restProps}
	let:builder
>
	<slot {builder} />
</SwitchGroupPrimitive.Root>
