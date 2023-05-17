'use client';
import { CustomModal } from '@/app/about/about.styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ModalComp() {
	const router = useRouter();

	const handleModal = () => {
		router.back();
	};
	return (
		<div>
			<CustomModal>
				<div className="content">
					<div className="header">
						Kontakt
						<div className="btn" onClick={handleModal}>
							x
						</div>
					</div>
					<div className="body">
						Kontaktformular
						<div className="btn-wrapper">
							
								Send
						
						</div>
					</div>
					<div className="status-bar">
						<Image alt="Logo" src="/techChase.svg" fill priority />
					</div>
				</div>
			</CustomModal>
		</div>
	);
}
