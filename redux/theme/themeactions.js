import { DARK_MODE, LIGHT_MODE } from "./themetypes"

const darkMode = () => ({ type: DARK_MODE })
const lightMode = () => ({ type: LIGHT_MODE })

export { darkMode, lightMode }