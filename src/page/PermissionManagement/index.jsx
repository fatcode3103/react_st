import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm } from "react-hook-form";
import { CiCircleMore } from "react-icons/ci";
import TextField from "@mui/material/TextField";

import Menu from "../../components/Menu";
import {
    getPermissionAction,
    postNewPermissionAction,
    deletePermissionAction,
    updatePermissionAction,
} from "../../redux/roleAction";

function PermissionManagement() {
    const [open, setOpen] = useState(false);
    const [dataEdit, setDataEdit] = useState(null);

    const { register, handleSubmit, setValue } = useForm();

    const { isLoading, permissions } = useSelector((state) => state.role);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPermissionAction());
    }, [dispatch]);

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
        if (dataEdit) {
            await dispatch(
                updatePermissionAction({ ...data, permissionId: dataEdit.id })
            );
        } else {
            await dispatch(postNewPermissionAction(data));
        }
        handleClose();
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setDataEdit(null);
        setOpen(false);
        setValue("name", "");
    };

    const handleEditPermission = (data) => {
        handleOpen();
        setValue("name", data.name);
        setDataEdit(data);
    };

    const handleDeletePermission = async (data) => {
        await dispatch(deletePermissionAction(data.id));
    };

    const menuOption = [
        { title: "Edit", handleClick: handleEditPermission },
        { title: "Delete", handleClick: handleDeletePermission },
    ];

    return (
        <div className="p-10">
            <h1 className="text-orange-600 text-center text-4xl mb-10">
                Role management
            </h1>
            <table className="w-full bg-white border border-gray-300 shadow-md">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Id</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {permissions &&
                        permissions.length > 0 &&
                        permissions.map((item, index) => {
                            return (
                                <tr
                                    key={item.id}
                                    className={index % 2 === 0 && `bg-gray-100`}
                                >
                                    <td className="text-center py-2 px-4 border-b">
                                        {item.id}
                                    </td>
                                    <td className="text-center py-2 px-4 border-b">
                                        {item.name}
                                    </td>
                                    <td className="text-center py-2 px-4 border-b">
                                        <Menu
                                            data={item}
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
                    + New permission
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
                        {dataEdit ? "Update permission" : "Add new permission"}
                    </Typography>
                    <div className="grid grid-cols-1">
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField
                                {...register("name")}
                                size="small"
                                label="Name"
                                placeholder="Read"
                                multiline
                            />
                        </Typography>
                    </div>
                    <div className="text-right mt-6">
                        <Button
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
                            {dataEdit ? "Update" : "Save"}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default PermissionManagement;
