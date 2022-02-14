module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      spacing: {
        '232': '58rem',
        '72': '18rem',
        '92': '23rem',
        '101': '25rem',
        '120': '30rem',
        '160':'37rem',
        '180': '45rem',
        '68': '17rem'
      },
      colors:{
        white:'#FFFFFF',
        orange: {
          100:'#FEEDD3',
          200:'#FE7865',
          300:'#E6604D',
          400:'#F55C46'
        },
        blue:{
          100: '#F5F8FC',
          200: '#EFEDFE',
          300: '#5BD5E6'
        },
        green:{
          100:'#FFFBF8',
          200:'#E8FBF7',
          300:'#5BE6B0'
        },
        gray:{
          100:'#ECECEE',
          200:'#DFDAFE',
          300:'#83838B',
          400:'#F2F2F4'
         
        },
        pink:{
          100:'#FEDAE8'
        },
        black:{
          100:'#2C2E3F',
          200:'#141517',
          300:'#2C2E3F',
          400:'#1D2539'
        },
        yellow:{
          100:'#FEC365'
        }
      },
      screens: {
        'slg': '300px',
        'mm':'693px',
        'slgp': '1080px'
      }
    },
  },
  plugins: [],
}
