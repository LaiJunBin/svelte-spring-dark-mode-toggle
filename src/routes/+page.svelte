<script lang="ts">
	import { spring } from 'svelte/motion';

	enum Mode {
		Dark,
		Light
	}

	let mode: Mode = Mode.Dark;

	const defaultProperties = {
		[Mode.Dark]: {
			circle: {
				r: 9
			},
			mask: {
				cx: 50,
				cy: 23
			},
			svg: {
				transform: 40
			},
			lines: {
				opacity: 0
			}
		},
		[Mode.Light]: {
			circle: {
				r: 5
			},
			mask: {
				cx: 100,
				cy: 0
			},
			svg: {
				transform: 90
			},
			lines: {
				opacity: 1
			}
		},
		springConfig: { stiffness: 0.1, damping: 0.25 }
	};

	let { circle, mask, svg, lines } = defaultProperties[mode];
	let svgProps = spring(svg, defaultProperties.springConfig);
	let circleProps = spring(circle, defaultProperties.springConfig);
	let maskProps = spring(mask, defaultProperties.springConfig);
	let linesProps = spring(lines, defaultProperties.springConfig);

	function toggleMode() {
		mode = mode === Mode.Dark ? Mode.Light : Mode.Dark;
		({ circle, mask, svg, lines } = defaultProperties[mode]);
		svgProps.set(svg);
		circleProps.set(circle);
		maskProps.set(mask);
		linesProps.set(lines);
	}

	function propsToStyle<T extends object>(props: T) {
		return Object.keys(props)
			.map((key) => `${key}: ${props[key as keyof typeof props]}`)
			.join(';');
	}

	$: svgStyle = propsToStyle({
		transform: `rotate(${$svgProps.transform}deg)`
	});
	$: circleStyle = propsToStyle($circleProps);
	$: maskStyle = propsToStyle({
		cx: `${$maskProps.cx}%`,
		cy: `${$maskProps.cy}%`
	});
	$: linesStyle = propsToStyle($linesProps);
</script>

<button on:click={toggleMode}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		style={svgStyle}
	>
		<mask id="mask">
			<rect x="0" y="0" width="100%" height="100%" fill="white" />
			<circle cx="12" cy="4" r="9" fill="black" style={maskStyle} />
		</mask>
		<circle fill="black" cx="12" cy="12" r="5" mask="url(#mask)" style={circleStyle} />
		<g stroke="currentColor" style={linesStyle}>
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</g>
	</svg>
</button>

<style>
	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}
</style>
