'use client';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 200px;
`;

export const CustomModal = styled.div`
	position: fixed;
	z-index: 6;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(3px);
	.content {
		width: 40%;
		height: 30vw;
		margin: 15% auto;
		display: flex;
		flex-direction: column;
		min-width: 400px;
		min-height: 300px;
		border: 5px solid ${(props) => props.theme.contrastDark};
		box-shadow: 15px 15px 0 ${(props) => props.theme.contrastDark};
		max-width: 600px;
		max-height: 130vw;
		background-color: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.lightColor : props.theme.Darkcolor};
		border-radius: 3px;

		@media screen and (max-width: 980px) {
			height: 100vw;
			width: 70vw;
			min-width: 30vw;
			max-width: 70vw;
		}
	}
	.header {
		background-color: ${(props) => props.theme.lightColor};
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		user-select: none;
		z-index: 1;
		box-shadow: 0px 5px 6px -2px ${(props) => (props.theme.mode === 'Dark' ? '#4245495e' : '#99c0ff5e')};
	}

	.btn {
		cursor: pointer;
		background-color: ${(props) => props.theme.contrastDark};
		width: 20px;
		height: 20px;
		border: none;
		padding: 0;
		margin: 0;
		border-radius: 5px;
		opacity: 0.8;
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${(props) => props.theme.lightColor};

		&:hover {
			opacity: 1;
		}
	}

	.body {
		flex-grow: 1;
		padding: 1em;
		overflow-y: auto;
		scrollbar-color: ${(props) => props.theme.contrastDark} ${(props) => props.theme.lightColor};
		scrollbar-width: thin;

		&::-webkit-scrollbar {
			width: 6px;
			height: 6px;
			background-color: ${(props) => props.theme.lightColor};
		}

		&::-webkit-scrollbar-thumb {
			background: ${(props) =>
				props.theme.mode === 'Dark' ? props.theme.Darkcolor : props.theme.contrastDark};
		}
	}
	.btn-wrapper {
		display: flex;
		gap: 2em;
		justify-content: flex-end;
	}
	.status-bar {
		padding: 1em 0.5em;
		font-size: 0.75rem;
		color: ${(props) => props.theme.color};
		height: 1em;
		width: 100%;
		position: relative;
		background-color: ${(props) => props.theme.lightColor};
	}
`;
