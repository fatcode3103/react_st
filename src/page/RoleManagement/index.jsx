import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleMore } from "react-icons/ci";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

import Menu from "../../components/Menu";
import {
    getRolesAction,
    getPermissionAction,
    postNewRoleAction,
    deleteRoleAction,
} from "../../redux/roleAction";
import SelectMulti from "../../components/SelectMulti";
import Tag from "../../components/Tag";
import getRandomType from "../../components/randomType";

function RoleManagement() {
    const [open, setOpen] = useState(false);
    const [permissionArray, setPermissionArray] = useState(null);
    const [permissionSelected, setPermissionSelected] = useState([]);

    const { roles, isLoading, permissions } = useSelector(
        (state) => state.role
    );
    const dispatch = useDispatch();

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = async (data) => {
        await dispatch(
            postNewRoleAction({ ...data, permissionId: permissionSelected })
        );
        await dispatch(getRolesAction());
        handleClose();
    };

    useEffect(() => {
        dispatch(getRolesAction());
        dispatch(getPermissionAction());
    }, [dispatch]);

    useEffect(() => {
        buildSelect(permissions);
    }, [permissions]);

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

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setValue("name", "");
        setPermissionSelected([]);
        setOpen(false);
    };

    const handleClickDetail = () => {
        console.log("detail");
    };

    const handleDeleteRole = async (data) => {
        await dispatch(deleteRoleAction(data.id));
    };

    const handleEditRole = () => {};

    const buildSelect = (data) => {
        const options = [];
        if (data && data.length > 0) {
            data.forEach((item) => {
                let obj = {};
                obj.label = item.name;
                obj.value = item.id;
                options.push(obj);
            });
        }
        setPermissionArray(options);
    };

    const menuOption = [
        { title: "Detail", handleClick: handleClickDetail },
        { title: "Edit", handleClick: handleEditRole },
        { title: "Delete", handleClick: handleDeleteRole },
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
                        <th className="py-2 px-4 border-b">Permission</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {roles &&
                        roles.length > 0 &&
                        roles.map((item, index) => {
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
                                        {item.namePermission &&
                                        item.namePermission.length > 0
                                            ? item.namePermission.map(
                                                  (item, index) => (
                                                      <div
                                                          key={index}
                                                          className="inline-block mx-2"
                                                      >
                                                          <Tag
                                                              type={getRandomType()}
                                                              label={item}
                                                          />
                                                      </div>
                                                  )
                                              )
                                            : "-"}
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
                    + New role
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
                        Add new role
                    </Typography>
                    <div className="grid grid-cols-1">
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
                            <SelectMulti
                                label="Permission"
                                options={permissionArray}
                                setValueSelected={setPermissionSelected}
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
                            Save
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default RoleManagement;
