import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChannelDialog({
  channelInput,
  setChannelInput,
  open,
  handleClose,
  handleAddChannel,
}) {
  return (
    <Dialog
      style={{ width: "100%" }}
      TransitionComponent={Transition}
      keepMounted
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Add Channel</DialogTitle>
      <DialogContent>
        <TextField
          value={channelInput}
          onChange={e => setChannelInput(e.target.value)}
          autoFocus
          margin="dense"
          id="name"
          label="Channel Name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddChannel}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
