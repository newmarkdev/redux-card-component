import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-radius: 6px;
    background-color: white;
    `

const Title = styled.h1`
    font-size: 24px; 
    margin: 0;
`

const SecondaryText = styled.p `
    margin: 0; 
    color: grey;
`

const Thumbnail = styled.div `
    border-radius: 50%50%;
    width: 70px;
    height: 70px;
    background-size: cover;
    margin-right: 10px;
    background-image: url(${(props) => props.url})
`
const TitleBar = styled.div `
    display: flex;
    align-items: center;
`

const CoverImage = styled.img`
    width: 100%;
    border-radius:6px 6px 0 0;
`

const Content = styled.div`
    padding: 20px
`

export const Card = ({title, secondaryText, thumbnailUrl, coverImage }) => {
    return (
        <Container>
            { coverImage && <CoverImage src={coverImage}/> } 
            <Content>
                <TitleBar>
                    {thumbnailUrl && <Thumbnail url={thumbnailUrl}/>}
                    <div>
                        {title && <Title>{title}</Title>}
                        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
                    </div>
                </TitleBar>
            </Content>
        </Container>
    )
}