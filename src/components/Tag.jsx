/* eslint-disable react/prop-types */
import classNames from "classnames";
import { camelCase, startCase } from "lodash";

function Tag({
    type = "none",
    label = "",
    className = "inline py-1 px-2 text-xs rounded w-fit",
    ...props
}) {
    if (!label) {
        return null;
    }

    const classes = classNames(className, {
        "bg-green-100 text-green-800": type === "success",
        "bg-red-100 text-red-800": type === "error",
        "bg-yellow-100 text-yellow-800": type === "warning",
        "bg-blue-100 text-blue-800": type === "info",
        "bg-gray-100 text-gray-900": type === "none",
    });

    return (
        <div {...props} className={classes}>
            {startCase(camelCase(label))}
        </div>
    );
}

export default Tag;
