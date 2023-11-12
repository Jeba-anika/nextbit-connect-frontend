type NBButtonProps = {
    children: React.ReactNode | React.ReactElement,
    onClickHandler?: ()=> void,
    className?: string,
    style?: object
}

const NBButton = ({children, onClickHandler, className, style}: NBButtonProps) => {
    return (
        <button className={`${className} px-10 py-3 rounded-xl text-white font-bold border-none bg-[#B9314F] hover:bg-[#c24863]`} style={{...style}} onClick={onClickHandler}>{children}</button>
    );
};

export default NBButton;