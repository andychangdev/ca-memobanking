export const validateUsername = (userInput) => {
  if (userInput.length < 3 || userInput.length > 15) {
    return "Username must be between 3 and 15 characters.";
  }
  if (!/^[a-zA-Z0-9]+$/.test(userInput)) {
    return "Username can only contain letters and numbers.";
  }
  return "";
};

export const validateGivenName = (userInput, value) => {
    if (userInput.length < 1 || userInput.length > 20) {
      return `${value} must be between 1 and 20 characters.`;
    }
    if (/\s/.test(userInput)) {
      return `${value} cannot contain spaces.`;
    }
    if (!/^[a-zA-Z\-']+$/.test(userInput)) {
      return `${value} can only contain letters`;
    }
    return "";
  };

export const validatePassword = (userInput) => {
    if (userInput.length < 8) {
        return 'Password must be at least 8 characters long.';
      }
    return "";
};