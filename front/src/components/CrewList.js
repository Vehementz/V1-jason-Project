import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import "./crewList.css";

function CrewList() {
	const [members, setMembers] = useState([]);
	const crewListUrl = "http://localhost:8000/api/crew";

		useEffect (() => {
			axios
			.get(crewListUrl)
			.then((res) => res.data)
			.then((data) => setMembers(data))
		}, [] )

	return (
		<div className="crewList">
            <div className="menberName">
			{members.map((crew) => (
				<div key={crew.memberId}>
				<p> {crew.name} </p>
				</div>
			))}
            </div>

		</div>
)}

export default CrewList