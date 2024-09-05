"use client";
import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Portal } from "@mui/base/Portal";
import { FocusTrap } from "@mui/base/FocusTrap";
import { Button } from "@mui/base/Button";
import { unstable_useModal as useModal } from "@mui/base/unstable_useModal";
import Fade from "@mui/material/Fade";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "@crema/services/axios";

type modelProps = {
  modelOpen: boolean;
  modelClose: any;

  editid: any;
};
export default function Modelpopup({
  modelOpen,
  modelClose,
  editid,
}: modelProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => modelClose(!modelOpen);

  const [data,setData]=React.useState()

  

  const handleUpdate = async () => {

    // const initialState = {
    //   name: "",
    //   code: "",
    //   duration: "",
    //   resource: "",
    //   projectType: "",
    //   approvalStatus: "",
    //   projectStatus: "",
    //   noofsprint: "",
    // };

    const data = {
      name: "",
      code: "",
      duration: "",
      resource: "",
      projectType: "",
      approvalStatus: "",
      projectStatus: "",
      noofsprint: "",

      
    };

    try {
      console.log("chan");
      const response = await axios.patch(
        `/update-project-Details/${editid[0]?.id}`,
        data
      );
    } catch (error) {
      console.log("Data Cannot Updated", error);
    }

   

  };

  return (
    <div>
      <TriggerButton onClick={handleOpen}>Open modal</TriggerButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modelOpen}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={modelOpen}>
          <ModalContent sx={style}>
            <h2 id="transition-modal-title" className="modal-title"></h2>
            <div className="flex flex-col ">
              <div >
                <label className="font-medium text-lg w-32  text-gray-600  flex items-center ">
                  Name
                </label>
                <input
                  className="border-[2px] p-1 pl-2 border-zinc-300 rounded-lg w-full outline-none shadow-lg h-12 text-lg "
                  type="text"
                  placeholder={editid[0].name}
                />
              </div>

              <div >
                <label className="font-medium text-gray-600 text-lg w-32  flex items-center ">
                  Code
                </label>
                <input
                  className="border-[2px] p-1 pl-2 border-zinc-300 rounded-lg w-full outline-none shadow-lg h-12 text-lg  "
                  type="text"
                  placeholder={editid[0].code}
                />
              </div>

              <div>
                <label htmlFor="">Duration</label>
                <input type="text" placeholder={editid[0].duration}  className="border-[2px] p-1 pl-2 border-zinc-300 rounded-lg w-full outline-none shadow-lg h-12 text-lg " />
              </div>

              <div>
                <label htmlFor="">Resource</label>
                <input type="text" placeholder={editid[0].resource}  className="border-[2px] p-1 pl-2 border-zinc-300 rounded-lg w-full outline-none shadow-lg h-12 text-lg " />
              </div>

              <div>
                <label htmlFor="">Project Type</label>
                <input type="text" placeholder={editid[0].projectType}  className="border-[2px] p-1 pl-2 border-zinc-300 rounded-lg w-full outline-none shadow-lg h-12 text-lg " />
              </div>

              <div>
                <label htmlFor="">Approvel Status</label>
                <input type="text" placeholder={editid[0].approvalStatus}  className="border-[2px] p-1 pl-2 border-zinc-300 rounded-lg w-full outline-none shadow-lg h-12 text-lg " />
              </div>

              <div>
                <label htmlFor="">Project Status</label>
                <input type="text" placeholder={editid[0].projectStatus}  className="border-[2px] p-1 pl-2 border-zinc-300 rounded-lg w-full outline-none shadow-lg h-12 text-lg " />
              </div>

              <div>
                <label htmlFor="">Number of Sprint</label>
                <input type="text" placeholder={editid[0]. noofsprint}  className="border-[2px] p-1 pl-2 border-zinc-300 rounded-lg w-full outline-none shadow-lg h-12 text-lg " />
              </div>



             

              <div className="flex w-full justify-center items-center text-xl rounded-xl h-11 text-white bg-zinc-500">
                <button onClick={handleUpdate}>Submit</button>
              </div>
            </div>

         
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
}

interface ModalProps {
  children: React.ReactElement;
  closeAfterTransition?: boolean;
  container?: Element | (() => Element | null) | null;
  disableAutoFocus?: boolean;
  disableEnforceFocus?: boolean;
  disableEscapeKeyDown?: boolean;
  disablePortal?: boolean;
  disableRestoreFocus?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  keepMounted?: boolean;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  onTransitionEnter?: () => void;
  onTransitionExited?: () => void;
  open: boolean;
}

const Modal = React.forwardRef(function Modal(
  props: ModalProps,
  forwardedRef: React.ForwardedRef<HTMLElement>
) {
  const {
    children,
    closeAfterTransition = false,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onClose,
    open,
    onTransitionEnter,
    onTransitionExited,
    ...other
  } = props;

  const propsWithDefaults = {
    ...props,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted,
  };

  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    portalRef,
    isTopModal,
    exited,
    hasTransition,
  } = useModal({
    ...propsWithDefaults,
    rootRef: forwardedRef,
  });

  const classes = {
    hidden: !open && exited,
  };

  const childProps: {
    onEnter?: () => void;
    onExited?: () => void;
    tabIndex?: string;
  } = {};
  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = "-1";
  }

  // It's a Transition like component
  if (hasTransition) {
    const { onEnter, onExited } = getTransitionProps();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }

  const rootProps = {
    ...other,
    className: clsx(classes),
    ...getRootProps(other),
  };

  const backdropProps = {
    open,
    ...getBackdropProps(),
  };

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  return (
    <Portal ref={portalRef} container={container} disablePortal={disablePortal}>
      {/*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */}
      <CustomModalRoot {...rootProps}>
        {!hideBackdrop ? <CustomModalBackdrop {...backdropProps} /> : null}
        <FocusTrap
          disableEnforceFocus={disableEnforceFocus}
          disableAutoFocus={disableAutoFocus}
          disableRestoreFocus={disableRestoreFocus}
          isEnabled={isTopModal}
          open={open}
        >
          {React.cloneElement(children, childProps)}
        </FocusTrap>
      </CustomModalRoot>
    </Portal>
  );
});

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
  (props, ref) => {
    const { open, ...other } = props;
    return (
      <Fade in={open}>
        <div ref={ref} {...other} />
      </Fade>
    );
  }
);

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  
};

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const CustomModalRoot = styled("div")`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomModalBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const TriggerButton = styled(Button)(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);
