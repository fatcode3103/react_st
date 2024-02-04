import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
function ModalDetail({ data = {}, isOpen, setIsOpen }) {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 500 }}>
                <h1 className="text-2xl" id="child-modal-title">
                    User detail
                </h1>
                <div className="mt-5 gap-2 flex flex-col">
                    <p>- Name: {data.name}</p>
                    <p>- Age: {data.age}</p>
                    <p>- Role: {data?.role || "null"}</p>
                    <p>
                        - Permissions:{" "}
                        {data.permission.length > 0
                            ? data.permission.join(", ")
                            : "null"}
                    </p>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalDetail;
