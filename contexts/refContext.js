const { createContext, useMemo } = require("react")

export const TargetContext = createContext()

const RefContext = ({ children }) => {
	const targets = {
		goalRef: null,
		teamtableRef: null,
		processRef: null,
	}
	return (
		<TargetContext.Provider value={targets}>
			{children}
		</TargetContext.Provider>
	)
}

export default RefContext
