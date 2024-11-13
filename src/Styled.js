import styled from "styled-components";
import tw from "tailwind-styled-components"

export const Subtitle = styled.h1`
    font-size: 1.125rem /* 18px */ !important;
    line-height: 1.75rem /* 28px */ !important;
    width: fit-content !important;
    --tw-text-opacity: 1 !important;
    color: rgb(246 153 70 / var(--tw-text-opacity)) /* #f69946 */ !important;
    --tw-bg-opacity: 1 !important;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity)) /* #ffffff */ !important;
    padding-left: 1rem /* 16px */ !important;
    padding-right: 1rem /* 16px */ !important;
    padding-top: 0.25rem /* 4px */ !important;
    padding-bottom: 0.25rem /* 4px */ !important;
    margin-top: 1rem /* 16px */ !important;
    margin-bottom: 1rem /* 16px */ !important;
    border-radius: 0.5rem /* 8px */ !important;
    text-transform: uppercase !important;
    --tw-shadow: 4px 3px 9px 0px rgba(0, 0, 0, 0.1) !important;
    --tw-shadow-colored: 4px 3px 9px 0px var(--tw-shadow-color) !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
        cursor: default;
`;

export const TitleBig = styled.h1`
        cursor: default;
    font-size: 3rem !important;
    line-height: 1 !important;
    letter-spacing: -0.025em !important;
    --tw-text-opacity: 1 !important;
    color: rgb(86 71 65 / var(--tw-text-opacity)) /* #564741 */ !important;
    @media (min-width: 640px) {
        .sm\:text-4xl {
            font-size: 2.25rem /* 36px */ !important;
            line-height: 2.5rem /* 40px */ !important;
        }
    }
`;
export const TitleBig2xl = styled.h1`
        cursor: default;
    font-size: 2.5rem !important;
    line-height: 1 !important;
    letter-spacing: -0.025em !important;
    --tw-text-opacity: 1 !important;
    color: rgb(86 71 65 / var(--tw-text-opacity)) /* #564741 */ !important;
    @media (min-width: 640px) {
        .sm\:text-xl {
            font-size: 1.25rem /* 20px */ !important;
            line-height: 1.75rem /* 28px */ !important;
        }
    }
`;

export const Title = styled.p`
       
    font-size: 1rem /* 16px */ !important;
    line-height: 1.5rem /* 24px */ !important;
    font-weight: 400 !important;
    color: #616161 !important;
    padding-top: 16px;
`;
export const TitleSmall = styled.p`
        
    font-size: 15px !important;
    line-height: 1.5rem /* 24px */ !important;
    font-weight: 400 !important;
    color: #616161 !important;
`;

export const NameCard = tw.h1`
    text-2xl
    cursor-default
    ${(h1) => (h1.$primary ? "text-nau" : "text-white")}
`;

export const NameCardSmall = tw.h1`
    cursor-default
    text-xl
    text-nau
`;
