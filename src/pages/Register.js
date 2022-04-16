import React, { useState } from 'react';

import { Image, Card, Button, Form, Alert } from 'react-bootstrap';

import '../styles/Auth.css';

import { Link, useNavigate } from "react-router-dom";

import { authApi } from '../api/authApi.js'

export default function Register() {
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [repassword, setRepassword] = useState();
	const [error, setError] = useState(false);
	const [message, setMessage] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (repassword != password) {
			setError(true);
	        setMessage("Retyped password does not match.");
	        return;
		}

		try {
			const res = await authApi.register({ email, username, password });
			console.log(res);
	    	if (res.statusCode === 200) {
	        	setError(false);
	        	setMessage(res.msg);
	        	setTimeout(() => {
	        		navigate("/");
	        	}, 1000);
	    	}
	    	else {
	        	setError(true);
	        	setMessage(res.msg);
	      	}
		}
		catch (error) {
			setError(true);
			setMessage("Something is wrong.");
			console.log(error);
		}
	}

	return (
		<Card className="auth-card">
		  <Card.Header as="h5" className="text-center">Register</Card.Header>
		  <Card.Body>
		  	
			 <Form className="justify-content-center align-items-center" onSubmit={handleSubmit}>
			  <Form.Group className="mb-3">
			    <Form.Control
			    	type="email"
			    	placeholder="Email"
			    	value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
			  </Form.Group>

			  <Form.Group className="mb-3">
			    <Form.Control
			    	type="text"
			    	placeholder="Username"
			    	value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
			  </Form.Group>

			  <Form.Group className="mb-3">
			    <Form.Control
			    	type="password"
			    	placeholder="Password"
			    	value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
			  </Form.Group>
			  <Form.Group className="mb-3">
			    <Form.Control
			    	type="password"
			    	placeholder="Retype Password"
			    	value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                    required
                />
			  </Form.Group>

			  <Form.Group className="mb-3" className="text-center">
			    <Button variant="primary" type="submit" className="mx-auto">
					Submit
				</Button>
			  </Form.Group>
			</Form>

			{ message && <Alert variant={`${error? "danger" : "success"}`} className="mt-2">
				{message}
			</Alert> }


			<div className="auth-footer-link">
				<Link to="/auth/login">
					<small>Already has an account?</small>
				</Link>
			</div>

		  </Card.Body>
		</Card>
	)
}