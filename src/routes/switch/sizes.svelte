<script lang="ts">
	import * as SwitchGroup from '$lib/components/ui/switch-group';
</script>

<div class="flex justify-between">
	<SwitchGroup.Root type="single" value="source" size="sm">
		<SwitchGroup.Item value="source">Source</SwitchGroup.Item>
		<SwitchGroup.Item value="output">Output</SwitchGroup.Item>
	</SwitchGroup.Root>

	<SwitchGroup.Root type="single" value="source">
		<SwitchGroup.Item value="source">Source</SwitchGroup.Item>
		<SwitchGroup.Item value="output">Output</SwitchGroup.Item>
	</SwitchGroup.Root>

	<SwitchGroup.Root type="single" value="source" size="lg">
		<SwitchGroup.Item value="source">Source</SwitchGroup.Item>
		<SwitchGroup.Item value="output">Output</SwitchGroup.Item>
	</SwitchGroup.Root>
</div>
