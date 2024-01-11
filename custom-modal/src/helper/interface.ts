export interface IModalProps {
	header: string;
	content: string;
	size?: string;
	confirmHandler: () => void;
}

export interface IModalSize {
	width: number;
	height: number;
}
