export const textAnimate = {
	offscreen: { y: 100, opacity: 0 },
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 1,
		},
	},
}

export const rotateAnimation = {
	offscreen: { rotate: 90, opacity: 0 },
	onscreen: {
		rotate: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 1,
		},
	},
}

export const zoomAnimation = {
	offscreen: { scale: 0, opacity: 0 },
	onscreen: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 1,
		},
	},
}

export const whileHoverItem = {
	onHover: {
		scale: 1.5,
		marginTop: "10px",
		backgroundColor: "#22c55e",
		zIndex: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 1,
		},
	},
}
