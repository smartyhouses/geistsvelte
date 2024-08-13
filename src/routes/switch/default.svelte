<script lang="ts">
	import * as SwitchGroup from '$lib/components/ui/switch-group';
</script>

<div class="flex">
	<SwitchGroup.Root type="single" value="source">
		<SwitchGroup.Item value="source">Source</SwitchGroup.Item>
		<SwitchGroup.Item value="output">Output</SwitchGroup.Item>
	</SwitchGroup.Root>
</div>
