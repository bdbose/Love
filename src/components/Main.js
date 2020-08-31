/** @format */

import React, { useEffect, useState } from 'react';
import test from '../assets/01_1400.webp';
import back from '../assets/09.jpg';
import './style.css';
import ReactDOM from 'react-dom';
import backmusic from '../assets/music.mp3';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import card from '../assets/card.png';
const Text = [
	{
		msg: 'Happy 2 Years Anniversary!',
		style: '',
	},
	{
		msg: 'I Love You\nSharmistha!',
		style: '',
	},
	{
		msg: 'You Are My Everything \n My Soul \n My Nabu Jaan',
		style: '',
	},
];

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));
const Main = () => {
	const Click = (e) => {
		console.log(e.pageX, e.pageY);
		ReactDOM.render(
			<img id='mochamilk' height='200px' src={test} alt='' />,
			document.getElementById('float')
		);

		document.getElementById('float').style.top = e.pageY + 'px';
		document.getElementById('float').style.left = e.pageX + 'px';
	};
	const [rand, setRand] = useState(0);
	const [update, setUpdate] = useState(0);
	const random = async () => {
		await sleep(2000);
		setUpdate(Math.random());
		setRand(Math.floor(Math.random() * 3));
	};
	useEffect(() => {
		window.addEventListener('load', random());
	}, [update]);

	const [Notify, setNotify] = useState('');
	const Gift = () => {
		const data = document.getElementById('inpt').value;
		if (data === '310818' || data === '31082018') {
			setNotify('Ayy You Won The Gift!');
			console.log(Notify);
			handleClick();
			document.getElementById('inpt').value = '';
			down();
		} else if (data === '060599' || data === '06051999') {
			setNotify('Chummu nao Babuu');
			console.log(Notify);
			handleClick();
			document.getElementById('inpt').value = '';
		} else if (data === '020400' || data === '02042000') {
			setNotify('Sharmistha Amar Nabu!\nTumi Amr Shonna');
			console.log(Notify);
			handleClick();

			document.getElementById('inpt').value = '';
		} else {
			setNotify('Bhabo Bhabo ro Bhabo');
			console.log(Notify);
			handleClick();
		}
	};
	const [sound, setSound] = useState('Off');

	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	const down = () => {
		const url = window.URL.createObjectURL(new Blob([card]));
		const link = document.createElement('a');
		link.href = card;
		link.setAttribute('download', 'Card.png');
		document.body.appendChild(link);
		link.click();
	};
	return (
		<div className='main-wrapper'>
			<audio
				id='back-music'
				src={backmusic}
				onLoadStart={(e) => e.target.play()}
			/>
			<img src={back} id='background' alt='' onClick={(e) => Click(e)} />
			<div className='container' onClick={(e) => Click(e)}>
				{Text[rand].msg}
			</div>
			<div id='float'></div>
			<div className='secret'>
				<input
					id='inpt'
					placeholder='Enter Some Dates!'
					onKeyUp={(e) => {
						if (e.keyCode === 13) {
							Gift();
							e = '';
						}
					}}
				/>
			</div>
			<div
				className='sound'
				onClick={() => {
					if (sound === 'On') {
						document.getElementById('back-music').pause();
						setSound('Off');
					} else {
						document.getElementById('back-music').play();
						setSound('On');
					}
				}}>
				Sound : {sound}
			</div>
			<div className={classes.root}>
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity='success'>
						{Notify}
					</Alert>
				</Snackbar>
			</div>
		</div>
	);
};
export default Main;
