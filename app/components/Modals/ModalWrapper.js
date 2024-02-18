import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ModalWrapper = ({ title, Open, Icon, setOpen, children }) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 380,
        bgcolor: "background.paper",
        border: "3px solid #5A4AE3",
        borderRadius: "10px",
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="flex-col justify-center items-center">
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "bold" }}
                    className="flex justify-center items-center border-b-2 border-[#5A4AE3] pb-4 text-[#5A4AE3] "
                >
                    <Icon className="mr-[5px]" style={{ fontSize: "40px" }} />{" "}
                    {title}
                </Typography>

                <Typography
                    component={"div"}
                    id="modal-modal-description"
                    sx={{ mt: 3 }}
                >
                    {/* Form Portion */}
                    {/* Body of modal */}
                    <div className="flex-col justify-center items-center">
                        <form className="flex flex-col items-center justify-center w-[100%]">
                            {children}
                        </form>
                    </div>
                </Typography>
            </Box>
        </Modal>
    );
};

export default ModalWrapper;