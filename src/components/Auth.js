import React from 'react';

import { Image, Card, Button, Form } from 'react-bootstrap';
import Login from './Login.js';
import Register from './Register.js';

import '../styles/Auth.css';

import { Routes, Route, Navigate } from "react-router-dom";

export default function Auth() {
	return (
		<>
			<Image
				src={require('../assets/hero.jpg')}
				className="auth-background">
			</Image>

			<div className="fixed h-100 w-100">
				<Routes>
		            <Route path="login" element={<Login/>}/>
		            <Route path="register" element={<Register/>}/>
		            <Route path="*" element={<Navigate to="login"/>} />
		        </Routes>
			</div>
		</>
	)
}