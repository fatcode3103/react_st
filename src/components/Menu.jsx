import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function MenuWrapper({ children, menuOption = [], user = {} }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                {children}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {menuOption &&
                    menuOption.length > 0 &&
                    menuOption.map((item, index) => (
                        <MenuItem
                            key={index}
                            onClick={() => item.handleClick(user)}
                        >
                            {item.title}
                        </MenuItem>
                    ))}
            </Menu>
        </div>
    );
}
