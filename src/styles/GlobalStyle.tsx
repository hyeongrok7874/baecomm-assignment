import { Global, css, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const { color } = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        }

        body {
          background-color: ${color.pink};
          overscroll-behavior-y: none;
        }

        html {
          @media (max-width: 450px) {
            font-size: 12px;
          }

          @media (max-width: 340px) {
            font-size: 10px;
          }
        }
      `}
    />
  );
};
export default GlobalStyle;
