export const textfieldStyle = {
  '& .MuiInputBase-input': {
    color: '#000000', // 入力文字の色
  },
  '& label': {
    color: '#AAAAAA', // 通常時のラベル色
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#CCCCCC', // 通常時のボーダー色
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: '#DDDDDD', // ホバー時のボーダー色
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#CCCCCC', // 通常時のボーダー色(アウトライン)
    },
    '&:hover fieldset': {
      borderColor: '#DDDDDD', // ホバー時のボーダー色(アウトライン)
    },
  },
};
