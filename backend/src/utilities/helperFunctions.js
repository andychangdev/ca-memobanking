const validateFields = (fields) => {
    for (const key in fields) {
      if (!fields[key]) {
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
        return { status: 400, message: `${capitalizedKey} is required` };
      }
    }
    return null;
  };
  
  module.exports = { validateFields };