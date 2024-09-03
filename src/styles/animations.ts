import { keyframes } from "@chakra-ui/react";

export const slide = {
    up: {
        full: keyframes`
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        `,
        md: keyframes`
        from {
          transform: translateY(50%);
        }
        to {
          transform: translateY(0%);
        }
      `,
        sm: keyframes`
        from {
          transform: translateY(20%);
        }
        to {
          transform: translateY(0%);
        }
      `,
        appear: keyframes`
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
      `,
    },
    right: {
        header: keyframes`
            from {
                left: 6rem;
                transform: translateX(0%);
            }
            to {
                left: calc(100% - 190px);
                transform: translateX(-50%);
            }
        `,
        sm: keyframes`
            from {
                transform: translateX(-5%);
            }
            to {
                transform: translateX(0%);
            }
        `,
    },
    left: {
        sm: keyframes`
            from {
                transform: translateX(5%);
            }
            to {
                transform: translateX(0%);
            }
        `,
    },
};

export const opacity = {
    appear: keyframes`
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
    `,
    transparent: keyframes`
        from {
          opacity: 0;
        }
        to {
          opacity: 0.04;
        }
    `,
};

export const scale = {
    up: keyframes`
      0%{transform: scale(1);}
      40% {transform: scale(1.4);}
      60% {transform: scale(1.4);}
      100% {transform: scale(1);}
    `,
    down: keyframes`
      0%{transform: scale(1);}
      40% {transform: scale(0.8);}
      60% {transform: scale(0.8);}
      100% {transform: scale(1);}
    `,
};

export const bounce = {
    up: keyframes`
      0%{transform: translateY(0);}
      40% {transform: translateY(-8px);}
      60% {transform: translateY(-8px);}
      100% {transform: translateY(0);}
    `,
    down: keyframes`
      0%{transform: translateY(0);}
      40% {transform: translateY(8px);}
      60% {transform: translateY(8px);}
      100% {transform: translateY(0);}
    `,
    left: keyframes`
      0%{transform: translateX(0);}
      40% {transform: translateX(-6px);}
      60% {transform: translateX(-6px);}
      100% {transform: translateX(0);}
    `,
    right: keyframes`
      0%{transform: translateX(0);}
      40% {transform: translateX(6px);}
      60% {transform: translateX(6px);}
      100% {transform: translateX(0);}
    `,
};
