function NumberedTitle(props) {
  let { children = "colors", number = "01" } = props;
  return (
    <h2 className="text-white md:text-xl lg:text-3xl tracking-[2.7px] md:tracking-[4.75px] numbered-title uppercase   font-barlow-condensed font-normal  space-x-2">
      <span className="text-white/25 font-semibold ">{number}</span>
      <span className="space-x-9">{children}</span>
    </h2>
  );
}
export default NumberedTitle;
