const styles = {
    container: (provided) => ({
      ...provided,
      width: '17.5vw',
      fontSize: '2vw',
      "@media only screen and (max-width: 1200px)": {
        ...styles["@media only screen and (max-width: 1200px)"],
        width: '100%',
        fontSize: '16px',
    },
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#97bcff',
      border: 'solid #0a369d 0px',
      borderRadius: '0px',
      boxShadow: 'none'
    }),
    placeholder: (provided) => ({
      ...provided,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
    }),
    input: (provided, state) => ({
      ...provided,
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
    }),
    menu: (provided) => ({
      ...provided,
      transition: 'all .25s ease',
      backgroundColor: '#eef4ff',
    }),
  };

export default styles ;