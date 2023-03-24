const { createContext } = require("react")

export const TargetContext = createContext()

const RefContext = ({ children }) => {
	const targets = { goalRef: null, teamtableRef: null }
	return (
		<TargetContext.Provider value={targets}>
			{children}
		</TargetContext.Provider>
	)
}

export default RefContext
