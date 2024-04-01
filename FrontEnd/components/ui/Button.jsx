import {cva} from "class-variance-authority";
import PropTypes from 'prop-types';
import {cn} from "@/utils/cn.util";

export default function Button({className, variant, onClick,...props}) {
    return <button className={cn(buttonVariants({variant}), className)} {...props} onClick={onClick}/>;
}

const buttonVariants = cva("py-2 px-4 rounded-md font-semibold hover:opacity-50",{
    variants: {
        variant: {
            primary: "bg-shark-500 text-white",
            secondary: "bg-shark-100 text-shark-400",
        },
    },
    defaultVariants: {
        variant: "primary"
    }
});

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func
};


