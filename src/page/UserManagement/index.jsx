import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleMore } from "react-icons/ci";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";

import {
    getUsersAction,
    postUserAction,
    deleteUserAction,
    updateUserAction,
} from "../../redux/userAction";
import { getRolesAction } from "../../redux/roleAction";
import Menu from "../../components/Menu";
import ModalDetail from "./ModalDetail";

function UserManagement() {
    const [open, setOpen] = useState(false);
    const [userEditClicked, setUserEditClicked] = useState(null);
    const [isShowDetail, setIsShowDetail] = useState(false);
    const [roleOption, setRoleOption] = useState([]);
    const [roleSelected, setRoleSelected] = useState("");

    const { users, isLoading } = useSelector((state) => state.user);
    const { roles } = useSelector((state) => state.role);
    const dispatch = useDispatch();

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        dispatch(getUsersAction());
        dispatch(getRolesAction());
    }, [dispatch]);

    useEffect(() => {
        buildSelect(roles);
    }, [roles]);

    useEffect(() => {
        if (userEditClicked) {
            setValue("name", userEditClicked.name);
            setValue("age", userEditClicked.age);
            setRoleSelected(userEditClicked.roleId);
        }
    }, [userEditClicked, setValue]);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
    };

    const onSubmit = async (data) => {
        if (userEditClicked) {
            await dispatch(
                updateUserAction({
                    ...data,
                    roleId: roleSelected,
                    id: userEditClicked.id,
                })
            );
        } else {
            await dispatch(postUserAction({ ...data, roleId: roleSelected }));
        }
        handleClose();
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setUserEditClicked(null);
        setOpen(false);
        setValue("name", "");
        setValue("age", "");
        setRoleSelected("");
    };

    const buildSelect = (data) => {
        const options = [];
        if (data && data.length > 0) {
            data.forEach((item) => {
                let obj = {};
                obj.label = item.name;
                obj.value = item.roleId;
                options.push(obj);
            });
        }
        setRoleOption(options);
    };

    const handleClickDetail = () => {
        setIsShowDetail(true);
    };

    const handleDeleteUser = (user) => {
        dispatch(deleteUserAction(user.id));
    };

    const handleClickEdit = (user) => {
        handleOpen();
        setUserEditClicked(user);
    };

    const menuOption = [
        { title: "Detail", handleClick: handleClickDetail },
        { title: "Edit", handleClick: handleClickEdit },
        { title: "Delete", handleClick: handleDeleteUser },
    ];

    return (
        <div className="p-6">
            <h1 className="text-orange-600 text-center text-4xl mb-10">
                User management
            </h1>
            <table className="w-full bg-white border border-gray-300 shadow-md">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Id</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Age</th>
                        <th className="py-2 px-4 border-b">Role</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.length > 0 &&
                        users.map((item) => {
                            return (
                                <tr key={item.id} className="bg-gray-100">
                                    <td className="text-center py-2 px-4 border-b">
                                        {item.id}
                                    </td>
                                    <td className="text-center py-2 px-4 border-b">
                                        {item.name}
                                    </td>
                                    <td className="text-center py-2 px-4 border-b">
                                        {item.age}
                                    </td>
                                    <td className="text-center py-2 px-4 border-b">
                                        {item?.role || "-"}
                                    </td>
                                    <td className="text-center py-2 px-4 border-b">
                                        <Menu
                                            user={item}
                                            menuOption={menuOption}
                                        >
                                            <CiCircleMore className="m-auto text-2xl cursor-pointer" />
                                        </Menu>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <div className="mt-6">
                <Button onClick={handleOpen} variant="contained">
                    + New user
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {userEditClicked ? "Edit User" : "Add new user"}
                    </Typography>
                    <div className="grid grid-cols-2">
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField
                                {...register("name")}
                                size="small"
                                label="Name"
                                placeholder="Nguyen Van A"
                                multiline
                            />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField
                                {...register("age")}
                                size="small"
                                label="Age"
                                placeholder="20"
                                multiline
                            />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <FormControl sx={{ minWidth: 120 }} size="small">
                                <InputLabel>Role</InputLabel>
                                <Select
                                    value={roleSelected}
                                    label="Role"
                                    onChange={(e) =>
                                        setRoleSelected(e.target.value)
                                    }
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {roleOption &&
                                        roleOption.length > 0 &&
                                        roleOption.map((item, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    value={item.value}
                                                >
                                                    <span>{item.label}</span>
                                                </MenuItem>
                                            );
                                        })}
                                </Select>
                            </FormControl>
                        </Typography>
                    </div>
                    <div className="text-right mt-6">
                        <Button
                            loading
                            onClick={handleSubmit(onSubmit)}
                            variant="contained"
                        >
                            {isLoading && (
                                <CircularProgress
                                    color="inherit"
                                    size={20}
                                    sx={{ marginRight: "10px" }}
                                />
                            )}
                            {userEditClicked ? "Update" : "Save"}
                        </Button>
                    </div>
                </Box>
            </Modal>
            <ModalDetail isOpen={isShowDetail} setIsOpen={setIsShowDetail} />
        </div>
    );
}

export default UserManagement;
