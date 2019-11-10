import styled from 'styled-components';

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        font-size: 15px;
        font-weight: bold;
        text-decoration: none;
        color: #fff;
        background: #7139c1;
        width: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        margin-bottom: 20px;
    }

    h2 {
        width: 100%;
        border-bottom: 1px solid #eee;
    }

    img {
        margin-top: 20px;
        width: 120px;
        border-radius: 50%;
    }

    h1 {
        font-size: 14px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;
    }

    & + li {
        margin-top: 10px;
    }

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        flex: 1;
        margin-left: 15px;

        strong {
            font-size: 16px;
        }

        a {
            text-decoration: none;
            color: #333;
        }

        &:hover {
            color: #7159c1;
        }

        span {
            background: #eee;
            color: #333;
            border-radius: 2px;
            font-size: 12px;
            font-weight: 600;
            height: 20px;
            padding: 3px 4px;
            margin-left: 10px;
        }

        p {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
        }
    }
`;

export const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 5px;
    align-items: center;

    p {
        color: #7139c1;
        font-weight: bold;
    }
`;

export const PrevButton = styled.button.attrs(props => ({
    type: 'button',
    disabled: props.active,
}))`
    border: none;
    background: #7139c1;
    color: #fff;
    border-radius: 14px;
    width: 70px;
    height: 30px;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export const NextButton = styled.button.attrs({
    type: 'button',
})`
    border: none;
    background: #7139c1;
    color: #fff;
    border-radius: 14px;
    width: 70px;
    height: 30px;
`;
