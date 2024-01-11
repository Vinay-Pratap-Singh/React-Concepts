import React, { useState } from "react";
import { IModalProps } from "../helper/interface";
import { sizeVariant } from "../helper/constants";

const Modal = ({
	content,
	header,
	confirmHandler,
	size = "sm",
}: IModalProps) => {
	const modalSize: string =
		sizeVariant[size] + "px" || sizeVariant["sm"] + "px";
	const [isOpen, setIsOpen] = useState(false);

	// function to handle confirm button click
	const handleConfirm = () => {
		confirmHandler();
		setIsOpen(false);
	};

	return (
		<div>
			{/* modal button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className="py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-300 font-semibold transition-all duration-300 ease-in-out"
			>
				Show Modal
			</button>

			{/* modal wrapper */}
			<div
				className={`${
					isOpen ? "flex" : "hidden"
				} w-screen h-screen items-center justify-center bg-gray-50 absolute top-0 left-0`}
			>
				{/* modal code */}
				<div
					style={{ width: modalSize }}
					className={`flex flex-col items-center gap-5 p-4 rounded-md shadow-md border-2 shadow-slate-100`}
				>
					<h1 className="text-xl font-semibold text-center">
						{header}
					</h1>
					<p className="text-medium">{content}</p>
					<div className="flex items-center justify-between w-full">
						<button
							onClick={() => setIsOpen(false)}
							className="w-full py-2 mr-4 px-4 rounded-md bg-slate-200 hover:bg-slate-300 font-semibold transition-all duration-300 ease-in-out"
						>
							Decline
						</button>
						<button
							className="w-full py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 ease-in-out"
							onClick={handleConfirm}
						>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
