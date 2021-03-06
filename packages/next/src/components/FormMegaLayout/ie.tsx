const isIECompat = !('grid-column-gap' in document?.documentElement?.style)
const getIEGridContainerStyle = (opts) => {
    if (isIECompat) {
        const { gutter, autoRow } = opts
        const halfGutter = Math.floor(gutter / 2)
        return `
            display: flex;
            ${autoRow ? 'flex-flow: row wrap;' : ''}
            margin: -${halfGutter}px -${halfGutter}px;
            
            .button-group {
                padding-left: ${halfGutter}px;
                display: flex;
                align-items: center;   
            }
        `
    }

    return ''
}

const getValidSpan = (span, cols) => span > cols ? cols : span
const getIEGridItemStyle = (opts) => {
    if (isIECompat) {
        const { gutter, span, columns, isSecondary,
            responsive, nested,
            enableResponsive } = opts
        const halfGutter = Math.floor(gutter / 2)
        const flexBase = `${Number((Number(getValidSpan(span, columns)) / Number(columns)).toFixed(6)) * 100}%`

        const itemStyle = `
            ${nested ? `padding: ${halfGutter}px ${halfGutter}px 0;` : `padding: ${halfGutter}px;`}
            max-width: ${flexBase};
            flex: 0 0 ${flexBase};
        `

        let responsiveStyle = ''
        if (isSecondary && enableResponsive) {
            const { s, m, lg } = responsive
            const sFlexBase = `${Number((Number(getValidSpan(span, s)) / Number(s)).toFixed(6)) * 100}%`
            const mFlexBase = `${Number((Number(getValidSpan(span, m)) / Number(m)).toFixed(6)) * 100}%`
            const lgFlexBase = `${Number((Number(getValidSpan(span, lg)) / Number(lg)).toFixed(6)) * 100}%`

            responsiveStyle = `
                @media (max-width: 720px) {
                    flex: 0 0 ${sFlexBase};
                    max-width: ${sFlexBase};
                }
                @media (min-width: 720px) and (max-width: 1200px) {
                    flex: 0 0 ${mFlexBase};
                    max-width: ${mFlexBase};
                }
                @media (min-width: 1200px) {
                    flex: 0 0 ${lgFlexBase};
                    max-width: ${lgFlexBase};
                }
            `
        }

        return `
            ${itemStyle}
            ${responsiveStyle}
        `
    }

    return ''
}

export {
    getIEGridContainerStyle,
    getIEGridItemStyle,
}