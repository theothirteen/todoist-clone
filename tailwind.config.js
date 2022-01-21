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
      textColor: {
        skin: {
          primary: withOpacity('--color-text-primary'),
          secondary: withOpacity('--color-text-secondary'),
          inverted: withOpacity('--color-text-inverted'),
          hover: withOpacity('--color-text-primary-hover'),
          'icon-primary': withOpacity('--color-icon-primary'),
          'icon-accent-hover': withOpacity('--color-text-inverted'),
          'icon-accent': withOpacity('--color-text-hover'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-muted': withOpacity('--color-button-muted'),
          'button-muted-hover': withOpacity('--color-button-muted-hover'),
        },
      },
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
