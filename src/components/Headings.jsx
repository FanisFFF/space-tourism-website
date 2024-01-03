function BaseHeading(props) {
  let { children = "Earth", className = "text-xs " } = props;
  return (
    <p
      className={`text-white tracking-normal uppercase ${className} font-bellefair`}
    >
      {children}
    </p>
  );
}

function Heading1({ children }) {
  return (
    <BaseHeading className="text-7xl md:text-[150px]">{children}</BaseHeading>
  );
}
function Heading2({ children }) {
  return (
    <BaseHeading className="text-6xl md:text-[80px]  lg:text-8xl">
      {children}
    </BaseHeading>
  );
}
function Heading3({ children }) {
  return (
    <BaseHeading className="text-2xl md:text-[40px] leading-normal lg:text-[56px]">
      {children}
    </BaseHeading>
  );
}
function Heading4(props) {
  let { children = "Earth" } = props;
  return (
    <p
      className={`text-white/50 text-base md:text-2xl lg:text-3xl tracking-normal uppercase font-bellefair`}
    >
      {children}
    </p>
  );
}
function Heading5({ children }) {
  return (
    <p
      className={`text-base tracking-[1.7px] text-theme-blue-400 md:tracking-[3.38px]  lg:tracking-[4.75px] md:text-xl lg:text-3xl uppercase font-barlow-condensed`}
    >
      {children}
    </p>
  );
}
function SubHeading1({ children }) {
  return <BaseHeading className="text-3xl">{children}</BaseHeading>;
}
function SubHeading2({ children }) {
  return (
    <p
      className={`text-theme-blue-400 tracking-[2.35px] text-sm uppercase font-barlow-condensed`}
    >
      {children}
    </p>
  );
}

export {
  BaseHeading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  SubHeading1,
  SubHeading2,
};
