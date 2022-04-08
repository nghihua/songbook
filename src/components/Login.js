import React from 'react';

import { Image, Card, Button, Form } from 'react-bootstrap';

import '../styles/Auth.css';

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
	return (
		<Card className="auth-card">
		  <Card.Header as="h5" className="text-center">Login</Card.Header>
		  <Card.Body>
		  	
			 <Form>
			  <Form.Group className="mb-3" controlId="formBasicEmail">
			    <Form.Control type="email" placeholder="Enter email" />
			    <Form.Text className="text-muted">
			      We'll never share your email with anyone else.
			    </Form.Text>
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="formBasicPassword">
			    <Form.Control type="password" placeholder="Password" />
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="formBasicCheckbox">
			    <Form.Check type="checkbox" label="Check me out" />
			  </Form.Group>
			  <Form.Group className="mb-3" className="text-center">
			    <Button variant="primary" type="submit" className="mx-auto">
					Submit
				</Button>
			  </Form.Group>
			</Form>

			<div className="footer-link">
				<Link to="/auth/register">
					<small>Create new account</small>
				</Link>
			</div>
			

		  </Card.Body>
		</Card>
	)
}