function Greeting({ name, ...platformProps}) {
    return (
        <div {...platformProps}>Good Afternoon, {name}</div>
    )
}

Greeting.defaultProps = {
  name: "Stranger",
};

export default Greeting;
