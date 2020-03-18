import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { TextInput } from "@guardian/src-text-input"
import { Button } from "@guardian/src-button"
import { textSans } from "@guardian/src-foundations/typography"
import { brand } from '@guardian/src-foundations/themes'
import { space } from "@guardian/src-foundations"

const formWidth = css`
    width: 400px;
`
const spaceAfter = css`
    margin-bottom: ${space[2]}px;;
`

function Form() {
    return (
        <form css={formWidth}>
            <ThemeProvider theme={brand}>
                <div css={spaceAfter}>Hello form world</div>
            </ThemeProvider>
            <TextInput css={spaceAfter} />
            <Button
                priority="primary"
                size="default"
                onClick={() => {
                    alert("Thanks for clicking")
                }}
            >
                Click me
            </Button>
        </form>
    )
}

export default Form