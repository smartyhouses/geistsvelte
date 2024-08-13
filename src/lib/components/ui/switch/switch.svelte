<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Toggle as SwitchPrimitive } from 'bits-ui';
	import { type Size, type Variant, switch_variants } from './index.js';

	type $$Props = SwitchPrimitive.Props & {
		variant?: Variant;
		size?: Size;
	};
	type $$Events = SwitchPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let pressed: $$Props['pressed'] = undefined;
	export { className as class };
</script>

<SwitchPrimitive.Root
	bind:pressed
	class={cn(switch_variants({ variant, size, className }))}
	{...$$restProps}
	on:click
>
	<slot />
</SwitchPrimitive.Root>
