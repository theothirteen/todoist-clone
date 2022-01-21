function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: withOpacity('--color-primary'),
        'on-primary': withOpacity('--color-on-primary'),
        background: withOpacity('--color-background'),
        'on-background': withOpacity('--color-on-background'),
        'on-background-varient': withOpacity('--color-on-background-varient'),
        'on-background-varient-2': withOpacity(
          '--color-on-background-varient-2'
        ),
        'on-background-border-varient': withOpacity(
          '--color-on-background-border-varient'
        ),
        'on-background-border-varient-2': withOpacity(
          '--color-on-background-border-varient-2'
        ),
        'on-background-border-varient-3': withOpacity(
          '--color-on-background-border-varient-3'
        ),

        surface: withOpacity('--color-surface'),
        'on-surface': withOpacity('--color-on-surface'),
      },
    },
  },
  plugins: [],
};
