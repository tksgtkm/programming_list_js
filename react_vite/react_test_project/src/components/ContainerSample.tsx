import React from "react"

type ContainerProps = {
    title: string
    children: React.ReactNode
}

const Container = (_props: ContainerProps): JSX.Element => {
    const {title, children} = _props

    return (
        <div style={{ background: 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title='Hello'>
            <p>ここの部分が背景色に囲まれます</p>
        </Container>
    )
}

export default Parent