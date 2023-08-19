import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        &, &.light-theme{
            // light theme
            --color-gray-0: #fff;
            --color-gray-50: #f8fafc;
            --color-gray-100: #f1f5f9;
            --color-gray-200: #e2e8f0;
            --color-gray-300: #cbd5e1;
            --color-gray-400: #94a3b8;
            --color-gray-500: #94a3b8;
            --color-gray-600: #475569;
            --color-gray-700: #334155;
            --color-gray-800: #1e293b;
            --color-gray-900: #0f172a;
        }

        --color-primary-50:#f0f9ff;
        --color-primary-100: #e0f2fe;
        --color-primary-200:#bae6fd;
        --color-primary-300: #7dd3fc;
        --color-primary-400:#38bdf8;
        --color-primary-500: #0ea5e9;
        --color-primary-600:#0284c7;
        --color-primary-700:#0369a1;
        --color-primary-800: #075985;
        --color-primary-900: #0c4a6e;

        --color-red-light: #fecdd3;
        --color-red-dark: #be123c;

        --color-green-light: #bbf7d0;
        --color-green-medium: #4ade80;
        --color-green-dark: #16a34a;
    }

    // GLOBAL RESET
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
    }

    html {
    font-size: 62.5%;
    }

    body {
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1rem;

    background-color: var(--color-primary-50);
    }

    @media (min-width: 1200px){
        body{
            font-size: 1.6rem;
        }
    }

    input,
    button,
    textarea,
    select {
    font: inherit;
    color: inherit;
    }

    button {
    cursor: pointer;
    }

    *:disabled {
    cursor: not-allowed;
    }

    select:disabled,
    input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
    }

    input:focus,
    button:focus,
    textarea:focus,
    select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
    }

    button:has(svg) {
    line-height: 0;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    ul {
    list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    overflow-wrap: break-word;
    hyphens: auto;
    }

    img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
    }
`;
