import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
	const CLIENT_ID = "f2e286ece2574ad6b334b55d03764483"
	const REDIRECT_URI = "http://localhost:3000"
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
	const RESPONSE_TYPE = "token"

	const [token, setToken] = useState('')
	const [searchKey, setSearchKey] = useState('')
	const [artists, setArtist] = useState([])

	useEffect(() => {
		const hash = window.location.hash
		let token = window.localStorage.getItem('token')

		console.log(hash, window.location);

		if(!token && hash) {
			token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

			window.location.hash = ""
			window.localStorage.setItem('token', token)
		}
		
		setToken(token)

	}, []);

	const logout = () => {
		setToken("")
		window.localStorage.removeItem('token')
	}

	const searchArtist = async (e) => {
		e.preventDefault()

		const {data} = await axios.get('https://api.spotify.com/v1/search', {
			headers: {
				Authorization: `Bearer ${token}`
			},
			params: {
				q: searchKey, 
				type: "artist"
			}
		})

		console.log(data.artists.items);
		setArtist(data.artists.items)		
	}

	const renderArtist = () => {
		return artists.map(artist => {
			return <div key={artist.id} >
				{artist.images.length ? <img width={"500px"} height={"400px"} src={artist.images[0].url} alt=""/> : <div>no images</div> }
				{artist.name}
			</div>
		})
	}

	return (
		<div className="App">
			<Typography>Spotify React</Typography>
			{!token ? 
				<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
				:
				<button onClick={logout} >Logout</button>
			}

			{token ? 
				<form onSubmit={searchArtist} >
					<input type="text" onChange={e => setSearchKey(e.target.value)} />
					<button type="submit" >Search</button>
				</form> : 
				<span>Please Log in</span>
			}

			{renderArtist()}

		</div>
	);
}

export default App;
