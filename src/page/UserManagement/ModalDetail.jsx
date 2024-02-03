import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
function ModalDetail({ isOpen, setIsOpen }) {
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
                <h1 id="child-modal-title">User detail</h1>
                <div className="mt-5 gap-2 flex flex-col">
                    <p>- Name: </p>
                    <p>- Age: </p>
                    <p>- Role: </p>
                    <p>- Permission: </p>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalDetail;
