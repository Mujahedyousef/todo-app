import React from 'react';
import { useState, useEffect } from 'react';
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const authContext = React.createContext();

export default function authProvider(props) {

    const [loggedIn, setLoggedIn] = useState(false); 
    const [user, setUser] = useState({ });
    
    const signup = async (user) => {
        try {
            const response = await superagent.post(`herokuLink`, user);
            console.log('signed up');
        } catch (error) {
            console.log(error);
        }
    }
    
    const logIn = async (username, password) => {
        try {
            const response = await superagent.post(`herokuLink`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
            validateToken(response.body);
        } catch (error) {
            console.log(error);
        }
    }

    const validateToken = async (input) => {
        let token = input?.token;
        if (token) {
            let validUser = await superagent.post(`herokuLink`).set('authorization', `Bearer ${token}`);
            setLoggedIn(true);
            setUser(validUser.body.user);
            cookie.save('token', validUser.body.token);
        } else {
            setLoggedIn(false); 
            setUser({});
        }
    }

    const logOut = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
        cookie.remove('user');
    }

    const statusLoggedIn = () => {
        setLoggedIn(true);
    }

    const canDo = (capability) => {
        console.log(user);
        user.capabilities = user?.capabilities === undefined ? ['read', 'write', 'edit', 'delete'] : user?.capabilities;
        return user?.capabilities?.includes(capability);
    }

    useEffect(() => {
        const tokenCookie = cookie.load('token');
        validateToken({token: tokenCookie });
    }, [])

    const state = {
        loggedIn: loggedIn,
        user: user,
        logIn: logIn,
        logOut: logOut,
        canDo: canDo,
        setUser: setUser,
        statusLoggedIn: statusLoggedIn,
        signup: signup
    }


    return (
        <authContext.Provider value={state}>
            {props.children}
        </authContext.Provider>
    )
}