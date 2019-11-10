import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
`;

export const Input = styled.input.attrs(props => ({
    valid: props.valid,
}))`
    flex: 1;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    ${props =>
        props.valid
            ? css`
                  border: 1px solid #eee;
              `
            : css`
                  border: 1px solid #f00;
              `}
`;

const rotate = keyframes`
    from{
        transform:rotate(0deg)
    }
    to{
        transform:rotate(180deg);
    }
`;

export const ButtonSubmit = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #7139c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: solid 2px #eee;
        }

        a {
            font-size: 13px;
            text-decoration: none;
            background: #7139c1;
            color: #fff;
            width: 70px;
            height: 20px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Error = styled.div`
    margin: 15px auto;
    color: #933;
`;
